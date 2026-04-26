process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import "dotenv/config";

async function main() {
  console.log('Using DATABASE_URL:', process.env.DATABASE_URL)
  const pool = new pg.Pool({ 
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  const adapter = new PrismaPg(pool)
  const prisma = new PrismaClient({ adapter })
  
  try {
    console.log('Testing connection with adapter...')
    const count = await prisma.project.count()
    console.log(`Connection successful! Project count: ${count}`)
  } catch (error: any) {
    console.error('Connection failed:', JSON.stringify(error, null, 2))
    if (error.cause) console.error('Cause:', error.cause)
  } finally {
    await prisma.$disconnect()
  }
}

main()
