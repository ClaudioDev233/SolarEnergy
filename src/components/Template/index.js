import {
  NavBar,
  Button,
  MainContainer,
  Section,
  Header,
  Titulo,
} from "./styles";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";
import { FaChartPie, FaChartBar, FaCog } from "react-icons/fa";

export default function Template({ children, titulo }) {
  const history = useNavigate();

  return (
    <>
      <MainContainer>
        <NavBar>
          <section>
            <img src={logo1}></img>
          </section>
          <section>
            <ul>
              <li>
                <Button onClick={() => history("/dashboard")}>
                  <span>
                    <FaChartPie />
                  </span>
                  <p>Dashboard</p>
                </Button>
              </li>
              <li>
                <Button onClick={() => history("/unitList")}>
                  <span>
                    <FaChartBar />
                  </span>
                  <p>Unidades</p>
                </Button>
              </li>
              <li>
                <Button onClick={() => history("/unitPowerGeneration")}>
                  <span>
                    <FaCog />
                  </span>

                  <p>Cadastro de energia gerada</p>
                </Button>
              </li>
            </ul>
          </section>
        </NavBar>
        <Section className="Resto">
          <Header>
            <Titulo>{titulo}</Titulo>
          </Header>
          {children}
        </Section>
      </MainContainer>
    </>
  );
}
