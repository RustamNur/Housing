import React from "react";
import { Container, Link, Logo, Section, Wrapper } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import navbar from "../../utils/Navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} $logo='true'>
          <Logo /> <h3>Housing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path},index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Sign IN</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
