import NavMenu from "../../components/menu";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

import { retornaGeracoesPorMes } from "../../utils";

export default function Dashboard() {
  const [units, setUnits] = useState([]);
  const [generation, setGeneration] = useState([]);
  const [filtered, setFiltered] = useState([]);
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
      const sumPower = powerArray.reduce((valor1, valor2) => valor2 + valor1);
      const powerAverage = Math.round(sumPower / units.length);
      powerAverage >= 1 ? setFiltered(powerAverage) : setFiltered("");
    }
    console.log(energy);
  }

  return (
    <>
      <NavMenu></NavMenu>
      <p>Total e Unidades {units.length}</p>
      <p>
        Unidades Ativas
        {units.filter((isActive) => isActive.ativo === true).length}
      </p>
      <p>
        Unidades Inativas
        {units.filter((isActive) => isActive.ativo === !true).length}
      </p>
      <p>Media: {filtered} </p>

      <div>
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
                text: "Consumo Mensal",
              },
            },
          }}
          data={{
            labels: energy.map((valor) => valor.mes),
            datasets: [
              {
                id: 1,
                label: "Energia Gerada",
                data: energy.map((valor) => valor.geracao_energia), //verificar
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          }}
        />
      </div>
    </>
  );
}
