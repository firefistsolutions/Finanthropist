import HomePage from './home'

export default function Page() {
  return <HomePage />
}

export async function generateMetadata() {
  return {
    title: 'Master Stock Market Trading - Free Webinar by Sameer Sarang',
    description: 'Join Maharashtra\'s most trusted stock market educator for a FREE webinar. Learn practical trading strategies, technical analysis, and how to avoid losses. Register now!',
  }
}
