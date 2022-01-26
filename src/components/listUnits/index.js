import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

export default function ListUnits() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("http://localhost:3333/unidades")
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  async function removeUnit(unit) {
    const id = unit.id;
    axios.delete(`http://localhost:3333/unidades/${id}`, {
      params: {
        id: id,
      },
    });
    removeFromTable(id);
  }

  async function removeFromTable(id) {
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
      <p>Lista de unidades</p>
      {data.map((unidade) => {
        return (
          <div className="Componente de Lista">
            <div>
              <p>{unidade.apelido}</p>
              <button
                onClick={() => {
                  removeUnit(unidade);
                }}
              >
                remover
              </button>
              <button>
                <Link to={`/editUnit/${unidade.id}`}>editar</Link>
              </button>
            </div>
          </div>
        );
      })}
      <button>
        <Link to={`/createUnit/`}>Crirar Nova Unidade</Link>
      </button>
    </>
  );
}
