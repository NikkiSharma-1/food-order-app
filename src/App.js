import { Fragment } from "react";
import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
function App() {
  return (
   <Fragment>
    <Header />
    <main>
    <Summary />
    </main>
   </Fragment>
  );
}

export default App;
