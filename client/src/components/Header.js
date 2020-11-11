import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href={'/auth/google'} style={{color:'#757575'}}>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="3" style={{ margin: '0 10px' }}>
            <Link to="/blogs" style={{color:'#757575'}}>My Blogs</Link>
          </li>,
          <li key="2">
            <a href={'/auth/logout'} style={{color:'#757575'}}>Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="N/A transparent" style={{ boxShadow:'none', }}>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/blogs' : '/'}
            className="left brand-logo"
            style={{ marginLeft: '10px', color:'#263238',letterSpacing:'3px'}}
          >
            BLOGGY
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
