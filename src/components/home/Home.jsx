import React from "react";
import { Container } from "./style";
import { Button, Input } from "../generic";
// import Input from "../generic/input/Input.jsx";

const Home = () => {
  return <Container>
    <h2>Home</h2>
    <Input width={200} placeholder={'placeholder'} />
    <Button>👍 Liked</Button>
  </Container>;
};

export default Home;
