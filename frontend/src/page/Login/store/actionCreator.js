import axios from 'axios';
import { fromJS } from 'immutable';

export const login = (Email, Password) =>{
    return() =>{
        let postdate = {
            "email": Email,
            "password": Password
        }
        axios.post('https://ense-701-team-9-seer.herokuapp.com/api/manager/Search_manager',postdate).then((res) =>{
            const data = res.data;
            //console.log(data[0].email);
            if(data[0].email === Email && data[0].password === Password){
                var storage=window.localStorage;
                storage.setItem("Islogin", "login");
                //console.log("login");
                window.location.href = './';
            }
        }).catch(() => {
            console.log('error: Can not get Search List');
        })
    }
}