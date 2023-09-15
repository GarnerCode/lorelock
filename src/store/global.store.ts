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
        async login(credentials: any): Promise<void> {
            try {
                const response = await fetch(apiLogin, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials)
                });
                const result = await response.json();
                console.log("Success: ", result);
            } catch (error) {
                console.error(error);
            }
        }
    }
})