import React from "react";
import Link from "next/link";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FaChartLine, FaWallet } from "react-icons/fa";
import { useRouter } from "next/router";
import { remove } from "local-storage"

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import Cookies from "js-cookie";

export default function MemberSidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const [genealogyDropdown, setgenealogyDropdown] = React.useState(false);
  const [bonusDropdown, setbonusDropdown] = React.useState(false);
  const [repportDropdown, setrepportDropdown] = React.useState(false);
  const [settingDropdown, setSettingDropdown] = React.useState(false);

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/" className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
            BCASTAR-X
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/" className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                    BCASTAR-X
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Main Menu
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/member/dashboard"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }>
                  <i className={
                      "fas fa-tv mr-2 text-sm " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                    Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link href="/member/investasi/invest"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/member/investasi/invest") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }>
                    <div className="flex items-center">
                      <FaChartLine
                        color={ router.pathname.indexOf("/member/investasi/invest") !== -1 ?  "#4AA3E3" : "black"}
                        className={router.pathname.indexOf("/member/investasi/invest") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300"} />
                      <div className="px-1" />
                      Investasi
                    </div>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/member/wallet/wallet"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/member/wallet/wallet") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }>
                    <div className="flex items-center">
                      <FaWallet
                        color={ router.pathname.indexOf("/member/wallet/wallet") !== -1 ?  "#4AA3E3" : "black"}
                        className={router.pathname.indexOf("/member/wallet/wallet") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300"} />
                      <div className="px-1" />
                      Wallet
                    </div>
                </Link>
              </li>
              
              <li className="items-center">
                <div className="w-full flex flex-row items-center">
                  <a
                    href="#pablo"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setgenealogyDropdown(!genealogyDropdown);
                    }}
                    className={
                      "text-xs w-full uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/member/genealogy") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-users mr-2 text-sm" +
                        (router.pathname.indexOf("/member/genealogy") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Jaringan
                  </a>
                  <i className={"fas "+ (genealogyDropdown ? "fa-chevron-up" : "fa-chevron-down") + " mr-2 text-sm opacity-75 text-blueGray-300"}></i>
                </div>
                <div className="w-full bg-red-200">
                  <ul id="dropdown-example" className={
                      (genealogyDropdown ? "block " : "hidden ") +
                      "bg-white text-base z-50 float-left py-2 list-none text-left rounded min-w-48"
                  }>
					        	<li>
                      <Link href="/member/genealogy/diagram"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/member/genealogy/trees") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Tree
					        	  </Link>
					        	</li>
					        	<li>
                      <Link href="/member/genealogy/totalteam"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/member/genealogy/totalteam") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Member
					        	  </Link>
					        	</li>
					        	<li>
                      <Link href="/member/genealogy/blockuser"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/member/genealogy/blockuser") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Member Non Aktif
					        	  </Link>
					        	</li>
					        </ul>
                </div>  
              </li>

              <li className="items-center">
                <div className="w-full flex flex-row items-center">
                <a
                  href="#pablo"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setbonusDropdown(!bonusDropdown);
                  }}
                  className={
                    "text-xs w-full uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/member/bonus") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-money-bill-wave mr-2 text-sm" +
                      (router.pathname.indexOf("/member/bonus") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Bonus
                </a>
                <i className={"fas "+ (bonusDropdown ? "fa-chevron-up" : "fa-chevron-down") + " mr-2 text-sm opacity-75 text-blueGray-300"}></i>
                </div>
                <div className="w-full bg-red-200">
                  <ul id="dropdown-example" className={
                    (bonusDropdown ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded min-w-48"
                  }>
					      	  <li>
                      <Link href="/member/bonus/level"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/member/bonus/level") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Bonus Level
					        	  </Link>
					      	  </li>
					      	  <li>
                      <Link href="/member/bonus/sponsor"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/member/bonus/sponsor") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Bonus Sponsor
					        	  </Link>
                    </li>
					      	  <li>
                      <Link href="/member/bonus/pairing"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/member/bonus/pairing") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Bonus Pairing
					        	  </Link>
					      	  </li>
					        </ul>
                </div>  
              </li>

              {/* <li className="items-center">
                <div className="w-full flex flex-row items-center">
                <a
                  href="#pablo"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setrepportDropdown(!repportDropdown);
                  }}
                  className={
                    "text-xs w-full uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/repport") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fa fa-chart-pie mr-2 text-sm" +
                      (router.pathname.indexOf("/admin/repport") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Repport
                </a>
                <i className={"fas "+ (repportDropdown ? "fa-chevron-up" : "fa-chevron-down") + " mr-2 text-sm opacity-75 text-blueGray-300"}></i>
                </div>
                <div className="w-full bg-red-200">
                  <ul id="dropdown-example" className={
                    (repportDropdown ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded min-w-48"
                  }>
					      	  <li>
                      <Link href="/admin/repport"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/admin/repport") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                       Income
					        	  </Link>
					      	  </li>
					      	  <li>
                      <Link href="/admin/repport"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/admin/repport") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                       E-pin
					        	  </Link>
					      	  </li>
					      	  <li>
                      <Link href="/admin/repport"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/admin/repport") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Joining
					        	  </Link>
					      	  </li>
					        </ul>
                </div>  
              </li> */}

              {/* <li className="items-center">
                <Link href="/admin/settings"
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }>
                    <div className="flex items-center">
                      <FaHeadset
                        color="black"
                        className={router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300"} />
                      <div className="px-1" />
                      Support
                    </div>
                </Link>
              </li> */}
            </ul>

              <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="items-center">
                <div className="w-full flex flex-row items-center">
                <a
                  href="#pablo"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSettingDropdown(!settingDropdown);
                  }}
                  className={
                    "text-xs w-full uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm" +
                      (router.pathname.indexOf("/users/profiles") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Setting
                </a>
                <i className={"fas "+ (settingDropdown ? "fa-chevron-up" : "fa-chevron-down") + " mr-2 text-sm opacity-75 text-blueGray-300"}></i>
                </div>
                <div className="w-full bg-red-200">
                  <ul id="dropdown-example" className={
                    (settingDropdown ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded min-w-48"
                  }>
					      	  <li>
                      <Link href="/member/profile/profiles"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/users/profiles") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Profile
					        	  </Link>
					      	  </li>
					      	  {/* <li>
                      <Link href="/member/profile/rekeningbank"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Rekening Bank
					        	  </Link>
					      	  </li>
                    <li>
                      <Link href="/member/profile/keamanan"
                        className={"flex items-center w-full p-2 text-base font-normal "+ (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")+" transition duration-75 rounded-lg group hover:bg-gray-100 text-gray-300 dark:hover:bg-gray-700 pl-11"}>
                        Keamanan
					        	  </Link>
					      	  </li> */}
					        </ul>
                </div>  
              </li>

              <li className="items-center">
                <button 
                  onClick={e => {
                    e.preventDefault();
                    Cookies.remove('logedin')
                    remove('logedin')
                    router.replace('/')
                  }}
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (router.pathname.indexOf("/admin/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }>
                    <div className="flex align-center">
                      <AiOutlinePoweroff size={17} color="black" className={
                          router.pathname.indexOf("/admin/tables") !== -1
                              ? "opacity-75"
                              : "text-blueGray-300"}/>
                      <div className="px-1" />
                      Logout
                    </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
