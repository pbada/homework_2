import React,{ Component, Fragment } from 'react';

class Birthday extends Component {
  render() {
    return(
      <Fragment>
        <section className="section birthday_section">
          <div className="row_group">
            <h3 className="join_title"><label htmlFor="year">생년월일</label></h3>
            <div className="join_wrap  birthday_content">
              <div className="birthday_year">
                <select  id="year" className="sel" aria-label="년">
                  <option value="">년</option>
                  <option value="1987">1987 </option>
                </select>
              </div>
              <div className="birthday_month">
                <select className="sel" aria-label="월">
                  <option value="">월</option>
                  <option value="01">1 </option>
                </select>
              </div>
              <div className="birthday_day">
                <select className="sel" aria-label="일">
                  <option value="">일</option>
                  <option value="01">1 </option>
                </select>
              </div>
            </div>
            <p className="warning_comment" id="birthdayMassege" aria-live="assertive"></p>
          </div>
        </section>
      </Fragment>
    )
  };
};

export default Birthday;