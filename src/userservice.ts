//Data model interfaces

import {NewUser, User} from "./user"
import {Users} from "./users"

// Preloaded data/users

let users: Users = {
    1: {
        id: 1,
        firstname: "janet",
        lastname: "Ishola",
        email: "janet2010@gmail.com",
        phonenumber: "09076669000"
    },

    2: {
        id: 2,
        firstname: "tope",
        lastname: "Adeleke",
        email: "tope@email.com",
        phonenumber: "09087767765"
    },

    3: {
        id: 3,
        firstname: "tayo",
        lastname: "oluwatobi",
        email: "tayo@gmaiol.com",
        phonenumber: "070466677878"
    }

};

//Service method

//find all users
export const findAll = async (): Promise<User[]> => Object.values(users)

//find a particular user with id
export const find = async (id: number): Promise<User> => users[id];

//create a new user method

export const create = async(newUser : NewUser): Promise<User> => {
    const id = new Date().valueOf();

    users[id] = {
        id,
        ...newUser
    }

    return users[id];
}

//update a current user

export const update = async(id: number, updateUser: NewUser): 
                            Promise<User> => {
                                const user = await find(id);

                                if (!user){
                                    return null;
                                
                                }
                                users[id] = {id, ...updateUser}

                                return users[id];

                            };
//delete a user

export const remove = async(id: number): Promise<null | void> => {
    const user = await find(id);

    if(!user){
        return null;
    }
    delete users[id];
}
