import React, { Component } from 'react';
import FeatureHeader from './FeatureHeader';

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <FeatureHeader isAuthenticated={this.props.isAuthenticated} />
      </div>
    );
  }
}

export default Feature;