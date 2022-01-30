import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect } from "react";
import InputDate from "../inputDate";
import Inputs from "../inputs";
import { Container, Form, Label, Select, SubmitButton, Error } from "./styles";

export default function UnitPowerGeneration() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
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

  // checa se naquele mes já foi gerado um log de energia
  async function handleCheckUnityGeneration() {
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
      setError("");
      toast.success(`Lançamento realizado com sucesso`, {
        autoClose: 2000,
      });
    } else {
      toast.error(`Lançamento já existente`, {
        autoClose: 2000,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    energy === "" || id === undefined || month === ""
      ? setError("Campo Necessario")
      : handleCheckUnityGeneration();
  }

  return (
    <>
      <Container>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Label>
            Unidade Geradora
            <Select
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
            </Select>
          </Label>

          <InputDate
            label="Mes/Ano"
            type="month"
            onChange={(e) => {
              setMonth(e.target.value);
            }}
            errorMessage={month === "" ? error : <></>}
          />
          <Inputs
            label="Total Kw Gerado"
            type="number"
            onChange={(e) => setEnergy(e.target.value)}
            errorMessage={energy === "" ? error : <></>}
          />
          <SubmitButton type="submit" value="Cadastrar"></SubmitButton>
        </Form>
      </Container>
    </>
  );
}
