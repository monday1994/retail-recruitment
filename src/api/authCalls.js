import {FETCH_TIMEOUT} from "../config/constants";
import {users} from "../tests/testData/users";

export const loginCall = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const { email, password } = data;

            const user = users.find(({email: candidateEmail, password: candidatePassword}) => {
                return email === candidateEmail && password === candidatePassword;
            })

            if(user) {
                resolve(user);
            } else {
                reject('Invalid credentials');
            }
        }, FETCH_TIMEOUT);
    });
}