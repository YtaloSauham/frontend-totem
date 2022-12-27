interface ViewBusProps {
  onibus: [];
}

export default function ViewBus(props) {
  function renderRows() {
    return props.onibus?.map((onibus, i) => {
      return (
        <div
          className="h-[177px] w-[65.938rem] bg-white flex list-none justify-between items-center font-bold text-xl"
          key={i}
        >
          <li>{props.onibus.linha}</li>
          <li>{props.onibus.bairro}</li>
          <li>{props.onibus.sentido}</li>
          <li>{props.onibus.cor}</li>
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
