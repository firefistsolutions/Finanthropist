import type { Home } from '@/payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export const getHomeData = async (): Promise<Home | null> => {
  const payload = await getPayloadHMR({ config: configPromise })

  try {
    const homeData = await payload.findGlobal({
      slug: 'home',
      draft: false,
    })

    return homeData || null
  } catch (error) {
    console.error('Error fetching home data:', error)
    return null
  }
}