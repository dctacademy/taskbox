export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        user
    }
}

export const editUser = (id, user) => {
    return {
        type: 'EDIT_USER',
        id, 
        user 
    }
}

export const removeUser = (id) => {
    return {
        type: 'REMOVE_USER',
        id
    }
}