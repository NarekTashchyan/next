export interface IUser{
    id: string;
    name: string;
    surname: string
    login: string;
    password: string;
}

export type Input = Omit<IUser, 'id'>
export type partialUser = Partial<IUser>