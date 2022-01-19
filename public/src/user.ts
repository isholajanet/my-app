export interface NewUser{
    firstname: string
    lastname: string
    email: string
    password: string
}

export interface User extends NewUser{
    id: number
}

