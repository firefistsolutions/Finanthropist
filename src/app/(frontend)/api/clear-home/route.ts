import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(): Promise<Response> {
  try {
    const payload = await getPayload({ config })
    
    console.log('🧹 Clearing existing Home global data...')
    
    // Clear the Home global by setting it to empty/default values
    const result = await payload.updateGlobal({
      slug: 'home',
      data: {
        heroSection: {
          title: '',
          subtitle: '',
          ctaText: '',
          stats: []
        },
        mainStats: [],
        services: [],
        successStories: [],
        trainerProfile: {
          name: '',
          title: '',
          experience: '',
          description: '',
          achievements: [],
          stats: []
        },
        tradingFeatures: {
          title: '',
          subtitle: '',
          features: []
        },
        finalCTA: {
          title: '',
          subtitle: '',
          primaryCTAText: '',
          secondaryCTAText: '',
          features: []
        }
      }
    })
    
    return Response.json({
      success: true,
      message: '✅ Home global data cleared successfully!'
    })
  } catch (error) {
    console.error('❌ Error clearing Home global:', error)
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}