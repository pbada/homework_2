import React,{ Component, Fragment } from 'react';

class Terms extends Component {
  render() {
    return(
      <Fragment>
        <section className="section terms_section">
            <div className="row_group">
              <h3 className="join_title blind">약관</h3>
              <div className="join_terms terms_content" >
                <input type="checkbox" id="terms" name="termsl" value="Y" className="chk" />
                <label htmlFor="terms">모든 약관 내용에 동의 합니다.<span className="terms_choice terms_no">(선택)</span></label>
              </div>
          </div>
        </section>
      </Fragment>
    )
  };
};

export default Terms;