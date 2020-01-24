import React,{ Component, Fragment } from 'react';

class Phone extends Component {
  render() {
    return(
      <Fragment>
        <section className="section phone_section">
          <div className="row_group">
            <h3 className="join_title">전화</h3>
            <div className="join_wrap  phone_content">
              <div className="phone_wire">
                <select  className="sel" aria-label="010">
                  <option value="">010</option>
                  <option value="010">010 </option>
                </select>
              </div>
              <div className="phone_number">          
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="전화번호 입력" aria-label="전화번호 입력" className="inp" maxLength="16" />
                <label htmlFor="phoneNumber" className="blind"></label>
                <a href="#none" className="button_verify" id="btnSend" role="button"><span>인증</span></a>
              </div>
            </div>
            <p className="warning_comment"  aria-live="assertive"></p>
          </div>
        </section>
      </Fragment>
    )
  };
};

export default Phone;