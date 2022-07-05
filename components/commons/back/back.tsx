import { useRouter } from "next/router";

export function Back() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return <button onClick={goBack}>Back</button>;
}
