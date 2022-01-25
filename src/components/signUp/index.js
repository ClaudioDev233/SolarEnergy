import { UnitContext } from "../../context/unitContext";
import { useContext } from "react";
export default function SignUpUnit() {
  const { setMode } = useContext(UnitContext);
  function handleSubmit(e) {
    e.preventDefault();
    setMode("unitSignUp");
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
          <input type="submit" value="Cadastrar"></input>
        </form>
      </div>
    </>
  );
}
