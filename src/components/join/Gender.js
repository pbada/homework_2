import React,{ Component, Fragment } from 'react';

class Gender extends Component {
  render() {
    return(
      <Fragment>
        <section className="section gender_section">
          <h2 className="headline blind">성별</h2>
          <div className="row_group">
              <div className="join_wrap female_cotent">
                <input className="radio" id="female" name="gender" type="radio"  value="female" />
                <label htmlFor="female">여성</label>
              </div>
              <div className="join_wrap male_cotent">
                <input className="radio" id="male" name="gender" type="radio"  value="male" />
                <label htmlFor="male">남성</label>
              </div>
          </div>
        </section>
      </Fragment>
    )
  };
};

export default Gender;