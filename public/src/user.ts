export interface NewUser{

    firstname: string
    lastname: string
    email: string
    phonenumber: string
}

export interface User extends NewUser{
    id: number
}

