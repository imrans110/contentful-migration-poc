require('dotenv').config()
const path = require('path')

const { runMigration } = require('contentful-migration')
const options = {
    filePath: path.join(__dirname, './migrations/1.js'),
    spaceId: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
}
runMigration(options)
  .then(() => console.log('Migration Done!'))
  .catch((e) => console.error(e))


