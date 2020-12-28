import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

import './LoaderStyle.scss';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ loading: newProps.showLoader });
  }

  render() {
    const { loading } = this.state;
    const loaderClass = (loading === true) ? 'loaderContainer' : 'loaderHiddenContainer';
    return (
      <div className={loaderClass}>
        <div className="loadingImageContainer">
          <ScaleLoader
            size={60}
            color="#FF5000"
            loading={loading}
            opacity="0.7"
          />
          <div className="title" />
        </div>
      </div>
    );
  }
}

export default Loader;
