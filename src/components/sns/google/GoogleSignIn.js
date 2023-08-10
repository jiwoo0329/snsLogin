'use client';

import { useState, useEffect, useRef } from 'react';
import SnsSignInApi from '../SnsSignInApi';

export default function GoogleSignIn() {
    const [user, setUser] = useState({});
    const googleRef = useRef();

    // 구글 로그인 기본 설정
    useEffect(() => {
        google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(document.getElementById('signInDiv'), {
            type: 'standard',
            theme: 'outline',
            size: 'large',
        });

        google.accounts.id.prompt();
    }, []);

    let handleCallbackResponse = (res) => {
        // jwt 디코딩 (payload값 json으로 파싱)
        var base64Payload = res.credential.split('.')[1];
        var payload = Buffer.from(base64Payload, 'base64');
        var userObject = JSON.parse(payload.toString());
        setUser(userObject);


        let auth2 = gapi.auth2.getAuthInstance();

        console.log("auth2", auth2)





        // TODO: 정보 확인 후 정보 저장하기
        // 로그인 토큰으로 api 실행해서 새 토큰 발급
        // SnsSignInApi(snsToken);
        document.getElementById('signInDiv').hidden = true;
        // window.location.href = '/auth/signin/connect';
    };

    useEffect(()=>{
        console.log("user", user)
    },[user])

    // TODO: 구글 로그아웃 구현
    // const handleLogout = () => {
    //     setUser({});
    //     document.getElementById('signInDiv').hidden = false;
    // };

    return (
        <>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <div
                    style={{
                        position: 'absolute',
                        overflow: 'hidden',
                        height: '100%',
                        width: '46px',
                        opacity: '0',
                    }}
                >
                    <div id="signInDiv" ref={googleRef}></div>
                </div>
                <a className="google">구글 로그인</a>
            </div>

            {/* {Object.keys(user).length !== 0 && (
                <button
                    onClick={() => {
                        handleLogout();
                    }}
                >
                    구글 로그아웃
                </button>
            )} */}

            {/* {user && (
                <div>
                    <h1>{user.name}</h1>
                    <img src={user.picture} alt="이미지"></img>
                </div>
            )} */}
        </>
    );
}
