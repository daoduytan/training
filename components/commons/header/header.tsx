import { Container } from "../container";
import styled from "./header.module.scss";

export function Header() {
  return (
    <header className={styled.header}>
      <Container>
        <div className={styled.logo}>Training Nextjs</div>
      </Container>
    </header>
  );
}
