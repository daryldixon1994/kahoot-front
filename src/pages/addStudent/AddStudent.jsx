import { useRef, useState } from "react";
import "./style.css";
import axios from "axios";
import { mainUrlReq } from "../../utils";
import { useDispatch } from "react-redux";
import { getStudents } from "../../redux/actions";
function AddStudent() {
  const formRef = useRef();
  const [newStudent, setNewStudent] = useState();
  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleAddStudent = () => {
    axios
      .post(`${mainUrlReq}/students`, newStudent)
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          // window.location.assign("/rank");
          // axios
          //   .get(`${mainUrlReq}/students`)
          //   .then((res) => {
          //     if (res.data.status) {
          //       dispatch({
          //         type: "GET_STUDENTS",
          //         payload: res.data.data,
          //       });
          //     }
          //   })
          //   .catch((err) => console.log(err));
          dispatch(getStudents());
          formRef.current.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id="add-student">
      <form
        ref={formRef}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <input name="name" type="text" placeholder="Student name" />
        <input name="img" type="text" placeholder="Image URL" />
        <button onClick={handleAddStudent} type="button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
