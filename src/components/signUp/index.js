import { UnitContext } from "../../context/unitContext";
import { useContext, useState } from "react";
import axios from "axios";
export default function SignUpUnit() {
  const { setMode } = useContext(UnitContext);
  const [nickname, setNickname] = useState();
  const [locale, setLocale] = useState();
  const [brand, setBrand] = useState();
  const [model, setModel] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setMode("unitSignUp");
    axios.post("http://localhost:3333/unidades", {
      apelido: nickname,
      local: locale,
      marca: brand,
      modelo: model,
    });
  }

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <p>CADASTRO</p>
          <label>
            Apelido
            <input
              type="text"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            ></input>
          </label>
          <label>
            Local
            <input
              type="text"
              onChange={(e) => {
                setLocale(e.target.value);
              }}
            ></input>
          </label>
          <label>
            Marca
            <input
              type="text"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            ></input>
          </label>
          <label>
            Modelo
            <input
              type="text"
              onChange={(e) => {
                setModel(e.target.value);
              }}
            ></input>
          </label>
          <label>
            Ativo
            <input type="checkbox"></input>
          </label>
          <input type="submit" value="Cadastrar"></input>
        </form>
      </div>
    </>
  );
}
