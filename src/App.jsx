import EventForm from "./components/enfoque/EventForm";
import EventMedia from "./components/enfoque/EventMedia";
import EventOnErrorOnLoad from "./components/enfoque/EventOnErrorOnLoad";
import EventOnFocus from "./components/enfoque/EventOnFocus";
import EventosFull from "./components/enfoque/EventosFull";
import PointAction from "./components/enfoque/PointAction";
import EventOnKeyDown from "./components/EventOnKeyDown";
import EventOnKeyPress from "./components/EventOnKeyPress";
import EventOnKeyUp from "./components/EventOnKeyUp";

function App() {
  return (
    <div>
      <EventMedia />
      <hr />
      <PointAction />
      <hr />
      <EventosFull />
      <hr />
      <EventOnErrorOnLoad />
      <hr />
      <EventForm />
      <hr />
      <EventOnFocus />
      <hr />
      <EventOnKeyDown />
      <EventOnKeyUp />
      <EventOnKeyPress />
      <hr />
    </div>
  );
}

export default App;
