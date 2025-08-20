import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from './src/payload.config.ts'
import { readFileSync } from 'fs'

async function seedHomeData() {
  try {
    const payload = await getPayloadHMR({ config: configPromise })
    
    // Read the JSON data
    const homeData = JSON.parse(readFileSync('./homepage-data.json', 'utf8'))
    
    console.log('Seeding home global data...')
    
    // Update the home global
    await payload.updateGlobal({
      slug: 'home',
      data: homeData,
    })
    
    console.log('✅ Home data seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding home data:', error)
    process.exit(1)
  }
}

seedHomeData()