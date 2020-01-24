import React,{ Component, Fragment } from 'react';

class Id extends Component {
  render() {
    return(
      <Fragment>
        <section className="section id_section">
          <div className="row_group">
            <h3 className="join_title blind"><label htmlFor="id">아이디</label></h3>
            <div className="join_wrap id_cotent">
              <input type="text" id="id" name="id" className="inp" placeholder="아이디" maxLength="20" />
              <p className="warning_comment" aria-live="assertive"></p>
            </div>
          </div>
          <div className="row_group">
            <h3 className="join_title blind"><label htmlFor="password">비밀번호</label></h3>
            <div className="join_wrap passwrod_content" >
              <input type="password" id="password" name="password" className="inp"  placeholder="비밀번호" aria-describedby="passwordMassege" maxLength="20" />
              <p className="warning_comment"  aria-describedby="passwordMassege" aria-live="assertive"></p>
            </div>
        </div>
        </section>
      </Fragment>
    )
  };
};

export default Id;