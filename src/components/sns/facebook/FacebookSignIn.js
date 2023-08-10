'use client';

import { useEffect } from 'react';

// MEMO: 임시 코드, 페이스북 로그인 구현 필요
export default function FacebookSignIn() {

    // 기본 설정
    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
                cookie: true,
                xfbml: true,
                version: 'v6.0',
            });
            FB.AppEvents.logPageView();
        };


        //기존 로그인 상태를 가져오기 위해 Facebook에 대한 호출
        // FB.getLoginStatus(function(res) {
        //     statusChangeCallback(res);
        // })
    }, []);


    function checkLogin() {
        (window).FB.getLoginStatus((checkResponse) => {
        checkState(checkResponse)
        });
    }

    function checkState(checkResponse) {
        if (checkResponse.status === 'connected') {
            // 로그인 돼있을 때 작업
        } else {
            // 로그인이 되어있지 않다면 ('not_authorized' | 'unknown')
            (window).FB.login((response) => {
                // 로그인 하거나 회원가입 할 수 있는 팝업을 띄움.
            })
        }

    }

    function checkState(checkResponse) {
        if (checkResponse.status === 'connected') {
            getUser();
        }

    }

    function getUser() {
        FB.api('/me', {fields: ['email', 'name']}, (response) => {
            console.log(response)
        });
    }

    // function fnFbCustomLogin() {
    //     FB.login(
    //         function (response) {
    //             if (response.status === 'connected') {
    //                 FB.api(
    //                     '/me',
    //                     'get',
    //                     { fields: 'name, email' },
    //                     function (r) {
    //                         console.log(r);
    //                     }
    //                 );
    //             } else if (response.status === 'not_authorized') {
    //                 // 사람은 Facebook에 로그인했지만 앱에는 로그인하지 않았습니다.
    //                 alert('앱에 로그인해야 이용가능한 기능입니다.');
    //             } else {
    //                 // 그 사람은 Facebook에 로그인하지 않았으므로이 앱에 로그인했는지 여부는 확실하지 않습니다.
    //                 alert('페이스북에 로그인해야 이용가능한 기능입니다.');
    //             }
    //         },
    //         { scope: 'public_profile,email' }
    //     );
    // }


    return (
        <>
            <a
                className="facebook"
                onClick={() => {
                    checkLogin();
                }}
            >
                페이스북 로그인
            </a>
        </>
    );
}
