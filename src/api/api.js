import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '9db4e204-2315-467d-bda4-460db7f8a440'
    }
});

export class UserAxios {
    static getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

    static unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }

    static follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export class ProfileAxios {
    static getProfile(id) {
        return instance.get(`profile/${id}`);
    }

    static getStatus(id) {
        return instance.get(`profile/status/${id}`);
    }

    static updateStatus(status) {
        return instance.put(`profile/status`, {status});
    }

    static setPhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData,{
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    }
    static saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export class AuthorAxios {
    static autMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }

    static login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
            .then(response => response.data)
    }

    static logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}




