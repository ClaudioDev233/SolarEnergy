import NavMenu from "../../components/menu";
import { useState } from "react";
// mudar para units ou algo do genero e apagar o unit sing up
export default function UnitList() {
  const [mode, setMode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(mode);
    setMode("unitSignUp");
  }
  return (
    <>
      {/* <NavMenu></NavMenu> */}
      <h1>Unidades</h1>
      {mode === "units" ? (
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <p>CADASTRO</p>
            <input type="submit" value="Cadastrar"></input>
          </form>
        </div>
      ) : (
        <div>
          <p>Unidaditas</p>
          <button
            onClick={() => {
              setMode("units");
              console.log(mode);
            }}
          >
            Nova Unidade
          </button>
        </div>
      )}
    </>
  );
}
