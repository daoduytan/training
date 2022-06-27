import { ReactNode } from "react";

import styled from "./Container.module.scss";

interface Props {
  children?: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className="max-w-5xl px-4 mx-auto">
      <div className={styled.container}>{children}</div>
    </div>
  );
};
