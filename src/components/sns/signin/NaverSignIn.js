'use client';

import { useEffect, useRef } from 'react';

export default function NaverSignIn() {
    const naverRef = useRef();

    useEffect(() => {
        let naverLogin = new window.naver.LoginWithNaverId({
            clientId: process.env.NEXT_PUBLIC_JW_NAVER_CLIENT_ID,
            callbackUrl: process.env.NEXT_PUBLIC_JW_KAKAO_CALLBACK_URL,
            isPopup: false,
            loginButton: { color: 'green', type: 3, height: '50' },
            callbackHandle: true,
        });
        naverLogin.init(); // 설정 정보 초기화
        naverLogin.logout();
        try {
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    console.log('naverLogin.user', naverLogin.user);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleNaverLogin = () => {
        naverRef.current.children[0].click();
    };

    return (
        <>
            <div
                id="naverIdLogin"
                ref={naverRef}
                style={{ display: 'none' }}
            ></div>
            <button
                type='button'
                onClick={() => {
                    handleNaverLogin();
                }}
            >
                네이버 로그인
            </button>
        </>
    );
}
