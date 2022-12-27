import axios from "axios";
import { useEffect, useState } from "react";
import ButtonRadio from "../components/ButtonRadio";
import FormSearch from "../components/FormSearch";
import Layout from "../components/Layout";
import ViewBus from "../components/ViewBus";
import FetchHook from "../hooks/FetchHook";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchBus, setSearchbus] = useState("");
  const [navigation, setNavigation] = useState("");
  const [terminalId, setTerminalId] = useState("44");
  const [sentido, setSentido] = useState("");

  const url = `http://localhost:3010/terminal/`;
  const body = {
    sentido: navigation,
    local: searchBus,
  };

  const propsSearch = {
    url: url,
    method: "GET",
    body: body,
  };

  const urlBase = `http://localhost:3010/terminal/${terminalId}/T070`;

  const [bus, setBus] = useState({});

  useEffect(() => {
    if (searchBus) {
      console.log(searchBus);
      setBus({});
      alternateNavegation();

      axios(`${url}${terminalId}${sentido}`, {
        method: "GET",
        data: body,
      }).then((res) => {
        setBus(res);
      });
    } else {
      axios(urlBase, {
        method: "GET",
        data: body,
      })
        .then((res) => {
          setBus(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchBus]);

  function alternateNavegation() {
    if (navigation === "linha") {
      setSentido(`/${searchBus}`);
    } else {
      setSentido("/sentido");
    }
  }

  return (
    <Layout>
      <FormSearch
        value={searchBus}
        onChange={(e) => {
          setSearchbus(e);
        }}
      />
      <div className="sm:">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Navegação
        </h3>
        <ul className="md:flex sm:flex sm:flex-col items-center w-full text-sm font-medium text-gray-900 bg-blue-300 rounded-lg border border-gray-200 sm:flex ">
          <ButtonRadio
            navegation="Bairro"
            value="BAIRRO"
            name="navigationType"
            onChange={(e) => {
              setNavigation(e);
            }}
          />
          <ButtonRadio
            navegation="Hospital"
            value="HOSPITAL"
            name="navigationType"
            onChange={(e) => {
              setNavigation(e);
            }}
          />
          <ButtonRadio
            navegation="Bairro"
            value="BAIRRO"
            name="navigationTye"
            onChange={(e) => {
              setNavigation(e);
            }}
          />
        </ul>
      </div>
      <ViewBus />
    </Layout>
  );
}
