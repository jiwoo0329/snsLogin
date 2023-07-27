import NaverSignIn from '@/component/sns/signin/NaverSignIn';
import KakaoSignIn from '@/component/sns/signin/KakaoSignIn';
import GoogleSignIn from '@/component/sns/signin/GoogleSignIn';
import FacebookSignIn from '@/component/sns/signin/FacebookSignIn';

export default function Home() {
    return (
        <>
            <h1>메인페이지</h1>

            {/* <NaverSignIn /> <br /> <br />
            <KakaoSignIn /> <br /> <br /> */}
            <FacebookSignIn /> <br /> <br />
            {/* <GoogleSignIn /> */}
        </>
    );
}
