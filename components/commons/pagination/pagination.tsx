interface Props {
  total: number;
  page: number;
  onChange: (page: number) => void;
}

export const PERPAGE = 20;

export function Pagination({ total, page, onChange }: Props) {
  const pages = Math.round(total / PERPAGE);

  const onPrev = () => {
    onChange(page - 1);
  };
  const onNext = () => {
    onChange(page + 1);
  };

  return (
    <div className="flex items-center justify-center font-bold text-xl gap-4 py-8">
      <button onClick={onPrev}>Prev</button>
      <span>
        {page}/{pages}
      </span>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
