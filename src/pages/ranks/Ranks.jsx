import { useSelector } from "react-redux";
import Item from "../../components/Item";
import { Stack } from "react-bootstrap";

// import { mainUrlReq } from "../utils";
function RankList() {
  const { students } = useSelector((store) => store.kahootReducer);
  let scores = students?.map((elt) => elt.score);
  const max = Math.max(...scores);

  return (
    <Stack gap={4} className="rank-container " fluid="md">
      {students?.map((elt, i) => {
        // console.log(elt.score);
        return <Item {...elt} key={i} max={max} />;
      })}
    </Stack>
  );
}

export default RankList;
