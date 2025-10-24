import Header from "./Components/Header/Header";
import ToDo from "./Components/ToDo/ToDo";

/** Create a todo app and instead of using a backend use settimeout to create async functionality
 * Create a todos list in a separate folder
 * create a better header componenet
 */
function App() {
  return (
    <>
      <Header />
      <ToDo/>
    </>
  );
}

export default App;
