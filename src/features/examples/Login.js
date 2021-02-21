import React from 'react';
// import PropTypes from 'prop-types';
import { useLogin, useLogout } from './redux/hooks';

export default function Login() {
  const { loggedIn, login } = useLogin();
  const { logout } = useLogout();
  return (
    <div className="examples-login">
      {loggedIn ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}
    </div>
  );
};

Login.propTypes = {};
Login.defaultProps = {};
