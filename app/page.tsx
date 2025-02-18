'use client'
import Link from "next/link";
import "./globals.css";


export default function Home() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <a href="./" className="flex ms-2 md:me-24">
                <img src="./pontualPay-logo.png" className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-black text-xl font-semibold sm:text-2xl whitespace-nowrap ">PontualPay</span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                  </button>
                </div>
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="dropdown-user">
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 text-black " role="none">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-black text-gray-700 hover:bg-gray-100" role="menuitem">Relatórios</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-black text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-black text-gray-700 hover:bg-gray-100" role="menuitem">Earnings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-black text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/relatorios" className="flex items-center p-2 text-gray-900 rounded-lg text-black hover:bg-gray-100 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 text-black group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 text-black">Relatórios</span>
              </a>
            </li>
            <li>
              <a href="/CadastroEmpresa" className="flex items-center p-2 text-gray-900 rounded-lg text-black hover:bg-gray-100 group">
                <img src="./empresa.png" alt="" height={20} width={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Cadastro de Empresa</span>
              </a>
            </li>
            <li>
              <a href="/LancamentoValores" className="flex items-center p-2 text-gray-900 rounded-lg text-black hover:bg-gray-100 group">
                <img src="./lancamentoValores.png" alt="" height={20} width={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Lançamento de Valores</span>
              </a>
            </li>
            <li>
              <Link href="/Login">
                <div className="flex items-center p-2 text-gray-900 rounded-lg text-black hover:bg-gray-100 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 text-black group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/CadastroUsuario">
                <div className="flex items-center p-2 text-gray-900 rounded-lg text-black hover:bg-gray-100 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition text-black duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <div className="flex items-center p-2 text-gray-900 rounded-lg text-black hover:bg-gray-100 group">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 text-black group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 8a8 8 0 1 1-7-8c0 .173.02.343.05.51a7.967 7.967 0 0 1-2.738-.484 4 4 0 1 0 7.04 0A7.968 7.968 0 0 1 18 8Z" />
                    <path d="M14.96 3.13A7.99 7.99 0 0 1 16 8a8 8 0 1 1-8-8c0 .17.02.34.05.51A7.974 7.974 0 0 1 14.96 3.13Z" />
                    <path d="M8 18a4.002 4.002 0 0 0 3.874-4.606c-.128-.758-.36-1.482-.682-2.16A3.976 3.976 0 0 0 8 11a4 4 0 1 0 0 8Zm-1-7v2h2v-2H7Zm4 0v2h2v-2h-2ZM5 3h2V1H5v2Zm6 0h2V1h-2v2ZM7 15h2v-2H7v2Zm4 0h2v-2h-2v2ZM9 3h2V1H9v2ZM5 7h2V5H5v2Zm6 0h2V5h-2v2ZM7 7h2V5H7v2Zm4 0h2V5h-2v2ZM5 11h2V9H5v2Zm6 0h2V9h-2v2ZM7 11h2V9H7v2Zm4 0h2V9h-2v2Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">FAQ</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
