import { ReactElement } from "react";
import { BaseLayout } from "../../components";
import { NextPageWidthLayout } from "../_app";

const Page: NextPageWidthLayout = () => {
  return (
    <div className="grid gap-4">
      <div className="text-4xl">Page</div>

      <div>
        <ul className="list-decimal list-inside">
          <li>_page.tsx</li>
          <li>_document.tsx</li>
          <li>Error page</li>
        </ul>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Page;
