import Head from "next/head";
import NavBar from "./NavBar";

interface LayoutProps {
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>TOTEM ONIBUS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar />
      <div
        className="flex flex-col  items-center
        w-full
        p-7"
      >
        {props.children}
      </div>
    </>
  );
}
