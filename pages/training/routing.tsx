import { ReactElement } from "react";
import { BaseLayout } from "../../components";
import { NextPageWidthLayout } from "../_app";

const Routing: NextPageWidthLayout = () => {
  return (
    <div className="grid gap-4">
      <div className="text-4xl">Routing</div>

      <div>Updating...</div>
    </div>
  );
};

Routing.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Routing;
