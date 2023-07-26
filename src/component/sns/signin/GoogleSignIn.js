'use client';
import { useEffect } from "react";
export default function GoogleSignIn() {
  // 예시
  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_JW_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_JW_GOOGLE_CALLBACK_URL}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;

  const login = () => {

    // const google = (window).google;

    // google.accounts.id.initialize({
    //   client_id: process.env.NEXT_PUBLIC_JW_GOOGLE_CLIENT_ID,
    //   callback: process.env.NEXT_PUBLIC_JW_GOOGLE_CALLBACK_URL,
      
    // });
    // google.accounts.id.prompt();

    window.location.href = GOOGLE_LOGIN_URL
  };



 


  return (
    <>
      <button onClick={()=>login()}>구글 로그인</button>
    </>
  );
}
