import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Route, Switch } from "react-router-dom";
import Header from "./componenets/Header/Header";
import Contact from "./componenets/contact/Contact";
import SignIn_SignOut_Page from "./pages/SignIn_SignOut_Page/SignIn_SignOut_Page";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-in" component={SignIn_SignOut_Page} />
        </Switch>
      </div>
    );
  }
}
export default App;
// function App() {
//   const [currentUser, setUser] = useState(null);
//   useEffect(() => {
//     let unsubscribeFromAuth = null;
//     unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
//       setUser(user);
//       console.log(user);
//     });
//     return unsubscribeFromAuth();
//   }, []);
//   console.log(currentUser);
//   return (
//     <div className="App">
//       <Header currentUser={currentUser} />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/shop" component={ShopPage} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/sign-in" component={SignIn_SignOut_Page} />
//       </Switch>
//     </div>
//   );
// }

// export default App;
