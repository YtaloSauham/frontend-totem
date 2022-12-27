import { useState } from "react";

interface ButtonRadioProps {
  value: string;
  navegation: string;
  name: string;
  onChange?: () => any;
}

export default function ButtonRadio(props: ButtonRadioProps) {
  const [sentido, setSentido] = useState(props.value);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSentido(event.target.value);
  }

  return (
    <>
      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div className="flex items-center pl-3">
          <input
            type="radio"
            value={props.value}
            name={props.name}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
          />
          <span className="py-3 ml-2 w-full text-sm font-medium text-white">
            {props.navegation}
          </span>
        </div>
      </li>
    </>
  );
}
