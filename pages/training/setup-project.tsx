import { Container, Title } from "../../components";

export default () => {
  return (
    <Container>
      <div className="grid gap-4">
        <Title variant="h1">Setup project</Title>
        <hr />
        <Title variant="h3">Tổng quan về Nextjs</Title>
        <ul className="list-decimal list-inside">
          <li>
            Nextjs là gì? (
            <a href="https://nextjs.org" target="_blank">
              Trang chủ
            </a>{" "}
            /{" "}
            <a target="_blank" href="https://github.com/vercel/next.js">
              Github
            </a>
            )
          </li>
          <li>
            <span>Tại sao phải dùng nextjs</span>
            <ul className="list-disc list-inside">
              <li>Zero config</li>
              <li>Fast refresh</li>
              <li>File-system routing</li>
              <li>Support tốt cho SEO</li>
            </ul>
          </li>
        </ul>
        <Title variant="h3">Setup</Title>
        <ul className="list-decimal list-inside">
          <li>Sử dụng create-next-app</li>
          <li>
            Thêm eslint (
            <a href="https://nextjs.org/docs/basic-features/eslint">link</a>)
          </li>
          <li>Thêm Prettier</li>
        </ul>
        <Title variant="h3">Cấu trúc folder</Title>
        <ul className="list-decimal list-inside">
          <li>
            Nên cấu trúc folder theo hướng module để tiện cho việc bảo trì và mở
            rộng
          </li>
          <li>
            <span>Css</span>
            <ul className="list-disc list-inside">
              <li>Truyền thống</li>
              <li>Css module</li>
              <li>Sass</li>
              <li>Css module + css + tailwind css</li>
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  );
};
