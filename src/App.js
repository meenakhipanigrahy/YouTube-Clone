import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
