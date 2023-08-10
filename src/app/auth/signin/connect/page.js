import Link from 'next/link';

export default function snsSignInConnect() {
    return (
        <div className='text-center'>
            <h2 className="mb-10">로그인 성공!!!!!</h2>
            <div>
                <Link
                    href="/mypage"
                    className="hover:underline hover:decoration-solid"
                >
                    마이페이지로 이동하기
                </Link>
            </div>
        </div>
    );
}
