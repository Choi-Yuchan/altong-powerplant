import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PlantKR from './components/PlantKR';
import PlantEN from './components/PlantEN';
import PlantJA from './components/PlantJA';
import PlantZH from './components/PlantZH';


function App() {

  return (
      <BrowserRouter> 
        <Route exact path="/" component={PlantKR}></Route>
        <Switch>
          <Route path="/en" component={PlantEN}></Route>
          <Route path="/ja" component={PlantJA}></Route>
          <Route path="/zh" component={PlantZH}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
