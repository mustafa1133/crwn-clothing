import React from 'react';
import './pages/homepage/homepage.styles.scss'
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './Components/header/header-component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors';
class App extends React.Component {

  unsubscribeFromAuth = null // used as a placeholder for unsubscribing

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

componentWillUnmount(){
  this.unsubscribeFromAuth(); // closes the subscription for memory leaks
}

  render(){
    return (
      <div>
        <Header/>
        <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/> 
      <Route exact path='/checkout' component={CheckoutPage}/>
      <Route exact path='/signin' 
      render= {() => this.props.currentUser ? (<Redirect to='/'/>) :   // if the current user is logged in we redirect to home page else we direct to sign page
      (<SignInAndSignUpPage/>
      )}
      />
  
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({ // first argument is the store state
  currentUser: selectCurrentUser// setcurrent user is a method from our actions user is the payload
})
const mapDispatchToProps = dispatch => ({ // used to fire actions to the store
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
