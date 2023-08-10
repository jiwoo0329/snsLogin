'use client';

import { useState, useEffect } from "react";
import jwt_decode from 'jwt-decode';

export default function GoogleSignIn(){

    const [user, setUser] = useState({});


    let handleCallbackResponse = (res) => {
        console.log("res", res.credential)

        let userObject = jwt_decode(res.credential);
        setUser(userObject);

        document.getElementById('signInDiv').hidden = true;


    }
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_JW_GOOGLE_CLIENT_ID,
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(document.getElementById('signInDiv'), {
            theme:'outline',
            size: 'large'
        });

        google.accounts.id.prompt();
    },[]);


    const handleLogout = () => {
        setUser({});
        document.getElementById('signInDiv').hidden = false
    }

    // 참고 유튜브: https://www.youtube.com/watch?v=xLzRh4k-0dg&t=154s


    return(
        <>
        <button type="button" id="signInDiv">구글 로그인</button>

        {Object.keys(user).length !== 0 && <button onClick={()=>{handleLogout()}}>signout</button>}

        {user && <div>
            <h1>{user.name}</h1>
            <img src={user.picture} alt="이미지"></img>
            </div>}
        </>
    )
}