import Link from "next/link";

export interface IItemTraning {
  title: string;
  href: string;
}
interface Props {
  data: IItemTraning[];
}

export function TrainingList({ data }: Props) {
  return (
    <ul className="list-decimal list-inside">
      {data.map((i) => {
        return (
          <li key={i.href} className="hover:text-blue-600">
            <Link href={i.href}>{i.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
