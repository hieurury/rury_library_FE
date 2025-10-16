import axios        from    "axios";
const API_BASE      =       import.meta.env.VITE_API_BASE;

//ĐĂNG KÝ TÀI KHOẢN NGƯỜI DÙNG MỚI
const registerAccount = async (accountData) => {
    const response = await axios.post(`${API_BASE}/user/register`, accountData);
    return response.data;
}

export { registerAccount };