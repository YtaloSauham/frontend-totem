import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonRadio from "../components/ButtonRadio";
import FormSearch from "../components/FormSearch";
import Layout from "../components/Layout";


export default function Home() {
  const [bus, setBus] = useState([]);
  const [search, setSearch] = useState("");
  const [sentido, setSentido] = useState("");
  const [msgError, setMsgError] = useState("");
  const terminalId = "44";

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  async function getBusBySearch() {
    validationBus()
    if (search === "") {
      event?.preventDefault();
      setMsgError("Digite um valor valido")
      
      
    }else{
      setMsgError("")

    
    const aux = sentido === "linha" ? `/${search}` : `/sentido/${sentido}/${search}`;

    console.log(aux, sentido, search);

    const resp = await axios({
      url: `http://localhost:4000/terminal/${terminalId}${aux}`,
      method: "GET",
    });

    setBus([]);
    setBus(resp.data);
    console.log(bus)
    validationBus()
  }
  }

  function validationBus(){
    (bus.length === 0 ? setMsgError("Nenhum onibus encontrado. Por favor digite outro valor") :  setMsgError(""))
  }

  function renderRows() {
    return bus?.map((bus, i) => {
      return (
        <>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {bus.nome}
            </th>
            <td className="py-4 px-6">{bus.codigo}</td>
            <td className="py-4 px-6">{bus.plataforma}</td>
            <td className="py-4 px-6">{bus.descricao}</td>
            <td className="py-4 px-6">{bus.caracteristica}</td>
            <td className="py-4 px-6">{bus.ordem}</td>
            <td className="py-4 px-6">{bus.descricaoo}</td>
          </tr>
        </>
      );
    });
  }

  return (
    <Layout>
      <div className="flex flex-col md:gap-4 sm:gap-1 mt-[10.75rem]">
        <div className="flex gap-4">
          <input
            className="md:w-[31.813rem] sm:w-[20.813rem] h-[2.75rem] bg-blue-300 text-white rounded-md px-4"
            type="search"
            placeholder="Buscar Linha de onibus"
            value={search}
            onChange={handleChange}
            checked
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
        <span className={`${msgError ==="" ? "hidden" : ""}p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200`} role="alert">
          {msgError}
      </span>
      </div>
      <div className="">
        <h3 className="mb-4 mt-5 font-semibold text-gray-900 dark:text-white">
          Navegação
        </h3>
        <ul className=" sm:flex sm:flex-col items-center w-full text-sm font-medium text-gray-900 bg-blue-300 rounded-lg border border-gray-200 ">
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

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="radio"
                value="ESCOLA"
                name="navigation"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                onClick={(e) => setSentido(e.target.value)}
              />
              <span className="py-3 ml-2 w-full text-sm font-medium text-white">
                Escola
              </span>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="radio"
                value="SHOPPING CENTER"
                name="navigation"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                onClick={(e) => setSentido(e.target.value)}
              />
              <span className="py-3 ml-2 w-full text-sm font-medium text-white">
                Shopping Center
              </span>
            </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                type="radio"
                value="PRAIA"
                name="navigation"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                onClick={(e) => setSentido(e.target.value)}
              />
              <span className="py-3 ml-2 w-full text-sm font-medium text-white">
                Praia
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-[10.563rem] w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Nome
              </th>
              <th scope="col" className="py-3 px-6">
                Codigo
              </th>
              <th scope="col" className="py-3 px-6">
                Plataforma
              </th>
              <th scope="col" className="py-3 px-6">
                Descricão
              </th>
              <th scope="col" className="py-3 px-6">
                Cor
              </th>
              <th scope="col" className="py-3 px-6">
                Ordem
              </th>
              <th scope="col" className="py-3 px-6">
                Sentido
              </th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>

      </div>
    </Layout>
  );
}
