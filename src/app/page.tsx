'use client';

import NaverSignIn from '@/components/sns/naver/NaverSignIn';
import KakaoSignIn from '@/components/sns/kakao/KakaoSignIn';
import GoogleSignIn from '@/components/sns/google/GoogleSignIn';
import FacebookSignIn from '@/components/sns/facebook/FacebookSignIn';
import useUserStore from '@/store/userStore';

export default function Home() {

    
    return (
        <div className="text-center p-10">
            <h1 className="mb-10">로그인 페이지</h1>

            <ul className="flex justify-between">
                <li className="border rounded-lg cursor-pointer p-3">
                    {/* 네이버 로그인 - 완료 */}
                    <NaverSignIn />
                </li>
                <li className="border rounded-lg cursor-pointer p-3">
                    {/* 카카오 로그인 */}
                    <KakaoSignIn />
                </li>
                <li className="border rounded-lg cursor-pointer p-3">
                    {/* 페이스북 로그인 */}
                    <FacebookSignIn />
                </li>
                <li className="border rounded-lg cursor-pointer p-3">
                    {/* 구글 로그인 */}
                    <GoogleSignIn />
                </li>
            </ul>

            {/* <NaverSignIn /> <br /> <br />
            <KakaoSignIn /> <br /> <br /> */}
            {/* <FacebookSignIn /> <br /> <br /> */}
            {/* <GoogleSignIn /> */}
        </div>
    );
}
