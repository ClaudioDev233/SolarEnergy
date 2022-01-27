import { NavBar, Button } from "./styles";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";
import { FaChartPie, FaChartBar, FaCog } from "react-icons/fa";

export default function NavMenu() {
  const history = useNavigate();

  return (
    <>
      <NavBar>
        <section>
          <img src={logo1}></img>
        </section>
        <section>
          <Button onClick={() => history("/dashboard")}>
            <FaChartPie />

            <p>Dashboard</p>
          </Button>

          <Button onClick={() => history("/unitList")}>
            <FaChartBar />
            <p>Unidades</p>
          </Button>

          <Button onClick={() => history("/unitPowerGeneration")}>
            <div>
              <FaCog />
            </div>

            <div>
              <p>Cadastro de energia gerada</p>
            </div>
          </Button>
        </section>
      </NavBar>
    </>
  );
}
