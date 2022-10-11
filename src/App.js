import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";

import ProductDetails from "./containers/ProductDetails";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import Preview from "./containers/Preview";
import Success from "./containers/Success";
import BasicDetails from "./containers/BasicDetails";
import Payment from "./containers/Payment";
import BillPage from "./containers/BillPage";


function App() {

  

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/basicdetails" component={BasicDetails} />
          <Route path="/payment" component={Payment} />
          <Route path="/billpage" component={BillPage} />
          <Route path="/preview" component={Preview} />
          <Route path="/success" component={Success} />
          <Route>404 Not Found!</Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
