"use server"
import bcrypt from 'bcrypt'
import { partialUser } from "./types"
import { nanoid } from 'nanoid'
import { addUser, getAllUsers } from './api'
import { redirect } from 'next/navigation'

export const handleSignup = async (prev: unknown, data: FormData) => {
    let user: partialUser = {
        id: nanoid(),
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        login: data.get('login') as string,
        password: data.get('password') as string,
    }
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;
    console.log(getAllUsers())
    console.log(user)
    const isNotUniqueLogin = getAllUsers().some(elem => user.login === elem.login)
    if (isNotUniqueLogin) {
        return {
            prev,
            message: 'Login is already taken'
        }
    }
    if (user.password && !regex.test(user.password)) {
        console.log(2)
        return {
            status: 400,
            message: 'Password must contain at least one letter, one number and one special character'
        }
    }
    if (user.password) {
        user.password = await bcrypt.hash(user.password, 10)
    }
    console.log(1)
    addUser(user)
    redirect("/login")
    return {
        message: 'OK'
    }
}

export const handleLogin = async (prev: unknown, data: FormData) => {
    if (!data.get('login') || !data.get('password')) {
        return {
            message: 'Login or password is empty'
        }
    }
    const user = getAllUsers().find(elem => elem.login === data.get('login') as string)
    if (!user) {
        return {
            message: 'User not found'
        }
    }
    const isPasswordCorrect = await bcrypt.compare(data.get('password') as string, user.password)
    if (!isPasswordCorrect) {
        return {
            message: 'Password is incorrect'
        }
    }
    redirect("/profile")
    return {
        message: 'OK'
    }
}