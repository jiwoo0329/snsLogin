export default function NaverInit() {
    return new window.naver.LoginWithNaverId({
        clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        callbackUrl: process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL,
        isPopup: false,
        loginButton: { color: 'green', type: 3, height: '50' },
        callbackHandle: true,
    });
}
