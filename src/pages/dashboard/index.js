import NavMenu from "../../components/menu";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

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

  function getGeneration(power) {
    console.log(power.length);
    if (power.length === 0) {
      return;
    } else {
      const powerArray = power.map((coisito) =>
        parseInt(coisito.energia_gerada)
      );
      setEnergy(powerArray);
      const sumPower = powerArray.reduce((coiso1, coiso2) => coiso2 + coiso1);
      const powerAverage = Math.round(sumPower / units.length);
      setFiltered(powerAverage);
    }
  }

  return (
    <>
      {console.log(energy)}
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
      <p>Soma toda energia: {filtered} </p>

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
            labels: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez",
            ],
            datasets: [
              {
                id: 1,
                label: "Energia Gerada",
                data: energy,
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
