import {users} from '../users/login.js';

function getUser(name){
    for(var i in users){
        if(users[i].name == name){
            return i;
        }
    }
}

export {getUser};