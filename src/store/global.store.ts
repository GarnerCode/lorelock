import { defineStore } from 'pinia';
import { apiGetUsers, apiLogin } from '@/constants/api';

const postHeader = {
    method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
    }
};

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        activeUser: {}
    }),
    getters: {
        getActiveUser: (state) => {
            return state.activeUser;
        }
    },
    actions: {
        async testFetchUsers(): Promise<void> {
            try {
                await fetch(apiGetUsers)
                .then((res) => {return res.json()})
                .then((data) => {
                    console.log(data[0]);
                });
            } catch (error) {
                console.error(error);
            }
        },
        // async login(credentials): Promise<void> {
        //     try {
        //         await fetch(apiLogin, postHeader, {
        //             body: JSON.stringify(credentials)
        //         })
        //         .then((res) => console.log(res));
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
    }
})