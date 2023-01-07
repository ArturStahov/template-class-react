import React, { Component } from 'react';
import './App.css';

import SectionContainer from './components/Container/Container';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionContainer title={'Test'}>
          <p>hello</p>
        </SectionContainer>
      </React.Fragment>

    );
  }
}

export default App;