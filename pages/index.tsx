import Link from "next/link";

const IndexPage = () => (
  <div>
    <div>
      <Link href="/training">
        <a>Training</a>
      </Link>
    </div>

    <Link href="/example">
      <a>Examples</a>
    </Link>
  </div>
);

export default IndexPage;
