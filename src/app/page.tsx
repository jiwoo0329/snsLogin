import NaverSignIn from '@/component/sns/signin/NaverSignIn';
import KakaoSignIn from '@/component/sns/signin/KakaoSignIn';
import GoogleSignIn from '@/component/sns/signin/GoogleSignIn';

export default function Home() {



  return (
    <>
      <h1>홈</h1>


      {/* <NaverSignIn /> <br /> <br /> */}
      {/* <KakaoSignIn /> <br /> <br /> */}
      {/* <button type="button">페이스북</button> <br /> <br />*/}
      <GoogleSignIn />
    </>
  );
}
