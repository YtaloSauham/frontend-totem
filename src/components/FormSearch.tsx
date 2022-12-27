import React, { useState } from "react";
import Button from "./Button";
import ButtonRadio from "./ButtonRadio";

interface FormSearchProps {
  value: string;

  onChange?: () => any;
  onClick?: () => any;
}

export default function FormSearch(props: FormSearchProps) {
  const [search, setSearch] = useState(props.value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

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
        <button
          onClick={props.onClick}
          className="hover:bg-green-600 font-bold px-4 py-2
          rounded-md text-black
          bg-orange-300 w-[8.875rem]
          h-[2.75rem]"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
