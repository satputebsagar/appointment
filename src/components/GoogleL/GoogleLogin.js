import React from "react";
import GoogleLogin from 'react-google-login';
import {login} from '../../api/googleAuth';

import './googleLogin.css';


const Googlelogin=(props)=>{

    const responseGoogle=async(authResult)=>{
        try{
            if(authResult['code']){
                const result=await login(authResult('code'));
                console.log(authResult);
                props.login(result);
            }else{
                throw new Error(authResult);
            }
        }catch(error){
            console.log(error);
        }
    };

    return(
        <div className="login-page">
            <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="login with Google"
            responseType="code"

            redirectUri="postmessage"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />

        </div>
    )
}



export default Googlelogin;