import { ReactElement } from "react";
import { BaseLayout } from "../../components";
import { NextPageWidthLayout } from "../_app";

const DataFetching: NextPageWidthLayout = () => {
  return (
    <div className="grid gap-4">
      <div className="text-4xl">DataFetching</div>

      <div>
        <ul className="list-decimal list-inside">
          <li>SSR: getServerSideProps</li>
          <li>SSG: getStaticProps</li>
          <li>getStaticPaths</li>
          <li>ISR</li>
          <li>CSR: useEffect or SWR</li>
        </ul>
      </div>
    </div>
  );
};

DataFetching.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default DataFetching;
