import NavMenu from "../../components/menu";
import { useContext } from "react";
import { UnitContext } from "../../context/unitContext";
import SignUpUnit from "../../components/signUp";
import ListUnits from "../../components/listUnits";
// mudar para units ou algo do genero e apagar o unit sing up
export default function UnitList() {
  const { mode } = useContext(UnitContext);

  return (
    <>
      {/* <NavMenu></NavMenu> */}
      <h1>Unidades</h1>

      {mode === "units" ? <SignUpUnit></SignUpUnit> : <ListUnits></ListUnits>}
    </>
  );
}
