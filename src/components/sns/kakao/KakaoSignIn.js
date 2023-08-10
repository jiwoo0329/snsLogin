'use client';

import KakaoInit from './KakaoInit';
import SnsSignInApi from '../SnsSignInApi';
import useUserStore from '@/store/userStore';

export default function KakaoSignIn() {
    const { setSnsToken } = useUserStore();

    const kakaoLogin = async () => {
        // 카카오 초기화
        const kakao = KakaoInit();

        // 카카오 로그인 구현
        kakao.Auth.login({
            success: () => {
                kakao.API.request({
                    url: '/v2/user/me', // 사용자 정보 가져오기
                    success: (res) => {
                        // 로그인 성공

                        let snsLoginInfo = res; // 소셜로그인 회원정보
                        let snsToken = kakao.Auth.getAccessToken(); // 발급 토큰

                        setSnsToken(snsToken);
                        window.location.href = '/auth/signin/connect';
                        // 로그인 토큰으로 api 실행해서 새 토큰 발급
                        // SnsSignInApi(snsToken);
                    },
                    fail: (error) => {
                        console.log(error);
                    },
                });
            },
            fail: (error) => {
                console.log(error);
            },
        });
    };

    return (
        <a className="kakao" onClick={() => kakaoLogin()}>
            카카오 로그인
        </a>
    );
}
