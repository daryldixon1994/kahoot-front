import Item from "./Item";
import { Stack } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
// import { mainUrlReq } from "../utils";
function RankList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://kahoot-backend-m4bs.onrender.com/students")
      .then((res) => setData(res.data.data))
      .catch((err) => console.dir(err));
  }, []);
  let scores = data.map((elt) => elt.score);
  const max = Math.max(...scores);

  return (
    <Stack gap={4} className="rank-container " fluid="md">
      {data.map((elt, i) => {
        // console.log(elt.score);
        return <Item {...elt} key={i} max={max} />;
      })}
    </Stack>
  );
}

export default RankList;
