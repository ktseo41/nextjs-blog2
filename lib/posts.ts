import fs from 'fs'
import * as dotenv from 'dotenv'
dotenv.config()

// const postsDirectory = path.join(process.cwd(), '../')

export function getAllPostIds(){
    const fileNames = fs.readdirSync(process.env.POSTS_LOCATION)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}