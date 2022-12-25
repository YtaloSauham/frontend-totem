import InputSearch from "../components/InputSearch";
import Layout from "../components/Layout";
import ViewBus from "../components/ViewBus";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <InputSearch />
      <ViewBus />
    </Layout>
  );
}
