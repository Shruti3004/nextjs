import EventItem from "./EventItem";

function EventList({ items }) {
  return (
    <div>
      {items.map((event) => (
        <EventItem />
      ))}
    </div>
  );
}

export default EventList;
