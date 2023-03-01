import EventForm from "./components/enfoque/EventForm";
import EventOnErrorOnLoad from "./components/enfoque/EventOnErrorOnLoad";
import EventOnFocus from "./components/enfoque/EventOnFocus";
import EventosFull from "./components/enfoque/EventosFull";
import EventOnKeyDown from "./components/EventOnKeyDown";
import EventOnKeyPress from "./components/EventOnKeyPress";
import EventOnKeyUp from "./components/EventOnKeyUp";

function App() {
  return (
    <div>
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
