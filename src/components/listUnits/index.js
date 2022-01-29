import { useState, useEffect, Children } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import {
  Section,
  Table,
  Thead,
  Button,
  TableContainer,
  Titulo,
} from "./styles";

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
      <Section>
        <TableContainer>
          <Titulo>Lista Unidades</Titulo>

          <Table>
            <Thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Local</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>#</th>
                <th>#</th>
              </tr>
            </Thead>
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
                        <Button bg="#8DB51B" tamanho="default">
                          <Link to={`/editUnit/${unidade.id}`}>Editar</Link>
                        </Button>
                      </td>
                      <td>
                        <Button
                          bg="#D82D56"
                          tamanho="default"
                          onClick={() => {
                            removeUnit(unidade);
                          }}
                        >
                          Remover
                        </Button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
          <Button bg="#4C5DF1" align="flex-end">
            <Link to={`/createUnit/`}>Criar Nova Unidade</Link>
          </Button>
        </TableContainer>
      </Section>
    </>
  );
}
