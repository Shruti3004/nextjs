import { useRouter } from "next/router";

function PortfolioId() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Portfolio Id</h1>
    </div>
  );
}

export default PortfolioId;
