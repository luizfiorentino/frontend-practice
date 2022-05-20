import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSpaces } from "../../store/spaces/actions";
import { selectSpaces, selectLoading } from "../../store/spaces/selectors";
import { useSelector } from "react-redux";
import Space from "../../components/Space";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function HomePage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  const loading = useSelector(selectLoading);

  console.log("here");

  console.log("spaces", spaces);
  console.log(loading);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <div>
      <h2>HomePage</h2>

      {loading
        ? "Loading..."
        : spaces.map((space) => {
            return (
              <Space
                key={space.id}
                // id={space.id}
                title={space.title}
                description={space.description}
                // backgroundColor={space.backgroundColor}
                // color={space.color}
                // showLink={true}
              />
            );
          })}
    </div>
  );
}
