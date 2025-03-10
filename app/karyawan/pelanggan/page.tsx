export const dynamic = "force-dynamic";
import { getServerCookie } from "@/helper/server-cookie";
import { AdminType } from "../types";
import axiosInstance from "@/helper/api";
import AddPelanggan from "./addPelanggan";
import Pelanggan from "./Pelanggan";

// function to get all data kereta
const getPelanggan = async (): Promise<AdminType[]> => {
    try {
      // get token from cookie
      const TOKEN = await getServerCookie(`token`);
      const url = `/customer`;
  
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
  
  const PelangganPage = async () => {
    // call funcition to load "data kereta" from backend
  
    const dataPelanggan = await getPelanggan()
    // menggunkan "await" karena getKereta menggunakan promise
    return (
      <div className="w-full p-5 bg-white">
      <h1 className="text-xl font-bold">Data Pelanggan</h1>
      <span className="text-sm text-slate-400">Halaman ini memuat data karyawan api yang tersedia</span>
  
      {/* add kereta */}
      <div className="my-3">
        <AddPelanggan />
      {/* mapping data kereta */}
      {dataPelanggan.map((pelanggan, index) => (
          <Pelanggan item={pelanggan} key={`pelanggan-${index}`}/>
        ))
      }
      </div>
      </div>
    )
  };
  
  export default PelangganPage;