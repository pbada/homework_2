import React, { Component, Fragment } from 'react';
import './css/join.scss';
import Id from './components/join/Id';
import Gender from './components/join/Gender';
import Birthday from './components/join/Birthday';
import Phone from './components/join/Phone';
import Terms from './components/join/Terms';


class App extends Component {  
  render() {
    return(
      <Fragment>
        <div className="container">
          <h2 className="headline">회원가입</h2>
          <Id />
          <Gender />
          <Birthday />
          <Phone />
          <Terms />
          <div className="join_button_wrap">
            <button type="button" className="join_button"><span>가입하기</span></button>
          </div>
        </div>
      </Fragment>
    )
  }
};

export default App;