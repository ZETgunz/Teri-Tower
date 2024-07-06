import {users} from '../users/login.js';
import { charList } from '../res/data/charList.js';

function getUser(name){
    for(var i in users){
        if(users[i].name == name){
            return i;
        }
    }
}

function getCategory(category){
    for(var i in charList){
        if(charList[i].category == category){
            return i;
        }
    }
}


export {getUser};
export {getCategory};