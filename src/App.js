import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./componenets/Header/Header";
import Contact from "./componenets/contact/Contact";
import SignInSignUpPage from "./pages/SignIn_SignUp_Page/SignIn_SignUp_Page";
import { createUserProfileDocument, auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelector";
import checkOutPage from "./pages/checkOut-Page/checkOutPage"

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);
        useRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/checkout" component={checkOutPage} />
          <Route
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

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
