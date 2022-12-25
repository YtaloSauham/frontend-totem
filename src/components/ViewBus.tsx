export default function ViewBus() {
  let onibus = [
    { linha: "A252", bairro: "COHAMA", sentido: "CENTRO", cor: "VERMELHO" },
    { linha: "A252", bairro: "COHAMA", sentido: "CENTRO", cor: "VERMELHO" },
  ];

  function renderRows() {
    return onibus?.map((onibus, i) => {
      return (
        <div
          className="h-[177px] w-[65.938rem] bg-white flex list-none justify-between items-center font-bold text-xl"
          key={i}
        >
          <li>{onibus.linha}</li>
          <li>{onibus.bairro}</li>
          <li>{onibus.sentido}</li>
          <li>{onibus.cor}</li>
        </div>
      );
    });
  }

  return (
    <div className=" w-full h-[31.5rem] bg-blue-300 bottom-0 mt-[10.563rem]">
      {renderRows()}
    </div>
  );
}
