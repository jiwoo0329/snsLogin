import KakaoInit from './KakaoInit';

export default function KakaoSignOut() {
    const kakao = KakaoInit();

    console.log(kakao.Auth.getAccessToken()); // 카카오 접근 토큰 확인 (로그인 후 해당 토큰을 이용하여 추가 기능 수행 가능)

    // 카카오 로그인 링크 해제
    kakao.API.request({
        url: '/v1/user/unlink',
        success: (res) => {
            // 로그인 성공할 경우 정보 확인 후 / 페이지로 push
            console.log('로그아웃 성공 정보', res);
            window.location.href = '/';
        },
        fail: (error) => {
            console.log(error);
        },
    });
}
