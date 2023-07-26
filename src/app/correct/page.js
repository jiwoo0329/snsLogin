'use client'

import NaverSignOut from "@/component/sns/signout/NaverSignOut";
import KakaoSignOut from "@/component/sns/signout/KakaoSignOut";
import GoogleSignOut from "@/component/sns/signout/GoogleSignOut";
import { useEffect } from "react";

export default function Correct(){




    useEffect(()=>{
        let GoogleAuth = gapi.auth2.GoogleAuth
        let is = GoogleAuth.isSignedIn.get();
        // let profile = GoogleUser.getBasicProfile();

        console.log("is", is)
    },[])


    return(
        <div>로그인 성공입니다.


            <br/>
            {/* <NaverSignOut/> */}
            {/* <KakaoSignOut/> */}

            <GoogleSignOut/>

        </div>
    )
}