import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { compose } from 'recompose';
import Loader from '../../../shared/components/Loader/Loader';
import container from '../container';
import Category from '../../Category/components/Category';
import 'antd/dist/antd.css';
import ToastComponent from '../../../shared/components/ToastComponent/ToastComponent';


class App extends React.Component {

  render() {
    const { history, systemData } = this.props;

    return (
      <div className="App">
        <Loader showLoader={systemData.showLoader} />
        <ToastComponent />
        <Switch>
          <Route path="/category" exact 
          render={() => {
            return (
                <Category history={history} store={this.props.store}/>
            );
          }} />
          <Redirect to={{ pathname: '/category' }} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  userObject: PropTypes.any,
  systemData: PropTypes.any,
  history: PropTypes.object,
};

export default compose(
  container,
  withRouter,
)(App);
