import EventOnFocus from "./components/enfoque/EventOnFocus";
import EventOnKeyDown from "./components/EventOnKeyDown";
import EventOnKeyPress from "./components/EventOnKeyPress";
import EventOnKeyUp from "./components/EventOnKeyUp";

function App() {
  return (
    <div>
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
