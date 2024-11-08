import { Col, Row } from "react-bootstrap";
import { Avatar } from "primereact/avatar";
import PropTypes from "prop-types"; // ES6

function Item({ img, name, score, max }) {
  return (
    <Row className={max === score ? "row-container-winner" : "row-container"}>
      <Col className="col-container">
        <div id="header">
          <Avatar image={img} className="mr-2" size="xlarge" shape="circle" />
          <h1> {name} </h1>
        </div>
        <h3> {score} </h3>
      </Col>
    </Row>
  );
}
Item.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
  max: PropTypes.number,
};

export default Item;
