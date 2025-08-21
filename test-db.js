const { getPayload } = require('payload')
const config = require('./src/payload.config.ts')

async function testDatabase() {
  try {
    console.log('Testing database connection...')
    const payload = await getPayload({ config })
    
    console.log('✅ Database connection successful!')
    
    // Test if we can query users
    const users = await payload.find({
      collection: 'users',
      limit: 1
    })
    
    console.log('✅ Database query successful!')
    console.log(`Found ${users.totalDocs} users in the database`)
    
    // Check if TwitterReviews collection exists
    try {
      const reviews = await payload.find({
        collection: 'twitter-reviews',
        limit: 1
      })
      console.log(`✅ TwitterReviews collection found with ${reviews.totalDocs} items`)
    } catch (error) {
      console.log('ℹ️ TwitterReviews collection not yet populated')
    }
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    process.exit(1)
  }
}

testDatabase()