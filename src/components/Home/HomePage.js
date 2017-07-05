import React from 'react';
import Header from '../Common/Header';

// Since this component is simple and static, there's no parent container for it.
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { objcolor: 0xff0000 };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(event) {
    this.setState({ objcolor: event.target.value });
    event.preventDefault();
  }

  render() {
    return (
      <div >

        <div className="container">

          <h2>Dropdowns</h2>
          {this.state.objcolor + ""}
          <select value={this.state.objcolor} onChange={this.changeColor}>
            <option value="0x00ff00">Green</option>
            <option value="0xff0000">Red</option>
            <option value="0x0000ff0">Blue</option>
            <option value="0xfffffff">Wight</option>
          </select>

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
      </div>

    );
  }
}

export default HomePage;
