import sql from 'better-sqlite3'
import { resolve } from 'styled-jsx/css'
const db = sql('meals.db')

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // throw new Error("Loading meals failed...")
    return db.prepare('SELECT * From meals').all()
}

export function getMealsBySlug(slug){
    return db.prepare('SELECT * From meals WHERE slug = ?').get(slug)
}