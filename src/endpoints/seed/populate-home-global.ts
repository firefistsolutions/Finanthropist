import { homeGlobalData } from './home-global-data'
import { Payload } from 'payload'

export const populateHomeGlobal = async (payload: Payload): Promise<void> => {
  try {
    console.log('Populating Home global with comprehensive mock data...')
    
    // Update the Home global with our mock data
    const result = await payload.updateGlobal({
      slug: 'home',
      data: homeGlobalData,
    })

    console.log('✅ Home global populated successfully!')
    console.log('📊 Data populated includes:')
    console.log(`   - Hero Section with ${homeGlobalData.heroSection.stats.length} stats`)
    console.log(`   - ${homeGlobalData.mainStats.length} main statistics`)
    console.log(`   - ${homeGlobalData.services.length} service offerings`)
    console.log(`   - ${homeGlobalData.successStories.length} client success stories`)
    console.log(`   - ${homeGlobalData.successStats.length} success metrics`)
    console.log(`   - Complete trainer profile with ${homeGlobalData.trainerProfile.achievements.length} achievements`)
    console.log(`   - ${homeGlobalData.tradingFeatures.features.length} trading features`)
    console.log(`   - Final CTA with ${homeGlobalData.finalCTA.features.length} features`)
    
    return result
  } catch (error) {
    console.error('❌ Error populating Home global:', error)
    throw error
  }
}