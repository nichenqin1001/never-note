import React, { Component } from 'react';
// components
import FeatureHeader from './FeatureHeader';
import FeatureMain from './FeatureMain';

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <FeatureHeader />
        <FeatureMain />
      </div>
    );
  }
}

export default Feature;