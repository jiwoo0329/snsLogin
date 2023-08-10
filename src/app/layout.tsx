import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Script from 'next/script';


import 'tailwindcss/tailwind.css'
export const metadata = {
    title: 'sns 소셜 로그인 구현',
    description: 'sns 소셜 로그인 구현해보기.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // TODO: NEXTJS에 맞게 스크립스 추가 방식 수정하기
        <>
        <head>
                <script
                    src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
                    async
                ></script>

                <script
                    src="https://developers.kakao.com/sdk/js/kakao.js"
                    async
                    defer
                ></script>
                <script
                    src="https://accounts.google.com/gsi/client"
                    async
                    defer
                ></script>
                {/* <script
                    async
                    defer
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_US/sdk.js"
                ></script> */}
                <script
                    async
                    defer
                    crossOrigin="anonymous"
                    src={`https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v10.0&appId=${process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID}`}
                    nonce="SiOBIhLG"
                ></script>
            </head>
            {/* <head>
                <script
                    src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
                    async
                ></script>

                <script
                    src="https://developers.kakao.com/sdk/js/kakao.js"
                    async
                    defer
                ></script>
                <script
                    src="https://accounts.google.com/gsi/client"
                    async
                    defer
                ></script>
                <script
                    async
                    defer
                    src="https://connect.facebook.net/en_US/sdk.js"
                />
            </head> */}
            {/* <Script
                src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
                async
                defer
            ></Script>
            <Script
                src="https://developers.kakao.com/sdk/js/kakao.js"
                async
                defer
            ></Script>
            <Script
                src="https://accounts.google.com/gsi/client"
                async
                defer
            ></Script>
            <Script
                async
                defer
                src="https://connect.facebook.net/en_US/sdk.js"
            /> */}

            <html lang="en">
                <body suppressHydrationWarning={true}>{children}</body>
            </html>
        </>
    );
}
