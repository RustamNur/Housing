import React from "react";
import { Container, Link, Logo, Main, Section, Wrapper } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import navbar from "../../utils/Navbar";
import { Button } from "../generic";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} $logo="true">
            <Logo /> <h3>Housing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button width={100} onClick={() => navigate("/login")} type="light">
              Login
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
