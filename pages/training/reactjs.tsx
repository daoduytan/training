import { ReactElement } from "react";
import { BaseLayout } from "../../components";
import { NextPageWidthLayout } from "../_app";

const Reactjs: NextPageWidthLayout = () => {
  return (
    <div className="grid gap-4">
      <div className="text-4xl">Tổng quan Reactjs</div>

      <div>
        <ul className="list-decimal list-inside">
          <li>Component</li>
          <li>Props, State</li>
          <li>
            React hook hay dùng
            <ul className="list-disc list-inside">
              <li>useState</li>
              <li>useEffect</li>
              <li>useCallback</li>
              <li>useMemo (memo)</li>
              <li>useRef</li>
              <li>useReducer</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

Reactjs.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Reactjs;
