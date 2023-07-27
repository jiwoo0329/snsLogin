'use client';

import { useEffect } from 'react';

export default function FacebookSignin() {
    useEffect(() => {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: process.env.NEXT_PUBLIC_JW_FACEBOOK_APP_ID,
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v17.0',
            });

            loadSdkAsynchronously();
        };
    }, []);

    function loadSdkAsynchronously() {
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = `https://connect.facebook.net/en_US/sdk.js`;
            fjs.parentNode?.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    //   function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    //       console.log('statusChangeCallback');
    //       console.log(response);                   // The current login status of the person.
    //       if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    //         testAPI();
    //       } else {                                 // Not logged into your webpage or we are unable to tell.
    //         document.getElementById('status').innerHTML = 'Please log ' +
    //           'into this webpage.';
    //       }
    //     }

    //     function checkLoginState() {               // Called when a person is finished with the Login Button.
    //       FB.getLoginStatus(function(response) {   // See the onlogin handler
    //         statusChangeCallback(response);
    //       });
    //     }

    //     window.fbAsyncInit = function() {
    //       FB.init({
    //         appId      : process.env.NEXT_PUBLIC_JW_FACEBOOK_APP_ID,
    //         cookie     : true,                     // Enable cookies to allow the server to access the session.
    //         xfbml      : true,                     // Parse social plugins on this webpage.
    //         version    : 'v17.0'           // Use this Graph API version for this call.
    //       });

    //       FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
    //         statusChangeCallback(response);        // Returns the login status.
    //       });
    //     };

    // function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    //   console.log('Welcome!  Fetching your information.... ');
    //   FB.api('/me', function(response) {
    //     console.log('Successful login for: ' + response.name);
    //     document.getElementById('status').innerHTML =
    //       'Thanks for logging in, ' + response.name + '!';
    //   });
    // }

    // 로그인 되어 있는지 확인 여부 체크
    function checkLogin() {
        window.FB.getLoginStatus((checkResponse) => {
            checkState(checkResponse);
        });
    }

    function checkState(checkResponse) {
        // console.log("checkResponse", checkResponse)
        if (checkResponse.status === 'connected') {
            // 로그인 돼있을 때 작업
            console.log('토큰', checkResponse.authResponse.accessToken);
            getUser(); // 이름과 이메일 받아오기 위해 필드값으로 이메일과 이름 넣기, 인자 넘기지 않을 경우 기본적으로 이름과 아이디가 넘어옴
        } else {
            // 로그인이 되어있지 않다면 ('not_authorized' | 'unknown')
            window.FB.login((response) => {
                // 로그인 하거나 회원가입 할 수 있는 팝업을 띄웁니다.
            });
        }
    }

    function getUser() {
        FB.api('/me', function (response) {
            console.log(response);
        });

        // FB.api('/me', {fields: ['email', 'name']}, (response) => {
        //   console.log("response", response)
        // });
    }

    return (
        <>
            <div id="status"></div>

            <button
                onClick={() => {
                    checkLogin();
                }}
            >
                페이스북 로그인
            </button>

            <button
                onClick={() => {
                    FB.logout((res) => {
                        console.log(res);
                    });
                }}
            >
                로그아웃
            </button>
        </>
    );
}
