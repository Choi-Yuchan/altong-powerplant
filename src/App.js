import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import TopNavi from './components/header/TopNavi';
import Profile from './components/profile/Profile';
import ListNav from './components/listNav/ListNav';
import Alog from './routes/Alog';
import Nest from './routes/Nest';
import Activity from './routes/Activity';
import Section from './routes/Section';
import { Font } from './style/Font';

function App() {
  return (
    <Wrap>
      <Font/>
      <TopNavi/>
      <Profile/>
      <ListNav/>
      <Switch>
        <Route exact path="/" component={Section}/>
        <Route path="/alog" component={Alog}/>
        <Route path="/nest" component={Nest}/>
        <Route path="/activity" component={Activity}/>
      </Switch>
    </Wrap>
  );
}

const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  max-width: 800px;
  margin: 0 auto;
`;
export default App;
