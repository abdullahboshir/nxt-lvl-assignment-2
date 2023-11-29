import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT as string,
  db_name: process.env.DB_NAME as string,
  db_pass: process.env.DB_PASS as string,
}
