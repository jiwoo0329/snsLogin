import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * 로그인 시 access_token 저장
 * 브라우저 종료 시에도 데이터 남아있기 때문에 clearUserToken() 실행 해주기
 */
const useUserStore = create(
    persist(
        (set) => ({
            userToken: null, // accesss_token 초기값
            snsToken: null, // 소셜 로그인 token
            setUserToken: (userToken) => set({ userToken: userToken }),
            setSnsToken: (snsToken) => set({ snsToken: snsToken }),
            clearUserToken: () => set({ userToken: null }),
            clearSnsToken: () => set({ snsToken: null }),
        }),
        {
            name: 'userAuth'
        }
    )
);

export default useUserStore;
