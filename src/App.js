import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PlantKR from './components/PlantKR';
import PlantEN from './components/PlantEN';
import PlantJA from './components/PlantJA';
import PlantZH from './components/PlantZH';
import DefaultApp from './components/DefaultApp';


function App() {

  return (
      <BrowserRouter> 
        <Route exact path="/" component={DefaultApp}></Route>
        <Switch>
          <Route path="/ko" component={PlantKR}></Route>
          <Route path="/en" component={PlantEN}></Route>
          <Route path="/ja" component={PlantJA}></Route>
          <Route path="/zh" component={PlantZH}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
