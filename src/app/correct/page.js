'use client';

import NaverSignOut from '@/component/sns/signout/NaverSignOut';
import KakaoSignOut from '@/component/sns/signout/KakaoSignOut';
import GoogleSignOut from '@/component/sns/signout/GoogleSignOut';
import { useEffect, useState } from 'react';

import axios from 'axios';

export default function Correct() {
    const [code, setCode] = useState('');

    const api = async () => {
        await axios
            .get(
                'https://oauth2.googleapis.com/token',
                { access_token: code },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            )
            .then((res) => {
                console.log('res', res);
            })
            .catch((err) => {
                console.log('err', err);
            });
    };
    useEffect(() => {
        api();
    }, [code]);

    useEffect(() => {
        const urlParams = new URL(location.href).searchParams;
        const getCode = urlParams.get('code'); // code 값
        // console.log("code", code);
        setCode(getCode);
    }, []);

    return (
        <div>
            로그인 성공입니다.
            <br />
            <NaverSignOut/>
            <KakaoSignOut/>
            <GoogleSignOut />
        </div>
    );
}
