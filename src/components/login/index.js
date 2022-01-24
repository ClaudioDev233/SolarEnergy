import logo1 from "../../assets/images/logo1.png";
export default function Login() {
  return (
    <>
      <div>
        <img src={logo1}></img>
        <p>Seja Bem Viado</p>
        <form>
          <input placeholder="Email"></input>
          <input type="password" placeholder="Senha"></input>
          <button>Entrar</button>
        </form>
      </div>
    </>
  );
}
