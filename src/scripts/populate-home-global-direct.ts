#!/usr/bin/env tsx

import { getPayload } from 'payload'
import config from '@payload-config'
import { homeGlobalData } from '../endpoints/seed/home-global-data'

async function populateHomeGlobalDirect() {
  try {
    console.log('🚀 Starting Home global population...')
    
    const payload = await getPayload({ config })
    
    console.log('📊 Populating Home global with comprehensive mock data...')
    
    const result = await payload.updateGlobal({
      slug: 'home',
      data: homeGlobalData as any,
    })

    console.log('✅ Home global populated successfully!')
    console.log('📈 Data populated includes:')
    console.log(`   - Hero Section with ${homeGlobalData.heroSection.stats.length} stats`)
    console.log(`   - ${homeGlobalData.mainStats.length} main statistics`)
    console.log(`   - ${homeGlobalData.services.length} service offerings`)
    console.log(`   - ${homeGlobalData.successStories.length} client success stories`)
    console.log(`   - ${homeGlobalData.successStories.length} success stories`)
    console.log(`   - Complete trainer profile with ${homeGlobalData.trainerProfile.achievements.length} achievements`)
    console.log(`   - ${homeGlobalData.tradingFeatures.features.length} trading features`)
    console.log(`   - Final CTA with ${homeGlobalData.finalCTA.features.length} features`)
    
    console.log('\n🎉 Home global is now ready with complete mock data!')
    console.log('🔗 You can view the data at: http://localhost:3000/admin/globals/home')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error populating Home global:', error)
    process.exit(1)
  }
}

// Run the script
populateHomeGlobalDirect()