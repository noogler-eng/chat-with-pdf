import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
neonConfig.fetchConnectionCache = true;

if(!process.env.DB_URL){
    throw new Error("no db url found!");
}

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql);



// drizzle kit -> provides migration