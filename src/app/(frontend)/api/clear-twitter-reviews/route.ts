import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(): Promise<Response> {
  try {
    const payload = await getPayload({ config })
    
    console.log('🧹 Clearing existing Twitter reviews...')
    
    // Delete all existing twitter reviews
    const result = await payload.delete({
      collection: 'twitter-reviews',
      where: {}
    })
    
    console.log(`✅ Cleared ${result.docs.length} Twitter reviews`)
    
    return Response.json({
      success: true,
      message: `✅ Cleared ${result.docs.length} Twitter reviews successfully!`,
      deletedCount: result.docs.length
    })
  } catch (error) {
    console.error('❌ Error clearing Twitter reviews:', error)
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}