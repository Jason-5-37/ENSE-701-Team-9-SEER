import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const login = (Email, Password) =>{
    return() =>{
        let postdate = {
            "email": Email,
            "password": Password
        }
        axios.post('http://localhost:8082/api/manager/Search_manager',postdate).then((res) =>{
            const data = res.data;
            //console.log(data[0].email);
            if(data[0].email === Email && data[0].password === Password){
                var storage=window.localStorage;
                storage.setItem("Islogin", "login");
                console.log("login");
            }
        }).catch(() => {
            console.log('error: Can not get Search List');
        })
    }
}