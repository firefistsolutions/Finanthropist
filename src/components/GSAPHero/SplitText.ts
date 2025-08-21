// Custom SplitText utility to replace GSAP's paid SplitText plugin
export interface SplitTextOptions {
  type?: 'words' | 'lines' | 'chars' | 'words,lines' | 'chars,words' | 'chars,lines' | 'chars,words,lines'
  linesClass?: string
  wordsClass?: string
  charsClass?: string
}

export interface SplitTextResult {
  lines: HTMLElement[]
  words: HTMLElement[]
  chars: HTMLElement[]
  original: HTMLElement
  revert: () => void
}

export class CustomSplitText {
  private original: HTMLElement
  private originalHTML: string
  private lines: HTMLElement[] = []
  private words: HTMLElement[] = []
  private chars: HTMLElement[] = []

  constructor(target: string | HTMLElement, options: SplitTextOptions = {}) {
    this.original = typeof target === 'string' ? document.querySelector(target)! : target
    this.originalHTML = this.original.innerHTML

    if (!this.original) {
      throw new Error('Target element not found')
    }

    this.split(options)
  }

  private split(options: SplitTextOptions) {
    const { type = 'words', linesClass = 'split-line', wordsClass = 'split-word', charsClass = 'split-char' } = options

    // Get the original text content
    const text = this.original.textContent || ''
    
    // Clear the original element
    this.original.innerHTML = ''
    
    if (type.includes('lines') && type.includes('words')) {
      this.splitByLinesAndWords(text, linesClass, wordsClass)
    } else if (type.includes('words')) {
      this.splitByWords(text, wordsClass)
    } else if (type.includes('chars')) {
      this.splitByChars(text, charsClass)
    } else if (type.includes('lines')) {
      this.splitByLines(text, linesClass)
    }
  }

  private splitByLinesAndWords(text: string, linesClass: string, wordsClass: string) {
    // Create a temporary element to measure text
    const tempElement = document.createElement('div')
    tempElement.style.cssText = `
      position: absolute;
      visibility: hidden;
      white-space: nowrap;
      font: inherit;
      width: auto;
      height: auto;
    `
    document.body.appendChild(tempElement)

    const words = text.split(/\s+/).filter(word => word.length > 0)
    const containerWidth = this.original.offsetWidth
    
    let currentLine: HTMLElement | null = null
    let currentLineWidth = 0
    
    // Get computed styles for accurate measurement
    const computedStyle = window.getComputedStyle(this.original)
    tempElement.style.font = computedStyle.font
    tempElement.style.fontSize = computedStyle.fontSize
    tempElement.style.fontFamily = computedStyle.fontFamily
    tempElement.style.fontWeight = computedStyle.fontWeight

    words.forEach((word, index) => {
      // Measure word width
      tempElement.textContent = word + ' '
      const wordWidth = tempElement.offsetWidth
      
      // Check if we need a new line
      if (!currentLine || currentLineWidth + wordWidth > containerWidth) {
        currentLine = document.createElement('div')
        currentLine.className = linesClass
        currentLine.style.cssText = 'overflow: hidden; position: relative;'
        this.original.appendChild(currentLine)
        this.lines.push(currentLine)
        currentLineWidth = 0
      }
      
      // Create word span
      const wordSpan = document.createElement('span')
      wordSpan.className = wordsClass
      wordSpan.textContent = word
      wordSpan.style.cssText = 'display: inline-block; position: relative;'
      
      currentLine.appendChild(wordSpan)
      this.words.push(wordSpan)
      
      // Add space after word (except last word)
      if (index < words.length - 1) {
        currentLine.appendChild(document.createTextNode(' '))
      }
      
      currentLineWidth += wordWidth
    })

    document.body.removeChild(tempElement)
  }

  private splitByWords(text: string, wordsClass: string) {
    const words = text.split(/\s+/).filter(word => word.length > 0)
    
    words.forEach((word, index) => {
      const wordSpan = document.createElement('span')
      wordSpan.className = wordsClass
      wordSpan.textContent = word
      wordSpan.style.cssText = 'display: inline-block; position: relative;'
      
      this.original.appendChild(wordSpan)
      this.words.push(wordSpan)
      
      // Add space after word (except last word)
      if (index < words.length - 1) {
        this.original.appendChild(document.createTextNode(' '))
      }
    })
  }

  private splitByChars(text: string, charsClass: string) {
    const chars = text.split('')
    
    chars.forEach(char => {
      const charSpan = document.createElement('span')
      charSpan.className = charsClass
      charSpan.textContent = char === ' ' ? '\u00A0' : char // Use non-breaking space
      charSpan.style.cssText = 'display: inline-block; position: relative;'
      
      this.original.appendChild(charSpan)
      this.chars.push(charSpan)
    })
  }

  private splitByLines(text: string, linesClass: string) {
    // Simple line split - in real implementation, you'd measure text wrapping
    const lines = text.split('\n')
    
    lines.forEach(line => {
      const lineDiv = document.createElement('div')
      lineDiv.className = linesClass
      lineDiv.textContent = line
      lineDiv.style.cssText = 'overflow: hidden; position: relative;'
      
      this.original.appendChild(lineDiv)
      this.lines.push(lineDiv)
    })
  }

  revert() {
    this.original.innerHTML = this.originalHTML
    this.lines = []
    this.words = []
    this.chars = []
  }

  // Getter methods
  get splitLines(): HTMLElement[] { return this.lines }
  get splitWords(): HTMLElement[] { return this.words }
  get splitChars(): HTMLElement[] { return this.chars }
}

// Factory function to match GSAP SplitText API
export function createSplitText(target: string | HTMLElement, options: SplitTextOptions = {}): SplitTextResult {
  const splitText = new CustomSplitText(target, options)
  
  return {
    lines: splitText.splitLines,
    words: splitText.splitWords,
    chars: splitText.splitChars,
    original: splitText['original'],
    revert: () => splitText.revert()
  }
}