import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Switch, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <>
    <Navbar/>
    <CountriesList />
      <Switch>
        <Route exact path="/countries/:id" component={CountryDetails} />
      </Switch>
    </>
  );
}

export default App;
