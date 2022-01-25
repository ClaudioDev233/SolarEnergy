import { UnitContext } from "../../context/unitContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
export default function ListUnits() {
  const { setMode } = useContext(UnitContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get("http://localhost:3333/unidades")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  return (
    <>
      <>{console.log(data[0])}</>
      <div>
        <p>Unidaditas</p>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Apelido</th>
              <th>Local</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>#</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>155</td>
              <td>Painel 1</td>
              <td>Rua tal</td>
              <td>Blebers</td>
              <td>Modelo</td>
              <td>botao</td>
              <td>botao vemr</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => {
            setMode("units");
          }}
        >
          Nova Unidade
        </button>
      </div>
    </>
  );
}
