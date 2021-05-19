import { useRouter } from "next/router";

function ClientProject() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>A Particular Project of the client</h1>
    </div>
  );
}

export default ClientProject;
