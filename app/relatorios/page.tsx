'use client'

import React, { useState } from "react";
import Link from "next/link";
import BarChart from "../components/grafico-barra/grafico-barra";

export default function Relatorio() {

  return (
    <>
      <div className="grid-cols-12">
        <h1>Hello, trainer!</h1>
        <div className="flex justify-between">
          {/* <Link href="/capturar">
            <button className="relative flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              Catch
            </button>
          </Link> */}
        </div>
        <div className="mt-4">
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Pokemons</h1>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <BarChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}