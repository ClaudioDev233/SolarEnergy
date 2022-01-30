import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

import { retornaGeracoesPorMes } from "../../utils";
import { Card, CardHolder, ChartContainer, Container, Titulo } from "./styles";

export default function DashboardInfo() {
  const [units, setUnits] = useState([]);
  const [generation, setGeneration] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [energy, setEnergy] = useState([]);

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:3001/unidades/")
        .then((resp) => setUnits(resp.data));

      axios
        .get("http://localhost:3001/geracoes/")
        .then((resp) => setGeneration(resp.data));
    }
    getData();
  }, []);

  useEffect(() => {
    getGeneration(generation);
  }, [generation]);

  // função que calcula a média de energia
  function getGeneration(power) {
    if (power.length === 0) {
      return;
    } else {
      const powerArray = power.map((geracoes) =>
        parseInt(geracoes.energia_gerada)
      );
      setEnergy(retornaGeracoesPorMes(generation));
      console.log(units);
      const sumPower = powerArray.reduce((valor1, valor2) => valor2 + valor1);
      const powerAverage =
        units.length < 1 ? sumPower / 1 : sumPower / units.length;
      powerAverage > 0 ? setFiltered(powerAverage) : setFiltered(0);
    }
  }

  return (
    <>
      <Container>
        <CardHolder>
          <Card>
            <p>Total de Unidades</p>
            <span>{units.length}</span>
          </Card>
          <Card>
            <p>Unidades Ativas</p>
            <span>
              {units.filter((isActive) => isActive.ativo === true).length}
            </span>
          </Card>
          <Card>
            <p>Unidades Inativas</p>
            <span>
              {units.filter((isActive) => isActive.ativo === !true).length}
            </span>
          </Card>
          <Card>
            <p>Media</p>
            <span>{filtered}kw</span>
          </Card>
        </CardHolder>
        <ChartContainer>
          <Titulo>Total Energia Gerada por Mês</Titulo>
          <Line
            datasetIdKey="id"
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: "Total Energia Gerada por Mês",
                },
              },
            }}
            data={{
              labels: energy.map((valor) => valor.mes),
              datasets: [
                {
                  id: 1,
                  label: "Energia Gerada",
                  data: energy.map((valor) => valor.geracao_energia),
                  borderColor: "rgb(53, 162, 235)",
                  backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
              ],
            }}
          />
        </ChartContainer>
      </Container>
    </>
  );
}
