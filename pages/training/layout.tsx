import { ReactElement } from "react";
import { BaseLayout } from "../../components";
import { NextPageWidthLayout } from "../_app";

const Layout: NextPageWidthLayout = () => {
  return (
    <div className="grid gap-4">
      <div className="text-4xl">Layout</div>

      <div>
        <ul className="list-decimal list-inside">
          <li>1 layout</li>
          <li>Nhiều layout</li>
        </ul>
      </div>
    </div>
  );
};

Layout.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Layout;
