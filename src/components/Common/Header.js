import React from 'react';
import { Link } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-default ">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/" >Volumental</Link>

        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div className="conatiner">
            <ul className="nav navbar-nav ">
              <li ><Link to="/ObjViewer" >View 3d Model</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Header;
