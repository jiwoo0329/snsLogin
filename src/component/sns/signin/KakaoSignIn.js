'use client';

import KakaoInit from '../init/KakaoInit';

export default function KakaoSignIn() {
    const kakaoLogin = async () => {
        // 카카오 초기화
        const kakao = KakaoInit();

        // 카카오 로그인 구현
        kakao.Auth.login({
            success: () => {
                kakao.API.request({
                    url: '/v2/user/me', // 사용자 정보 가져오기
                    success: (res) => {
                        // 로그인 성공할 경우 정보 확인 후 /correct 페이지로 push
                        console.log('로그인 정보', res);
                        console.log('로그인 토큰', kakao.Auth.getAccessToken()); // 카카오 접근 토큰 확인 (로그인 후 해당 토큰을 이용하여 추가 기능 수행 가능)
                        // window.location.href = process.env.NEXT_PUBLIC_JW_KAKAO_CALLBACK_URL;
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
        <button type="button" onClick={() => kakaoLogin()}>
            카카오 로그인
        </button>
    );
}
