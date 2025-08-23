import { getPayload } from 'payload'
import config from '@payload-config'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const payload = await getPayload({ config })
    
    console.log('🔍 Fetching Home global data from database...')
    
    const homeGlobal = await payload.findGlobal({
      slug: 'home',
    })

    if (!homeGlobal) {
      console.log('⚠️ No home global data found in database')
      return Response.json({ 
        success: false, 
        message: 'No home data found',
        data: null 
      }, { status: 404 })
    }

    console.log('✅ Home global data fetched successfully')
    console.log(`📊 Data includes: ${homeGlobal.successStories?.length || 0} success stories`)

    // Return the data in the format expected by the frontend
    const responseData = {
      heroSection: homeGlobal.heroSection,
      mainStats: homeGlobal.mainStats,
      services: homeGlobal.services,
      successStories: homeGlobal.successStories,
      trainerProfile: homeGlobal.trainerProfile,
      tradingFeatures: homeGlobal.tradingFeatures,
      finalCTA: homeGlobal.finalCTA,
      updatedAt: homeGlobal.updatedAt,
    }
    
    return Response.json(responseData)
  } catch (error) {
    console.error('❌ Error fetching Home global data:', error)
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      data: null 
    }, { status: 500 })
  }
}

// Optional: Add POST method to trigger population if needed
export async function POST(request: NextRequest): Promise<Response> {
  try {
    // Trigger population of home data
    const populateResponse = await fetch(`${request.nextUrl.origin}/api/populate-home`, {
      method: 'POST',
    })
    
    if (!populateResponse.ok) {
      throw new Error('Failed to populate home data')
    }

    // Then fetch the populated data
    return GET(request)
  } catch (error) {
    console.error('❌ Error populating and fetching home data:', error)
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      data: null 
    }, { status: 500 })
  }
}