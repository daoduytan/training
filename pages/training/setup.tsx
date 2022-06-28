import { BaseLayout } from "../../components";
import { NextPageWidthLayout } from "../_app";

const Setup: NextPageWidthLayout = () => {
  return (
    <div className="grid gap-4">
      <div className="text-4xl">Cài đặt</div>
      <div className="grid gap-3">
        <div className="text-xl">1. Kiến thức cơ bản</div>
        <p>Những kiến thức cơ bản cần có:</p>

        <ul className="list-decimal list-inside">
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Reactjs</li>
        </ul>

        <div className="text-xl">2. Setup project</div>
        <div className="font-bold">a. Yêu cầu:</div>
        <ul className="list-decimal list-inside">
          <li>
            Nodejs:
            <p>
              Cách đơn giản nhất là vào trang chủ{" "}
              <a
                className="font-bold"
                href="https://nodejs.org/en/"
                target="_blank"
              >
                Nodejs
              </a>{" "}
              download file cài đặt về rồi cài đặt (nên chọn bản LTS). Với macos
              có thể cài qua Homebrew để tiện việc quản lý
            </p>
          </li>
          <li>
            Git: Cần thiết để lưu trữ code cho việc làm việc theo nhóm.
            <p>
              - Vào trang chủ của{" "}
              <a
                className="font-bold"
                href="https://git-scm.com/"
                target="_blank"
              >
                Git
              </a>{" "}
              để tải file cài đặt phù hợp.
            </p>
            <p>
              - Có thể dùng git bằng cách gõ lệnh hoặc dùng GUI nếu không rành
              dòng lệnh.
            </p>
          </li>
        </ul>

        <div className="font-bold">b. Cài đặt Nextjs:</div>

        <ul className="list-decimal list-inside">
          <li>
            Tự động: (nên dùng)
            <p>
              - Sử dụng create-next-app để tạo project nextjs một cách đơng giản
              và nhanh chóng. Nextjs cung cấp sẵn nhiều templates sẵn để chúng
              ta lựa chọn (
              <a
                href="https://nextjs.org/examples"
                className="font-bold"
                target="_blank"
              >
                Link
              </a>
              )
            </p>
            <p>
              - Nên chọn template sử dụng typescript để cho dự án để dự án dễ
              maintain.
            </p>
          </li>
          <li>Truyền thống</li>
        </ul>
        <p>
          Cụ thể cách cài đặt như thế nào docs của Nextjs đã viết rất rõ (
          <a
            href="https://nextjs.org/docs/getting-started"
            target="_blank"
            className="font-bold"
          >
            Link
          </a>
          )
        </p>
      </div>

      <div className="font-bold">c. Thêm Prettier</div>
      <p>
        Nếu project chưa sử dụng prettier chúng ta nên add thêm vào. Việc này là
        cần thiết để format code theo 1 chuẩn thống nhất.
      </p>
      <ul className="list-decimal list-inside grid gap-2">
        <li>
          Insatall prettier package: <b>yarn add --dev --exact prettier</b> hoặc{" "}
          <b>npm install --save-dev --save-exact prettier</b>
        </li>
        <li>Add file .prettierrc vào folder project</li>
      </ul>

      <p>
        <b> Tips:</b> Vào trang playground (
        <b>
          <a href="https://prettier.io/playground/" target="_blank">
            Link
          </a>
        </b>
        ) , lựa chọn nhưng setting phù hợp sau đó copy và paste vào file
        .prettierrc
      </p>

      <div className="font-bold">d. Css</div>

      <ul className="list-decimal list-inside grid gap-2">
        <li>
          Truyền thống: css của toàn bộ dự án sẽ được viết ở một nơi
          <p>
            Cách này sẽ rất khó bảo trì, kế thừa, mở rộng và dễ gây conflic css
            nên chỉ phù hợp với những án nhỏ.
          </p>
        </li>

        <li>
          Styled-jsx: (CSS in JS) NextJs cung cấp 1 công cụ để viết css trong
          component, cách này dễ maintain, dễ sửa nhưng sẽ dễ gấy rối code nếu
          sử dụng ko hợp lý
        </li>
        <li>
          Css module + Sass + tailwind css:
          <p>- Css module sẽ làm đảm bảo code css của bạn không bị conflic</p>
          <p>
            - Scss sẽ giúp code css trở nên gọn hơn. Việc support sass cho
            project cũng vô cùng đơn giản:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Thêm sass package: <b>yarn add -D sass</b>.
            </li>
            <li>Chuyển file .css thành .scss hoặc .sass.</li>
          </ul>
          <p>
            - Tailwind css là thư viên vô cùng mạnh support việc styling.
            Support nhiều thuộc tính, res, darkmode, dễ custom. Follow theo{" "}
            <b>
              <a
                href="https://tailwindcss.com/docs/guides/nextjs"
                target="_blank"
              >
                Link
              </a>
            </b>
            để thêm thư viện này vào project
          </p>
        </li>
      </ul>

      <div className="font-bold">e. Cấu trúc folder</div>
      <p>
        Hướng đến việc chia folder làm sao để dễ bảo trì, maintain và mở rộng
      </p>

      <ul className="list-decimal list-inside">
        <li>
          page: routing cho app
          <ul className="list-disc list-inside">
            <li>api: folder api routing</li>
            <li>Các file, folder còn lại là page</li>
          </ul>
        </li>
        <li>
          components:
          <ul className="list-disc list-inside">
            <li>
              commons: chưa tất cả các component dùng chung trong hệ thống
            </li>
            <li>layout: layout cho page</li>
            <li>page-components: component của page</li>
          </ul>
        </li>
        <li>utils: chưa những function dùng chung cho toàn hệ thống</li>
        <li>styles/global.scss: style global cho project</li>
      </ul>
      <p>
        Ngoài ra còn có nhìu phần khác nữa nhưng trên đây là những folder nên có
        trong project
      </p>
      <p>
        Project tham khảo:{" "}
        <b>
          <a href="https://github.com/daoduytan/training" target="_blank">
            Link
          </a>
        </b>
      </p>
    </div>
  );
};

Setup.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Setup;
