import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    Accounts.createUser({ email, password }, error => {
      if (error) { this.setState({ error: error.reason }); }
    });
  }

  render() {
    return (
      <div className="box">
        <div className="logo-bar"></div>
        <h1 className="box__header">注册</h1>
        <div className="box__box">
          <form onSubmit={this.handleSubmit.bind(this)} className="form">
            <input className="form__control" type="email" name="email" placeholder="电子邮件地址" />
            <input className="form__control" type="password" name="password" placeholder="密码" />
            <button className="button button__fluid" type="submit">注册</button>
          </form>
          <div className="box__box__content">
            已经有账号了？
            <Link to="/signin">点击登录</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
