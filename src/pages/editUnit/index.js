import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function EditUnit() {
  const params = useParams();

  const [data, setData] = useState("");

  useEffect(() => {
    async function getData() {
      await axios
        .get(`http://localhost:3333/unidades/${params.id}`)
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  return (
    <>
      <p>Edit Unit</p>
      <p>{data.apelido}</p>
    </>
  );
}
