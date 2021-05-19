import { getFeaturedEvents } from "../pages/dummy-data";

function Home() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <ul></ul>
    </div>
  );
}
export default Home;
