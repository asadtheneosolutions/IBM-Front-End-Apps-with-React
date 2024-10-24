import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { AppProvider } from "./context/AppContext";
import CartValue from "./components/CartValue";
import ExpenseList from "./components/ExpenseList";
import Location from "./components/Location";

const App = () => {
  return (
    <AppProvider>
      <div className="container app-container">
        <h1 className="text-center  app-title">Shopping App</h1>

        <div className="row  app-section">
          <div className="col-md-6 ">
            <CartValue />
          </div>
          <div className="col-md-6 mb-4">
            <Location />
          </div>
        </div>

        <div className="app-divider "></div>

        <h3 className="text-center mt-4 app-section-title">Shopping Cart</h3>
        <div className="row mt-4">
          <div className="col-12">
            <ExpenseList />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
