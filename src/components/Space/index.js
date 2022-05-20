import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchSpaces } from "../../store/spaces/actions";
import { selectSpaces } from "../../store/spaces/selectors";

export default function Spaces(props) {

  return (
    <>
      <Container>
        Test
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Container>
    </>
  );
}
