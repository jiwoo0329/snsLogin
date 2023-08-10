// import { GetServerSideProps, NextPage } from "next";
// import { useRouter } from "next/router";
// import { useEffect, useReducer, useState } from "react";



// const Community = (props) => {

//         const naver = window.naver;
//         //유저 (사용자) 정보를 불러옴.
// 		const naverLogin = new naver.LoginWithNaverId({
// 			clientId: process.env.NEXT_PUBLIC_JW_NAVER_CLIENT_ID,
// 			callbackUrl: process.env.NEXT_PUBLIC_JW_NAVER_CALLBACK_URL,
// 			isPopup: false,
// 			loginButton: { color: 'green', type: 3, height: 58 },
// 			callbackHandle: true,
// 		})
// 		naverLogin.init();

//            // 선언된 naverLogin 을 이용하여 유저 (사용자) 정보를 불러오는데
//            // 함수 내부에서 naverLogin을 선언하였기에 지역변수처리가 되어
//            // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행주어야한다.

//            // 아래와 같이 로그인한 유저 ( 사용자 ) 정보를 직접 접근하여 추출가능하다.
//            // 이때, 데이터는 첫 연동시 정보 동의한 데이터만 추출 가능하다.

//            // 백엔드 개발자가 정보를 전달해준다면 아래 요기! 라고 작성된 부분까지는
//            // 코드 생략이 가능하다.


//         //로그인한 유저 ( 사용자 ) 정보를 직접 접근하여 추출가능
//         naverLogin.getLoginStatus(async function (status) {
//                 if (status) {
//                 // 아래처럼 선택하여 추출이 가능하고, 
//                     // const userid = naverLogin.user.getEmail()
//                     // const username = naverLogin.user.getName()
//                 // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다. 
//                 // setUserInfo(naverLogin.user)

//                     console.log("네이버 로그인 유저 정보", naverLogin.user )
//                 }
//             })
//             // 요기!
	



// }
// export default Community;

// export const getServerSideProps = async (context) => {
//     return {
//         props: {

//         }
//     }
// }