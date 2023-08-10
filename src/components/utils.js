import { useRouter } from 'next/router';

// 쿠키 저장 함수
export function setCookie(cookie_name, value, days) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + days);

    // TODO: 개발 완료 후 httpOnly 설정하기
    let cookie_value =
        escape(value) +
        (days == null ? '' : '; expires=' + exdate.toUTCString()) +
        '; secure;';
    document.cookie = cookie_name + '=' + cookie_value;
}

// 쿠키 가져오기
export function getCookie(cookieName) {
    cookieName = `${cookieName}=`;
    let cookieData = document.cookie;

    let cookieValue = '';
    let start = cookieData.indexOf(cookieName);

    if (start !== -1) {
        start += cookieName.length;
        let end = cookieData.indexOf(';', start);
        if (end === -1) end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }

    return unescape(cookieValue);
}

// 쿠키 삭제 함수
export function delCookie(name) {
    document.cookie =
        encodeURIComponent(name) + '=; expires=Thu, 01 JAN 1999 00:00:10 GMT';
}

// 이전 페이지 url 가져오기
export function useGetPreUrl() {
    let router = useRouter();
    let currentUrl = router.asPath;
    return currentUrl;
}

// UTC 시간을 현지 날짜로 변환
export function utcToLocalDate(utcVal) {
    let localDate = new Date(utcVal).toLocaleString();
    let dateList = localDate.split('. ', 3);
    let year = dateList[0];
    let month = ('0' + dateList[1]).slice(-2);
    let day = ('0' + dateList[2]).slice(-2);

    return `${year}-${month}-${day}`;
}
