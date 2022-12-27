import { url } from "inspector";
import { useEffect, useState } from "react";
import FormSearch from "../components/FormSearch";
import Layout from "../components/Layout";
import ViewBus from "../components/ViewBus";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [searchBus, setSearchbus] = useState("");
  const [bus, setBus] = useState({});
  /*
  useEffect(()=>{
    if(searchBus){
      setBus({})
    fetch(`${url}`)    
    .then((res)=>res.json())
    .then((res)=>{
     setBus(res)
    })
    .catch((err)=>{console.log(err)})
     }
     else{
        fetch(baseUrl)
        .then((res)=>res.json())
        .then((res)=>{
        setBus(res)
     })
     .catch((err)=>{console.log(err)})
    }
    
   },[seachAnime])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchbus(e.currentTarget.value);
  };

  */
  return (
    <Layout>
      <FormSearch value={searchBus} />
      <ViewBus />
    </Layout>
  );
}
