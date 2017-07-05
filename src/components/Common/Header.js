import React from 'react';
import { Link } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const Header = () => {
  return (
    <div>
        <Link to="/ObjViewer" ></Link>
    </div>
  );
};

export default Header;
