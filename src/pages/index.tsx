import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonRadio from "../components/ButtonRadio";
import FormSearch from "../components/FormSearch";
import Layout from "../components/Layout";
import ViewBus from "../components/ViewBus";
import FetchHook from "../hooks/FetchHook";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [bus, setBus] = useState([]);
  const [search, setSearch] = useState("");
  const [sentido, setSentido] = useState("");
  const terminalId = "44";

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  async function getBusBySearch() {
    const aux =
      sentido === "linha" ? `/${search}` : `/sentido/${sentido}/${search}`;

    console.log(aux, sentido, search);

    const body = JSON.stringify({
      sentido: "BAIRRO",
      local: "Cohab",
    });
    const resp = await axios({
      url: `http://localhost:4000/terminal/${terminalId}${aux}`,
      method: "GET",
    });

    setBus([]);
    setBus(resp.data);
  }

  function renderRows() {
    return bus?.map((bus, i) => {
      return (
        <div
          className="h-[177px] w-[65.938rem] bg-white flex list-none justify-between items-center font-bold text-xl"
          key={i}
        >
          <li>{bus.nome}</li>
          <li>{bus.descricao}</li>
          <li>{bus.plataforma}</li>
          <li>{bus.codigo}</li>
          <li>{bus.caracteristica}</li>
          <li>{bus.ordem}</li>
        </div>
      );
    });
  }

  return (
    <Layout>
      <div className="flex flex-col md:gap-4 sm:gap-1 mt-[10.75rem]">
        <div className="flex gap-4">
          <input
            className="md:w-[31.813rem] sm:w-[20.813rem] h-[2.75rem] bg-blue-300 text-white rounded-md"
            type="search"
            placeholder="Buscar Linha de onibus"
            value={search}
            onChange={handleChange}
          />
          <button
            onClick={getBusBySearch}
            className="hover:bg-green-600 font-bold px-4 py-2
          rounded-md text-black
          bg-orange-300 w-[8.875rem]
          h-[2.75rem]"
          >
            Buscar
          </button>
        </div>
      </div>
      <div className="sm:">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Navegação
        </h3>
        <ul className="md:flex sm:flex sm:flex-col items-center w-full text-sm font-medium text-gray-900 bg-blue-300 rounded-lg border border-gray-200 sm:flex ">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="radio"
                value="BAIRRO"
                name="navigation"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                onClick={(e) => setSentido(e.target.value)}
              />
              <span className="py-3 ml-2 w-full text-sm font-medium text-white">
                Bairro
              </span>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="radio"
                value="HOSPITAL"
                name="navigation"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                onClick={(e) => setSentido(e.target.value)}
              />
              <span className="py-3 ml-2 w-full text-sm font-medium text-white">
                Hospital
              </span>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="radio"
                value="linha"
                name="navigation"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                onClick={(e) => setSentido(e.target.value)}
              />
              <span className="py-3 ml-2 w-full text-sm font-medium text-white">
                Linha
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className=" w-full h-[31.5rem] bg-blue-300 bottom-0 mt-[10.563rem]">
        {renderRows()}
      </div>
    </Layout>
  );
}
