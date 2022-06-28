import { Footer, Header, Container } from "../../commons";
import { ReactNode } from "react";

import styled from "./base-layout.module.scss";

interface Props {
  children?: ReactNode;
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className={styled.main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
