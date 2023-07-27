import { googleLogout } from '@react-oauth/google';

export default function GoogleSignOut() {
    return (
        <>
            <button
                type="button"
                onClick={() => {
                    googleLogout();
                }}
            >
                구글 로그아웃
            </button>
        </>
    );
}
