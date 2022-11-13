import React, {useEffect} from "react"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import SearchComponent from "./pages/Search/Search"
import Rent from "./pages/Rent/Rent"
import Resources from "./pages/Resources/Resources"
import ManageProperty from "./pages/ManageProperty/ManageProperty"
import Sell from "./pages/Sell/Sell"
import Buy from "./pages/Buy/Buy"
import Favourites from "./pages/Favourites/Favourites"
import './App.css'
import reducer from './store/reducers/reducer'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import ScrollToTop from "./ScrollToTop"
const rootReducer = combineReducers({
  searchState: reducer,
})

const store = createStore(rootReducer)
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
      <Router>
      <ScrollToTop />
      <header>
        <Header />
        </header>
        <body>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rent" component={Rent} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/manage-property" component={ManageProperty} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/search" component={SearchComponent} />
          <Route exact path="/favourites" component={Favourites} />
        </Switch>
        </body>
        <footer>
        <Footer />
        </footer>
        
      </Router>
      </div>
    </Provider>
  );
}

export default App
