import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import TopNavi from './header/TopNavi';
import Profile from './profile/Profile';
import ListNav from './listNav/ListNav';
import Alog from '../routes/Alog';
import Nest from '../routes/Nest';
import Activity from '../routes/Activity';
import Section from '../routes/Section';
import { Font } from '../style/Font';
import { useEffect } from 'react';
import i18n from '../config/lang/i18n';

const PlantKR = ({ match }) => {

    useEffect(() => {
        i18n.changeLanguage('ko')
    },[]);

    return(
        <Wrap>
            <Font/>
            <TopNavi/>
            <Profile/>
            <ListNav match={match}/>
            <Switch>
                <Route exact path={`${match.path}`} component={Section}/>
                <Route path={`${match.path}/alog`} component={Alog}/>
                <Route path={`${match.path}/nest`} component={Nest}/>
                <Route path={`${match.path}/activity`} component={Activity}/>
            </Switch>
        </Wrap>
    )
}

const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  max-width: 800px;
  margin: 0 auto;
  ::-webkit-scrollbar{
    display:none;
  }
`;
export default PlantKR;