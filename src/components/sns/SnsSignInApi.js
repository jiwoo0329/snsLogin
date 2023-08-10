'use client';

import axios from 'axios';
import useUserStore from '@/store/userStore';
import { setCookie } from '@/components/utils';

export default function SnsSignInApi(snsToken) {
    const { setSnsToken } = useUserStore();

    // axios
    //     .post(`${process.env.NEXT_PUBLIC_DOMOCK_API_URL}/snsSignIn`, {
    //         sns_token: snsToken,
    //     })
    //     .then((res) => {
    //         console.log('소셜로그인 완료 상태', res.data.data);
    //         // access_token: zustand에 저장
    setSnsToken(snsToken);

    //         // refresh_token: 쿠키에 저장
    setCookie('refresh_token', '22222222222222222222222222222222', 7);

    window.location.href = '/auth/signin/connect';
    //     })
    //     .catch((err) => {
    //         console.log('err', err);
    //     });
}
