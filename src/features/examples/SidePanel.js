import React from 'react';
import { Link } from 'react-router-dom';

export default function SidePanel() {
  return (
    <div className="examples-side-panel">
      <ul>
        <li>
          <Link to="/examples/login">Login</Link>
        </li>
        <li>
          <Link to="/examples/sign_with_material_ui">Sign In Side</Link>
        </li>
        <li>
          <Link to="/examples">Welcome</Link>
        </li>
        <li>
          <Link to="/examples/counter">Counter Demo</Link>
        </li>
        <li>
          <Link to="/examples/reddit">Reddit API Demo</Link>
        </li>
        <li>
          <Link to="/">Back to start page</Link>
        </li>
      </ul>
      <div className="memo">
        This is a Rekit feature that contains some examples for you to quick learn how Rekit works.
        To remove it just delete the feature.
      </div>
    </div>
  );
}
