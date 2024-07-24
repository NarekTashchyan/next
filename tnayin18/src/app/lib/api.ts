import { IUser, partialUser } from "./types";
import Database from "better-sqlite3";
const db = new Database("auth.db")
export const addUser = (user: partialUser): Database.RunResult => {
    console.log(user)
    return db.prepare(`
        INSERT INTO users (name, surname, login, password) VALUES (@name, @surname, @login, @password)
    `).run({ ...user });
}

export const getAllUsers = ():IUser[] => {
    return db.prepare(`
        SELECT * FROM users
        `).all() as IUser[];
}