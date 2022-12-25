import { useState } from "react";
import Button from "./Button";

export default function InputSearch({ value, onChange }) {
  const [visualDisplay, setVisualDisplay] = useState(value);

  function handleChange(event: Event) {
    setVisualDisplay(event.target.value);
    //debouncedChange(event.target.value);
  }

  return (
    <div className="flex flex-row gap-4">
      <input
        className="w-[31.813rem] h-[2.75rem] bg-blue-300 text-white rounded-md"
        type="search"
        placeholder="Buscar Linha de onibus"
        value={visualDisplay}
        onChange={handleChange}
      />
      <Button>Buscar</Button>
    </div>
  );
}
