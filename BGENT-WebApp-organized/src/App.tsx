import {FC, ReactElement} from "react";
import { Provider } from "react-redux";
import Landing from "src/screens/Landing";
import store from "src/store";

const App:FC = () : ReactElement => {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App