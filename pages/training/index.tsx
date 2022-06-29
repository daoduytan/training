import { ReactElement } from "react";
import { BaseLayout } from "../../components/layout";
import { IItemTraning, TrainingList } from "../../components/page-components";
import { NextPageWidthLayout } from "../_app";

const data: IItemTraning[] = [
  { title: "Tổng quan Reactjs", href: "training/reactjs" },
  { title: "Tổng quan Nextjs", href: "training/overview" },
  { title: "Cài đặt", href: "training/setup" },
  { title: "Routing", href: "training/routing" },
  { title: "Page", href: "training/page" },
  { title: "Layout", href: "training/layout" },
  { title: "Data fetching", href: "training/data-fetching" },
];

const Training: NextPageWidthLayout = () => {
  return (
    <div className="grid gap-4">
      <div className="text-xl font-medium">Danh sách chủ đề training</div>
      <TrainingList data={data} />
    </div>
  );
};

Training.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Training;
