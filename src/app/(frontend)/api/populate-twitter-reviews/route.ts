import { getPayload } from 'payload'
import config from '@payload-config'
import { twitterReviewsData } from '../../../../endpoints/seed/twitter-reviews-data'

export async function POST(): Promise<Response> {
  try {
    const payload = await getPayload({ config })
    
    console.log('📱 Populating Twitter reviews with comprehensive data...')
    
    // Create all Twitter reviews
    const createdReviews = []
    
    for (const reviewData of twitterReviewsData) {
      const review = await payload.create({
        collection: 'twitter-reviews',
        data: reviewData,
      })
      createdReviews.push(review)
      console.log(`✅ Created Twitter review: ${reviewData.name} (@${reviewData.username.slice(1)})`)
    }
    
    console.log(`🎉 Successfully created ${createdReviews.length} Twitter reviews!`)
    
    return Response.json({
      success: true,
      message: `✅ Successfully populated ${createdReviews.length} Twitter reviews!`,
      data: {
        createdCount: createdReviews.length,
        reviews: createdReviews.map(review => ({
          id: review.id,
          name: review.name,
          username: review.username,
          likes: review.engagement.likes,
          isActive: review.isActive
        }))
      }
    })
  } catch (error) {
    console.error('❌ Error populating Twitter reviews:', error)
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}