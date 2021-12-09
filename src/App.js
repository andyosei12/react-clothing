import React from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import "./App.css";

// info: Components and Pages Import
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Signin from "./pages/signin/Signin.page";
import Header from "./components/header/Header";
import { onSnapshot } from "@firebase/firestore";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfile(authUser);

        onSnapshot(userRef, (snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              console.log(this.state.currentUser);
            }
          );
        });
      } else {
        this.setState({ currentUser: authUser });
      }
      // console.log(user);
      // createUserProfile(user);
      // this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </>
    );
  }
}

export default App;
