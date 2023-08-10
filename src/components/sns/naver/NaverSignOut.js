'use client';

import { useEffect, useState } from "react";
import axios from 'axios';

export default function NaverSignOut() {

    const [useToken, setUserToken] = useState('');

    useEffect(()=>{
        const token = window.location.href.split('=')[1].split('&')[0];
        console.log("네이버에서 얻은 token", token);

        setUserToken(token)
    },[]);


    const NaverLogout = async () => {
        // 실제 url은 https://nid.naver.com/oauth2.0/token이지만 proxy를 적용하기 위해 도메인은 제거
        await axios.get('/oauth2.0/token', {
            params: {
                grant_type: 'delete',
                client_id: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID, // Client ID
                client_secret: process.env.NEXT_PUBLIC_NAVER_SECRET, // Client Secret
                access_token: useToken, // 발급된 Token 정보
                service_provider: 'NAVER'
            }
        }).then((res)=>{
            console.log("로그아웃 성공", res.data);
            // TODO: 로그인 페이지로 이동
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <>
            <button type="button" onClick={()=>NaverLogout()}>네이버 로그아웃</button>
        </>
    )
}