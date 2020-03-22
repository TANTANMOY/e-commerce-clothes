import React from "react";
import "./App.css";
import Home from "./pages/homepage/home";
import { Route, Switch,Redirect } from "react-router-dom";
import Shop from "./pages/homepage/shop/shop";
import Header from "./components/header/header";
import Signinsignup from "./pages/signin-signup";
import {
  auth,
  createUserProfileDocument
} from "./components/firebase/firebase.utlis";
import { connect } from "react-redux";
import { setCurrentUser } from "./components/redux/user/user.actions";

class App extends React.Component {
  unSubscriberFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount() {
    this.unSubscriberFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render= {() => this.props.currentUser ? (<Redirect to='/' />) : (<Signinsignup />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ( {user}) => ({
  currentUser : user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);