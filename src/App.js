import { Fragment } from "react";
import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
import Meal from "./Components/Meals/Meal";
function App() {
  return (
   <Fragment>
    <Header />
    <main>
    <Summary />
    <Meal />
    </main>
   </Fragment>
  );
}

export default App;
