import {open} from "sqlite";
import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";

let db;

export async function initDb() {
    db = await open({
        filename: "./auth.db",
        driver: sqlite3.Database
    });
    await db.exec(`CREATE TABLE IF NOT EXIST users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT UNIQUE,
        password TEXT,
        create_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`)
}

export function getDb(){
    return db;
}