import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    Meteor.loginWithPassword({ email }, password, error => {
      if (error) {
        this.setState({ error: error.reason });
      }
    });
  }

  render() {
    return (
      <div className="box">
        <div className="logo-bar"></div>
        <h1 className="box__header">登录</h1>
        <div className="box__box">
          <form onSubmit={this.handleSubmit.bind(this)} className="form">
            <input className="form__control" type="email" name="email" placeholder="电子邮件地址" />
            <input className="form__control" type="password" name="password" placeholder="密码" />
            <button className="button button__fluid" type="submit">登录</button>
          </form>
          <div className="box__box__content">
            还没有账号？
            <Link to="/signup">点击注册</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
