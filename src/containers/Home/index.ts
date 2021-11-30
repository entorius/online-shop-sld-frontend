import Home from './Home'

import { connect } from 'react-redux'
import { getUser } from '../../state/User/userActions';


const mapStateToProps = (state: any) => ({
    user: state.user,
  });

const mapDispatchToProps = {
    getUser: getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);