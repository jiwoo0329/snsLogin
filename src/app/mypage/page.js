'use client';
import axios from 'axios';
import useUserStore from '@/store/userStore';
import NaverInit from '@/components/sns/naver/NaverInit';
import KakaoInit from '@/components/sns/kakao/KakaoInit';
import KakaoSignOut from '@/components/sns/kakao/KakaoSignOut';
import { getCookie } from '@/components/utils';
import { useEffect } from 'react';



export default function Home() {
    const { snsToken } = useUserStore();

    useEffect(() => {
        console.log('snsToken', snsToken);
    }, [snsToken]);

    const handleSignOut = async () => {
        // // 네이버 로그아웃
        // await axios
        //     .get('/oauth2.0/token', {
        //         params: {
        //             grant_type: 'delete',
        //             client_id: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID, // Client ID
        //             client_secret: process.env.NEXT_PUBLIC_NAVER_SECRET, // Client Secret
        //             access_token: snsToken, // 발급된 Token 정보
        //             service_provider: 'NAVER',
        //         },
        //     })
        //     .then((res) => {
        //         console.log('로그아웃 성공', res.data);
        //         // TODO: 로그인 페이지로 이동
        //         window.location.href = '/';
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });


        // // 카카오 로그아웃
        // KakaoSignOut();


        // 구글 로그아웃
        
    };

    return (
        <div className="text-center">
            <h2 className="mb-10">마이페이지</h2>
            {/* {snsToken ? ( */}
                <button
                    className="border rounded-lg cursor-pointer p-3"
                    onClick={() => {
                        handleSignOut();
                    }}
                >
                    로그아웃
                </button>
            {/* ) : ( */}
                <button className="border rounded-lg cursor-pointer p-3">
                    로그인
                </button>
            {/* )} */}
        </div>
    );
}
