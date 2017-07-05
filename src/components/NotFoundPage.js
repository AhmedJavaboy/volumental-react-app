import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="container" id="page-not-found">
 
      <div className="plate">
        <p className="shadow text1">Whooopsie !</p>
        <p className="shadow text2 text-danger">404</p>
        <p className="shadow text3">Page Not Found</p>
        <br />
        <br />
        <Link to="/" className="btn btn-default script"> Take me Home <span className="glyphicon glyphicon-home"></span></Link>
      </div>


    </div>
  );
};

export default NotFoundPage;
