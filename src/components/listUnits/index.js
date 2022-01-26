import { UnitContext } from "../../context/unitContext";
import { Children, useContext, useEffect, useState } from "react";
import axios from "axios";
export default function ListUnits() {
  const { setMode } = useContext(UnitContext);

  const [data, setData] = useState([]);

  //axios interceptors
  useEffect(() => {
    async function getData() {
      await axios
        .get("http://localhost:3333/unidades")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  // fazer um filter para remover da pagina
  function removeUnit(unit) {
    const id = unit.id;
    axios.delete(`http://localhost:3333/unidades/${id}`, {
      params: {
        id: id,
      },
    });
    removeFromTable(id);
  }

  function removeFromTable(id) {
    const newData = data.filter((unit) => {
      if (unit.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setData(newData);
  }

  return (
    <>
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
            {Children.toArray(
              data.map((unidade) => {
                return (
                  <tr>
                    <td>{unidade.id}</td>
                    <td>{unidade.apelido}</td>
                    <td>{unidade.local}</td>
                    <td>{unidade.marca}</td>
                    <td>{unidade.modelo}</td>
                    <td>botao</td>
                    <td>
                      <button
                        onClick={() => {
                          removeUnit(unidade);
                        }}
                      >
                        {unidade.id}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
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
