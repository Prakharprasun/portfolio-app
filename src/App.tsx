import Message from "./Message";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Featured from "./components/Featured";
import Toasts from "./components/Toasts";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Toasts></Toasts>
      <h1>Experience</h1>
      <Featured></Featured>
      <ListGroup></ListGroup>
      <Message></Message>
      <Card></Card>
    </div>
  );
}
export default App;
