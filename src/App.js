import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import "./App.css";

// info: Components and Pages Import
import Homepage from "./pages/homepage/Homepage";
import CheckoutPage from "./pages/checkout/Checkout";
import Shop from "./pages/shop/Shop";
import Signin from "./pages/signin/Signin.page";
import Header from "./components/header/Header";
import { onSnapshot } from "@firebase/firestore";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfile(authUser);

        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });

        console.log(this.state);
      } else {
        setCurrentUser(authUser);
        // addCollectionAndDocuments("collections", collectionsArray);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to={"/"} /> : <Signin />
            }
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    // collectionsArray: selectCollectionsForPreview,
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);
