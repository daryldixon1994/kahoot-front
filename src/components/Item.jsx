import { Col, Row } from "react-bootstrap";
import { Avatar } from "primereact/avatar";
import PropTypes from "prop-types"; // ES6
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { mainUrlReq } from "../utils";
import { getStudents } from "../redux/actions";
import { useDispatch } from "react-redux";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from "react-icons/tb";

function Item({ img, name, score, max, _id }) {
  const dispatch = useDispatch();
  const handleDeleteStudent = () => {
    axios.delete(`${mainUrlReq}/students/${_id}`).then(() => {
      dispatch(getStudents());
    });
  };
  const handleAddOne = () => {
    axios.put(`${mainUrlReq}/students/third/${_id}`).then(() => {
      dispatch(getStudents());
    });
  };
  const handleAddTwo = () => {
    axios.put(`${mainUrlReq}/students/second/${_id}`).then(() => {
      dispatch(getStudents());
    });
  };
  const handleAddThree = () => {
    axios.put(`${mainUrlReq}/students/first/${_id}`).then(() => {
      dispatch(getStudents());
    });
  };
  return (
    <Row className={max === score ? "row-container-winner" : "row-container"}>
      <Col className="col-container">
        <IoMdClose id="close-icon" size={20} onClick={handleDeleteStudent} />
        <div id="header">
          <Avatar image={img} className="mr-2" size="xlarge" shape="circle" />
          <h1> {name} </h1>
        </div>
        <h3> {score} </h3>
      </Col>
      <div id="numbers-box">
        <TbCircleNumber1Filled
          style={{ cursor: "pointer" }}
          size={30}
          color="#f42c43"
          onClick={handleAddOne}
        />
        <TbCircleNumber2Filled
          style={{ cursor: "pointer" }}
          size={30}
          color="#f42c43"
          onClick={handleAddTwo}
        />
        <TbCircleNumber3Filled
          style={{ cursor: "pointer" }}
          size={30}
          color="#f42c43"
          onClick={handleAddThree}
        />
      </div>
    </Row>
  );
}
Item.propTypes = {
  _id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
  max: PropTypes.number,
};

export default Item;
