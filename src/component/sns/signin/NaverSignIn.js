"use client";

import { useEffect } from "react";

export default function NaverSignIn() {
    useEffect(() => {
        let naverLogin = new window.naver.LoginWithNaverId({
            clientId: `${process.env.NEXT_PUBLIC_JW_NAVER_CLIENT_ID}`,
            callbackUrl: process.env.NEXT_PUBLIC_JW_KAKAO_CALLBACK_URL,
            isPopup: false,
            loginButton: { color: "green", type: 3, height: "50" },
            callbackHandle: true,
        });
        naverLogin.init();
        naverLogin.logout();
        try {
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    console.log("naverLogin.user", naverLogin.user);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <button type="button" id="naverIdLogin">
            네이버 로그인
        </button>
    );
}
