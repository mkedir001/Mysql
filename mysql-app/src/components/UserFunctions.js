import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        username: newUser.username,
        name: newUser.name,
        birthdate: newUser.birthdate,
        breed: newUser.breed,
        weight: newUser.weight,
        password: newUser.password,
        imgUrl: newUser.imgUrl,
        dateCreated: newUser.dateCreated,
        lastSeen: newUser.lastSeen
    })
    .then(res => {
        console.log('Registered')
    })
}

export const login = user => {
    return axios
    .post('users/login', {
        username: user.username,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}