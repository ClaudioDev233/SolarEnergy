import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { FaBaseballBall } from "react-icons/fa";

export default function UnitPowerGeneration() {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState();
  const [month, setMonth] = useState("");
  const [energy, setEnergy] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    async function getData() {
      await axios.get("http://localhost:3001/unidades").then((resp) => {
        const dataFiltered = resp.data.filter(
          (unidade) => unidade.ativo === true
        );
        setData(dataFiltered);
      });
    }
    getData();
  }, []);

  async function findMes() {
    const resp = await axios
      .get(`http://localhost:3001/geracoes?unidade_id=${id}`)
      .then((resp) => resp.data.map((mes) => mes.mes));

    const find = resp.filter((item) => item === month);

    if (find.length < 1) {
      axios.post("http://localhost:3001/geracoes/", {
        unidade_id: id,
        energia_gerada: energy,
        mes: month,
      });
    } else {
      console.log("esse mes ja foi cadastrado");
    }
  }

  async function handlePostData() {}

  // validação

  function handleSubmit(e) {
    e.preventDefault();
    findMes();
    /* handlePostData(); */
  }

  return (
    <>
      <p>LANÇAMENTO DE GERAÇÃO MENSAL</p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Unidade Geradora
          <select
            defaultValue=""
            onChange={(e) => {
              setId(e.target.value);
            }}
          >
            <option value="" disabled>
              Selecione
            </option>
            {data.map((unidade) => {
              return <option value={unidade.id}>{unidade.apelido}</option>;
            })}
          </select>
        </label>
        <label>
          Mes/Ano
          <input
            type="month"
            placeholder="mes"
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Total Kw Gerado
          <input
            type="number"
            onChange={(e) => setEnergy(e.target.value)}
          ></input>
        </label>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </>
  );
}
