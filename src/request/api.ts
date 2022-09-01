import service from ".";

interface LoginData {
    username: string
    password: string
}
export const login = (data: LoginData) => service({url: "/login", method: "post", data})
