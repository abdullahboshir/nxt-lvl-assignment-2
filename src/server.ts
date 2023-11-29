import app from './app'
import mongoose from 'mongoose'
import config from './app/config'

const database_url = `mongodb+srv://${config.db_name}:${config.db_pass}@next-level-projects.u1x9gaa.mongodb.net/nxt-lvl-assignment-2?retryWrites=true&w=majority`
async function main() {
  try {
    await mongoose.connect(database_url as string)

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('the error from server', error)
  }
}

main()
