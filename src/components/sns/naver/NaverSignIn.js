'use client';

import { useEffect, useRef } from 'react';
import SnsSignInApi from '../SnsSignInApi';
import NaverInit from "@/components/sns/naver/NaverInit";
import useUserStore from '@/store/userStore';

export default function NaverSignIn() {
    const { setSnsToken } = useUserStore();
    const naverRef = useRef();
    

    useEffect(() => {
        let naverLogin = NaverInit();
        naverLogin.init(); // 설정 정보 초기화
        naverLogin.logout();
        try {
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    // 로그인 완료
                    // TODO: 로그인 정보 저장하기
                    let memberInfo = naverLogin.user; // 회원 정보
                    let snsToken = naverLogin.accessToken.accessToken; // access_token
                    setSnsToken(snsToken);
                    window.location.href = '/auth/signin/connect';
                    // SnsSignInApi(snsToken);
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
            <a
                className="naver"
                onClick={() => {
                    handleNaverLogin();
                }}
            >
                네이버 로그인
            </a>
        </>
    );
}
