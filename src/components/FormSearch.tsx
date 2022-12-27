import React, { useState } from "react";
import Button from "./Button";
import ButtonRadio from "./ButtonRadio";

interface FormSearchProps {
  value: string;
  onChange?: () => any;
}

export default function FormSearch(props: FormSearchProps) {
  const [search, setSearch] = useState(props.value);
  const [sentido, setSentido] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    console.log(search);
  }

  console.log(sentido);

  return (
    <div className="flex flex-col md:gap-4 sm:gap-1 mt-[10.75rem]">
      <div className="flex gap-4">
        <input
          className="md:w-[31.813rem] sm:w-[20.813rem] h-[2.75rem] bg-blue-300 text-white rounded-md"
          type="search"
          placeholder="Buscar Linha de onibus"
          value={search}
          onChange={handleChange}
        />
        <Button
          onClick={props.onChange}
          className="hover:bg-green-600 font-bold"
        >
          Buscar
        </Button>
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
                name="typeNavigation"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <span className="py-3 ml-2 w-full text-sm font-medium text-white">
                Bairro
              </span>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center pl-3">
              <input
                type="radio"
                value="HOSPITAL"
                name="typeNavigation"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              />
              <span className="py-3 ml-2 w-full text-sm font-medium text-white">
                Hospital{" "}
              </span>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
            <div className="flex items-center pl-3">
              <input
                type="radio"
                value="linha"
                name="typeNavigation"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <span className="py-3 ml-2 w-full text-sm font-medium text-white">
                Linha
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
