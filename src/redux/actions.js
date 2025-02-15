import axios from "axios";
import { mainUrlReq } from "../utils";

export const getStudents = () => (dispatch) => {
  axios
    .get(`${mainUrlReq}/students`)
    .then((res) => {
      if (res.data.status) {
        dispatch({
          type: "GET_STUDENTS",
          payload: res.data.data,
        });
      }
    })
    .catch((err) => console.log(err));
};
