"use client";

import Link from "next/link";
import { AdminType } from "../types";
import EditAdmin from "./editAdmin";
import DropAdmin from "./dropAdmin";
import ResetPassword from "./resetPassword";

type props = {
  item: AdminType;
};

const Admin = (myProp: props) => {
  return (
    <div className="w-full my-3 border rounded-lg bg-blue-50 shadow-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Nama Karyawan */}
        <div>
          <small className="text-sm font-semibold text-sky-700">Nama Karyawan</small>
          <span className="block font-medium">
            <Link href={`/employee/register/${myProp.item.id}`} className="text-blue-600 hover:underline">
              {myProp.item.name}
            </Link>
          </span>
        </div>


        <div>
          <small className="text-sm font-semibold text-sky-700">Username Karyawan</small>
          <span className="block">{myProp.item.user_details.username}</span>
        </div>

 
        <div>
          <small className="text-sm font-semibold text-sky-700">NIK Karyawan</small>
          <span className="block">{myProp.item.nik}</span>
        </div>

  
        <div>
          <small className="text-sm font-semibold text-sky-700">Alamat Karyawan</small>
          <span className="block truncate w-64">{myProp.item.address}</span>
        </div>


        <div>
          <small className="text-sm font-semibold text-sky-700">Nomor HP Karyawan</small>
          <span className="block">{myProp.item.phone}</span>
        </div>

 
        <div>
          <small className="text-sm font-semibold text-sky-700">Password Karyawan</small>
          <span className="block">**************</span>
        </div>
      </div>

      <div className="flex gap-3 mt-3">
        <EditAdmin admin={myProp.item} />
        <DropAdmin admin={myProp.item} />
        <ResetPassword admin={myProp.item} />
      </div>
    </div>
  );
};

export default Admin;
