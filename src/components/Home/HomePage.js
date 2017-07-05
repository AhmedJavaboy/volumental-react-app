import React from 'react';

// Since this component is simple and static, there's no parent container for it.
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2>Dropdowns</h2>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </div>
      </div>

    );
  }
}

export default HomePage;
