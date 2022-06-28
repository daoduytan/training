import { Container } from "../container";
import styled from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styled.footer}>
      <Container>@2022</Container>
    </footer>
  );
}
