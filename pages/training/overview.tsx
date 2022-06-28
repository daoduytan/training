import Link from "next/link";
import { BaseLayout } from "../../components";
import { NextPageWidthLayout } from "../_app";

const Overview: NextPageWidthLayout = () => {
  return (
    <div className="grid gap-4">
      <div className="text-4xl">Tổng quan</div>

      <div className="grid gap-3">
        <div className="text-xl">1. Nextjs là gì?</div>

        <p>Nextjs là 1 Framework javascript, sử dụng React.</p>
        <ul className="list-inside list-disc">
          <li>
            Trang chủ Nextjs (
            <i>
              <a href="https://nextjs.org/" target="_blank">
                link
              </a>
            </i>
            )
          </li>
          <li>
            Github Nextjs (
            <i>
              <a href="https://github.com/vercel/next.js" target="_blank">
                link
              </a>
            </i>
            )
          </li>
        </ul>

        <div className="text-xl">2. Tại sao phải dùng Nextjs?</div>
        <ul className="list-inside list-disc">
          <li>Setup dễ dàng</li>
          <li>Dễ custom</li>
          <li>Support tốt cho SEO</li>
          <li>Auto code splitting</li>
          <li>Fast refresh</li>
          <li>Support file-system routing</li>
          <li>Support SSG, ISG</li>
          <li>...</li>
        </ul>

        <p>
          Nếu dự án yêu cầu support SEO thì nextjs là lựa chọn tốt thay vì dùng
          React thuần
        </p>
      </div>
      <div className="mt-6">
        <Link href="setup">
          <a className="border px-4 py-2">Cài đặt </a>
        </Link>
      </div>
    </div>
  );
};

Overview.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Overview;
