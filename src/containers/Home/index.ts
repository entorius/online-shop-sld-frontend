import Home from './Home'
import { HomeProps } from "./Home";

import { connect } from 'react-redux'
import store from "../../state/store";
import { getUser } from '../../state/User/userActions';

const state = store.getState();

const HomePropsState: HomeProps = {
    user: state.user,
    getUser: getUser
}

function mapStateToProps(state: any) {
    return HomePropsState;
  }


export default connect(mapStateToProps)(Home);