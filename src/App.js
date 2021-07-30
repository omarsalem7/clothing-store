import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Route, Switch } from "react-router-dom";
import Header from "./componenets/Header/Header";
import Contact from "./componenets/contact/Contact";
import SignIn_SignUp_Page from "./pages/SignIn_SignUp_Page/SignIn_SignUp_Page";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);
        useRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            }
            // () => {
            //   console.log(this.state);
            // }
          );
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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
          <Route path="/sign-in" component={SignIn_SignUp_Page} />
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
