import axios        from    "axios";
const API_BASE      =       import.meta.env.VITE_API_BASE;

//ĐĂNG KÝ TÀI KHOẢN NGƯỜI DÙNG MỚI
const registerAccount = async (accountData) => {
    const response = await axios.post(`${API_BASE}/user/register`, accountData);
    return response.data;
}

const loginccount = async (accountData) => {
    const response = await axios.post(`${API_BASE}/user/login`, accountData);
    return response.data;
}

const getUserInfo = async (id) => {
    const response = await axios.get(`${API_BASE}/user/get/${id}`);
    return response.data;
}

export { registerAccount, loginccount, getUserInfo };