import "./assets/styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import OurServices from "./components/OurServices";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import { useUserContext } from "./userContext";
import { positions, Provider } from "react-alert";
import Alert from "./components/Alert";
import TableSelection from "./components/TableSelection";
import { Redirect } from "react-router-dom";
import Mycontext from "./CartContext";
import { useContext } from "react";
import OrderRequests from "./components/admin/OrderRequests";
import OrderItemsDetails from "./components/admin/OrderItemsDetails";
import ContactAdmin from "./components/admin/ContactAdmin";
import OrderSummary from "./components/OrderSummary";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import MenuActions from "./components/admin/MenuActions";
import AdminMenuAdd from "./components/admin/AdminMenuAdd";
import AdminEditMenu from "./components/admin/AdminEditMenu";
import AddSpecial from "./components/admin/AddSpecial";
import SpecialActions from "./components/admin/SpecialActions";
import SpecialEdit from "./components/admin/SpecialEdit";
import FeedbackResponses from "./components/admin/FeedbackResponses";

function App() {
  const { user, loading } = useUserContext();
  const options = {
    timeout: 2000,
    position: positions.TOP_CENTER,
  };
  const CartContext = useContext(Mycontext);
  return (
    <Provider template={Alert} {...options}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/select-table">
              <Navbar />
              <TableSelection />
            </Route>
            <Route path="/menu" exact>
              {CartContext.tableNumber ? (
                <Redirect to={`/menu/${CartContext.tableNumber}`} />
              ) : (
                <Redirect to="/select-table" />
              )}
            </Route>
            <Route path="/menu/:tableNumber">
              <Navbar />
              <Menu />
            </Route>
            <Route path="/services">
              <Navbar />
              <OurServices />
            </Route>
            <Route path="/my-order">
              <Navbar />
              <Cart />
            </Route>
            <Route path="/contact">
              <Navbar />
              <Contact />
            </Route>
            <Route path="/feedback" exact>
              <Navbar />
              <Feedback />
              <Footer />
            </Route>
            <Route path="/order-success">
              <Navbar />
              {CartContext.orderSuccessId ? (
                <OrderSummary />
              ) : (
                <Redirect to="/" />
              )}
            </Route>

            {/* Admin Routes */}
            {!loading && (
              <>
                <Route path="/admin-login" exact>
                  {!user ? <AdminLogin /> : <Redirect to="/admin-dashboard" />}
                </Route>
                <Route path="/admin-dashboard" exact>
                  {user ? <AdminDashboard /> : <Redirect to="/" />}
                </Route>
                <Route path="/admin/order-requests" exact>
                  {user ? <OrderRequests /> : <Redirect to="/" />}
                </Route>
                <Route path="/admin/order-requests/:orderId" exact>
                  {user ? <OrderItemsDetails /> : <Redirect to="/" />}
                </Route>
                <Route path="/admin/contact-us" exact>
                  {user ? <ContactAdmin /> : <Redirect to="/" />}
                </Route>

                <Route path="/admin/menu-actions" exact>
                  {user ? <MenuActions /> : <Redirect to="/" />}
                </Route>
                <Route path="/admin/menu-add" exact>
                  {user ? <AdminMenuAdd /> : <Redirect to="/" />}
                </Route>
                <Route path="/admin/edit-menu/:itemId" exact>
                  {user ? <AdminEditMenu /> : <Redirect to="/" />}
                </Route>
                <Route path="/admin/special-add" exact>
                  {user ? <AddSpecial /> : <Redirect to="/" />}
                </Route>
                <Route path="/admin/special-actions" exact>
                  {user ? <SpecialActions /> : <Redirect to="/" />}
                </Route>
                <Route path="/admin/edit-special/:itemId" exact>
                  {user ? <SpecialEdit /> : <Redirect to="/" />}
                </Route>
                <Route path="/admin/feedback-responses" exact>
                  {user ? <FeedbackResponses /> : <Redirect to="/" />}
                </Route>
              </>
            )}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
