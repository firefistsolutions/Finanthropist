import { getPayload } from 'payload'
import config from '@payload-config'
import { homeGlobalCleanData } from '../../../../endpoints/seed/home-global-clean-data'

export async function POST(): Promise<Response> {
  try {
    const payload = await getPayload({ config })
    
    console.log('📊 Populating Home global with comprehensive mock data...')
    
    const result = await payload.updateGlobal({
      slug: 'home',
      data: homeGlobalCleanData,
    })

    const response = {
      success: true,
      message: '✅ Home global populated successfully!',
      data: {
        heroStats: homeGlobalCleanData.heroSection.stats.length,
        mainStats: homeGlobalCleanData.mainStats.length,
        services: homeGlobalCleanData.services.length,
        successStories: homeGlobalCleanData.successStories.length,
        achievements: homeGlobalCleanData.trainerProfile.achievements.length,
        tradingFeatures: homeGlobalCleanData.tradingFeatures.features.length,
        ctaFeatures: homeGlobalCleanData.finalCTA.features.length
      }
    }
    
    return Response.json(response)
  } catch (error) {
    console.error('❌ Error populating Home global:', error)
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}