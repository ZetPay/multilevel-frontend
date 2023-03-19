import React from "react";
// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import { useRouter } from "next/router";
import MemberSidebar from "components/Sidebar/MemberSidebar";

export default function Member({ children }) {
  const router = useRouter()
  return (
    <>
      <MemberSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar title={router.pathname.split('/')['2']} />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}
