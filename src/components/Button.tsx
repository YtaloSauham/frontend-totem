interface ButtonProps {
  className?: string;
  children: any;
  onClick?: () => any;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`
            px-4 py-2
            rounded-md text-black
            bg-orange-300 w-[8.875rem]
            h-[2.75rem] ${props.className}
        `}
    >
      {" "}
      {props.children}
    </button>
  );
}
