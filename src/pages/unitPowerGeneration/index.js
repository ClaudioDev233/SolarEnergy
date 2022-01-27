import NavMenu from "../../components/menu";
import axios from "axios";
import { useState, useEffect } from "react";
export default function PowerGeneration() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios.get("http://localhost:3333/unidades").then((resp) => {
        const dataFiltered = resp.data.filter(
          (unidade) => unidade.ativo === true
        );
        setData(dataFiltered);
      });
    }
    getData();
  }, []);

  async function handleActive() {
    const isActive = data.filter((unidade) => unidade.ativo === true);
    setData(...data, isActive);
    console.log("aqui");
  }
  return (
    <>
      {console.log(data)}
      <p>LANÇAMENTO DE GERAÇÃO MENSAL</p>
      <form>
        <label>
          Unidade Geradora
          <select defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            {/* primeiro faz um filter para ver se a unidade esta ativo */}{" "}
            {data.map((unidade) => {
              return <option value={unidade.apelido}>{unidade.apelido}</option>;
            })}
          </select>
        </label>
        <label>
          Mes/Ano
          <input type="date"></input>
        </label>
        <label>
          Total Kw Gerado
          <input type="text"></input>
        </label>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </>
  );
}
