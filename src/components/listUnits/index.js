import { useState, useEffect, Children } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

export default function ListUnits() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:3001/unidades")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  function removeUnit(unit) {
    axios.delete(`http://localhost:3001/unidades/${unit.id}`).then(async () => {
      const resp = await axios.get(
        `http://localhost:3001/geracoes?unidade_id=${unit.id}`
      );
      resp.data.forEach(
        async (receivedData) =>
          await axios.delete(
            `http://localhost:3001/geracoes/${receivedData.id}`
          )
      );
    });

    removeFromTable(unit.id);
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
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
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
                  <td> {unidade.marca} </td>
                  <td> {unidade.modelo} </td>
                  <td>
                    <button>
                      <Link to={`/editUnit/${unidade.id}`}>editar</Link>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        removeUnit(unidade);
                      }}
                    >
                      remover
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <button>
        <Link to={`/createUnit/`}>Crirar Nova Unidade</Link>
      </button>
    </>
  );
}
