import { cloneElement, ReactNode } from "react";

type TVariant = "h1" | "h2" | "h3" | "h4" | "h5";

interface Props {
  children: ReactNode;
  variant: TVariant;
}

const getVariantElement = (variant: TVariant) => {
  switch (variant) {
    case "h2":
      return <h2 className="text-4xl font-bold"></h2>;
    case "h3":
      return <h3 className="text-3xl font-bold"></h3>;
    case "h4":
      return <h4 className="text-2xl font-bold"></h4>;
    case "h5":
      return <h5 className="text-xl font-bold"></h5>;
    default:
      return <h1 className="text-5xl font-bold"></h1>;
  }
};

export const Title = ({ children, variant }: Props) => {
  const element = getVariantElement(variant);

  return cloneElement(element, { children });
};
