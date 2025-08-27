import HomePage from './home'

export default function Page() {
  return <HomePage />
}

export async function generateMetadata() {
  return {
    title: 'Finanthropist - Learn Stock Market Investing',
    description: 'Join 25,000+ students who have mastered practical stock market investing with Maharashtra\'s most trusted educator, Sameer Sarang.',
  }
}
