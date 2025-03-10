export const dynamic = "force-dynamic";
import { getServerCookie } from "@/helper/server-cookie";
import { AdminType } from "../types";
import axiosInstance from "@/helper/api";
import AddAdmin from "./addAdmin";
import Admin from "./Admin";

// function to get all data kereta
const getAdmin = async (): Promise<AdminType[]> => {
  try {
    // get token from cookie
    const TOKEN = await getServerCookie(`token`);
    const url = `/employee`;

    // hit endpoint
    const response: any = await axiosInstance.get(url, {
      headers: { authorization: `Bearer ${TOKEN}` },
    });
    // postman memakai get

    if (response.data.success == true) {
      return response.data.data;
    }
    // = 1 hanya isi data
    // == kalau 2 yang di compare hanya value
    // === jika 3 maka tipe data juga
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const AdminPage = async () => {
  // call funcition to load "data kereta" from backend

  const dataAdmin = await getAdmin()
  // menggunkan "await" karena getKereta menggunakan promise
  return (
    <div className="w-full p-5 bg-white">
    <h1 className="text-xl font-bold">Data Karyawan</h1>
    <span className="text-sm text-slate-400">Halaman ini memuat data karyawan api yang tersedia</span>

    {/* add kereta */}
    <div className="my-3">
      <AddAdmin />
    {/* mapping data kereta */}
    {dataAdmin.map((admin, index) => (
        <Admin item={admin} key={`admin-${index}`}/>
      ))
    }
    </div>
    </div>
  )
};

export default AdminPage;