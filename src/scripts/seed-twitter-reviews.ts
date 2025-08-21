import { getPayload } from 'payload'
import config from '../payload.config'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

console.log('Environment check:')
console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? 'Set' : 'Not set')
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set')

const staticTwitterReviews = [
  {
    name: "Rajesh Kumar",
    username: "@rajesh_trader",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "@Finanthropist - Outstanding financial guidance and market insights. Their personalized strategies helped me achieve 23% returns this quarter. Highly recommend their services! 🚀",
    timestamp: "2h",
    engagement: {
      likes: 47,
      replies: 8,
      retweets: 12
    },
    isActive: true,
    displayOrder: 1
  },
  {
    name: "Priya Sharma",
    username: "@priya_invests",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face",
    content: "@Finanthropist team's risk management approach is exceptional. They helped me navigate the volatile market with confidence. Best financial advisory I've worked with! 💯",
    timestamp: "4h",
    engagement: {
      likes: 32,
      replies: 5,
      retweets: 7
    },
    isActive: true,
    displayOrder: 2
  },
  {
    name: "Amit Patel",
    username: "@amit_finance",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Just completed their advanced trading course. @Finanthropist provides world-class education with practical insights. My trading skills improved tremendously! 📈",
    timestamp: "6h",
    engagement: {
      likes: 28,
      replies: 6,
      retweets: 9
    },
    isActive: true,
    displayOrder: 3
  },
  {
    name: "Sneha Reddy",
    username: "@sneha_stocks",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "@Finanthropist's lifetime support is amazing! 24/7 expert assistance whenever I need guidance. Their technical analysis reports are spot on. Thank you team! 🙏",
    timestamp: "8h",
    engagement: {
      likes: 41,
      replies: 11,
      retweets: 6
    },
    isActive: true,
    displayOrder: 4
  },
  {
    name: "Vikram Singh",
    username: "@vikram_trades",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Switched to @Finanthropist after trying multiple advisors. Their personalized approach and market expertise is unmatched. Portfolio grew 18% in six months! 🎯",
    timestamp: "12h",
    engagement: {
      likes: 35,
      replies: 9,
      retweets: 8
    },
    isActive: true,
    displayOrder: 5
  },
  {
    name: "Kavya Iyer",
    username: "@kavya_investor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content: "New to trading and @Finanthropist made it so easy to understand. Their beginner-friendly approach and step-by-step guidance is perfect for learners like me! 📚",
    timestamp: "1d",
    engagement: {
      likes: 23,
      replies: 4,
      retweets: 3
    },
    isActive: true,
    displayOrder: 6
  },
  {
    name: "Arjun Mehta",
    username: "@arjun_capital",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    content: "@Finanthropist's market analysis is incredibly accurate. Their daily insights help me make informed decisions. Customer service is prompt and professional! ⭐",
    timestamp: "1d",
    engagement: {
      likes: 39,
      replies: 7,
      retweets: 5
    },
    isActive: true,
    displayOrder: 7
  },
  {
    name: "Meera Joshi",
    username: "@meera_wealth",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content: "Been following @Finanthropist for 2 years now. Their consistency in delivering quality advice and education is remarkable. Truly the best in the business! 💎",
    timestamp: "2d",
    engagement: {
      likes: 52,
      replies: 13,
      retweets: 11
    },
    isActive: true,
    displayOrder: 8
  }
]

async function seedTwitterReviews() {
  try {
    console.log('Initializing Payload...')
    const payload = await getPayload({ config })
    
    console.log('Starting to seed Twitter reviews...')
    
    // First, clear existing reviews
    const existingReviews = await payload.find({
      collection: 'twitter-reviews',
      limit: 1000
    })
    
    if (existingReviews.docs.length > 0) {
      console.log(`Found ${existingReviews.docs.length} existing reviews. Clearing them...`)
      for (const review of existingReviews.docs) {
        await payload.delete({
          collection: 'twitter-reviews',
          id: review.id
        })
      }
      console.log('Existing reviews cleared.')
    }
    
    // Now seed the static data
    for (let i = 0; i < staticTwitterReviews.length; i++) {
      const review = staticTwitterReviews[i]
      
      try {
        const result = await payload.create({
          collection: 'twitter-reviews',
          data: review
        })
        
        console.log(`✅ Created review ${i + 1}: ${review.name} (ID: ${result.id})`)
      } catch (error) {
        console.error(`❌ Failed to create review ${i + 1} (${review.name}):`, error)
      }
    }
    
    console.log('✅ Finished seeding Twitter reviews!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding Twitter reviews:', error)
    process.exit(1)
  }
}

seedTwitterReviews()