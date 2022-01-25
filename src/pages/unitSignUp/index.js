import NavMenu from "../../components/menu";
export default function SignUp() {
  return (
    <>
      <p>CADASTRO DE UNIDADES</p>
      {/* <NavMenu></NavMenu> */}
      <hr></hr>

      <section>
        <header>
          <h1>Unidades de Energia</h1>
        </header>
        <div>
          <h2>Cadastro de Unidade</h2>
          <form>
            <label>
              Apelido
              <input type="text"></input>
            </label>
            <label>
              Local
              <input type="text"></input>
            </label>
            <label>
              Marca
              <input type="text"></input>
            </label>
            <label>
              Modelo
              <input type="text"></input>
            </label>
            <label>
              Ativo
              <input type="checkbox"></input>
            </label>
            <input type="submit" value="Salvar"></input>
          </form>
        </div>
      </section>
    </>
  );
}
