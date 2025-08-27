import OldHomePage from '../old-homepage/home'

export default function OldVersionPage() {
  return <OldHomePage />
}

export async function generateMetadata() {
  return {
    title: 'Finanthropist - Learn Stock Market Investing (Old Version)',
    description: 'Join 25,000+ students who have mastered practical stock market investing with Maharashtra\'s most trusted educator, Sameer Sarang.',
  }
}