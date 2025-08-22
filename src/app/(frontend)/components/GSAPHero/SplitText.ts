// Custom SplitText utility to replace GSAP's paid SplitText plugin
export interface SplitTextOptions {
  type?: 'words' | 'lines' | 'chars' | 'words,lines' | 'chars,words' | 'chars,lines' | 'chars,words,lines'
  linesClass?: string
  wordsClass?: string
  charsClass?: string
  autoSplit?: boolean
  mask?: 'lines' | 'words' | 'chars' | boolean
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
  private originalStyle: string
  private lines: HTMLElement[] = []
  private words: HTMLElement[] = []
  private chars: HTMLElement[] = []
  private options: SplitTextOptions

  constructor(target: string | HTMLElement, options: SplitTextOptions = {}) {
    this.original = typeof target === 'string' ? document.querySelector(target)! : target
    this.originalHTML = this.original.innerHTML
    this.originalStyle = this.original.getAttribute('style') || ''
    this.options = options

    if (!this.original) {
      throw new Error('Target element not found')
    }

    this.split()
  }

  private split() {
    const { type = 'words', linesClass = 'split-line', wordsClass = 'split-word', charsClass = 'split-char', mask = false } = this.options

    // Get the original text content
    const text = this.original.textContent || ''
    
    // Clear the original element
    this.original.innerHTML = ''
    
    if (type.includes('lines') && type.includes('words')) {
      this.splitByLinesAndWords(text, linesClass, wordsClass, mask === 'lines' || mask === true)
    } else if (type.includes('words')) {
      this.splitByWords(text, wordsClass)
    } else if (type.includes('chars')) {
      this.splitByChars(text, charsClass)
    } else if (type.includes('lines')) {
      this.splitByLines(text, linesClass, mask === 'lines' || mask === true)
    }
  }

  private splitByLinesAndWords(text: string, linesClass: string, wordsClass: string, maskLines: boolean = false) {
    // Create a temporary element to measure text
    const tempElement = document.createElement('div')
    tempElement.style.cssText = `
      position: absolute;
      visibility: hidden;
      white-space: nowrap;
      font: inherit;
      width: auto;
      height: auto;
      top: -9999px;
      left: -9999px;
    `
    
    // Copy all computed styles from original element
    const computedStyle = window.getComputedStyle(this.original)
    tempElement.style.font = computedStyle.font
    tempElement.style.fontSize = computedStyle.fontSize
    tempElement.style.fontFamily = computedStyle.fontFamily
    tempElement.style.fontWeight = computedStyle.fontWeight
    tempElement.style.letterSpacing = computedStyle.letterSpacing
    tempElement.style.lineHeight = computedStyle.lineHeight
    
    document.body.appendChild(tempElement)

    const words = text.split(/\s+/).filter(word => word.length > 0)
    const containerWidth = this.original.offsetWidth
    
    let currentLine: HTMLElement | null = null
    let currentLineWords: string[] = []
    let currentLineWidth = 0
    
    words.forEach((word, index) => {
      // Measure word width including space
      const testText = currentLineWords.length > 0 ? currentLineWords.join(' ') + ' ' + word : word
      tempElement.textContent = testText
      const totalWidth = tempElement.offsetWidth
      
      // Check if we need a new line
      if (!currentLine || totalWidth > containerWidth) {
        // Finalize current line if it exists
        if (currentLine && currentLineWords.length > 0) {
          this.createWordsInLine(currentLine, currentLineWords, wordsClass)
        }
        
        // Create new line
        currentLine = document.createElement('div')
        currentLine.className = linesClass
        
        if (maskLines) {
          currentLine.style.cssText = 'overflow: hidden; position: relative;'
        }
        
        this.original.appendChild(currentLine)
        this.lines.push(currentLine)
        currentLineWords = [word]
        currentLineWidth = 0
      } else {
        currentLineWords.push(word)
      }
    })
    
    // Handle the last line
    if (currentLine && currentLineWords.length > 0) {
      this.createWordsInLine(currentLine, currentLineWords, wordsClass)
    }

    document.body.removeChild(tempElement)
  }

  private createWordsInLine(lineElement: HTMLElement, words: string[], wordsClass: string) {
    words.forEach((word, index) => {
      const wordSpan = document.createElement('span')
      wordSpan.className = wordsClass
      wordSpan.textContent = word
      wordSpan.style.cssText = 'display: inline-block; position: relative;'
      
      lineElement.appendChild(wordSpan)
      this.words.push(wordSpan)
      
      // Add space after word (except last word in line)
      if (index < words.length - 1) {
        lineElement.appendChild(document.createTextNode(' '))
      }
    })
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

  private splitByLines(text: string, linesClass: string, maskLines: boolean = false) {
    // Simple line split based on line breaks
    const lines = text.split('\n').filter(line => line.trim().length > 0)
    
    lines.forEach(line => {
      const lineDiv = document.createElement('div')
      lineDiv.className = linesClass
      lineDiv.textContent = line
      
      if (maskLines) {
        lineDiv.style.cssText = 'overflow: hidden; position: relative;'
      }
      
      this.original.appendChild(lineDiv)
      this.lines.push(lineDiv)
    })
  }

  revert() {
    this.original.innerHTML = this.originalHTML
    if (this.originalStyle) {
      this.original.setAttribute('style', this.originalStyle)
    }
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

// Static create method to match GSAP SplitText.create() API
export const SplitText = {
  create: (target: string | HTMLElement, options: SplitTextOptions & { 
    onSplit?: (result: SplitTextResult) => any 
  } = {}): any => {
    const { onSplit, ...splitOptions } = options
    const result = createSplitText(target, splitOptions)
    
    if (onSplit) {
      return onSplit(result)
    }
    
    return result
  }
}