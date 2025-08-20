const { spawn } = require('child_process');
const fs = require('fs');

// Use node with tsx to handle TypeScript imports
const seedScript = `
import { getPayload } from 'payload'
import config from './src/payload.config.ts'

async function run() {
  try {
    const payload = await getPayload({ config })
    
    const homeData = ${fs.readFileSync('./homepage-data.json', 'utf8')}
    
    console.log('🌱 Seeding home global data...')
    
    const result = await payload.updateGlobal({
      slug: 'home',
      data: homeData,
    })
    
    console.log('✅ Home data seeded successfully!')
    console.log('📄 Global ID:', result.id)
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

run()
`;

fs.writeFileSync('./temp-seed.ts', seedScript);

// Run with tsx
const child = spawn('npx', ['tsx', 'temp-seed.ts'], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: { ...process.env, NODE_OPTIONS: '--no-deprecation' }
});

child.on('close', (code) => {
  // Clean up temp file
  try {
    fs.unlinkSync('./temp-seed.ts');
  } catch (e) {}
  
  process.exit(code);
});