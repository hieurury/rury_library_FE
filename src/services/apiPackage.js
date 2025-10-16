const API_BASE      =       import.meta.env.VITE_API_BASE;
import axios        from    "axios";


//LẤY DANH SÁCH CÁC GÓI SẴN CÓ
const getAllPackages = async () => {
    const response = await axios.get(`${API_BASE}/admin/package/all`);
    return response.data;
}






export { getAllPackages };