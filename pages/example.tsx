import Link from "next/link";

const links = [
  {
    href: "/client",
    label: "Client",
  },
  {
    href: "/ssr",
    label: "SSR",
  },
  {
    href: "/isr",
    label: "ISR",
  },
];

export default function Example() {
  return (
    <div>
      <ul>
        {links.map((link) => {
          const href = `/fetching${link.href}`;
          return (
            <li key={link.href}>
              <Link href={href}>
                <a>{link.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
