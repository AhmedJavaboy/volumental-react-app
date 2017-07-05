import React from 'react';
import ObjViewerpage from '../components/ObjViewer/ObjViewerPage';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ObjViewerActions';

class ObjViewer extends React.Component {


    constructor() {
        super()
        this.state = {  objcolor: 0xff0000 };
        this.changeColor = this.changeColor.bind(this);
        this.setBlue = this.setBlue.bind(this);
    }

    setBlue(){
        this.setState({ objcolor: 0xff00ff });
        this.props.actions.chanageModelColor(0xff00ff);
    }
    changeColor(event) {
        this.setState({ objcolor: event.target.value });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2>Dropdowns</h2>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                        <span className="caret"></span></button>
                        <ul className="dropdown-menu">
                            <li><a href="#" onClick={this.setBlue}>HTML</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">JavaScript</a></li>
                        </ul>
                    </div>
                </div>
                <center>
                    {this.state.objcolor+""}
                    <select value={this.state.objcolor} onChange={this.changeColor}>
                        <option value="0x00ff00">Green</option>
                        <option value="0xff0000">Red</option>
                        <option value="0x0000ff0">Blue</option>
                        <option value="0xfffffff">Wight</option>
                    </select>
                </center>
                <ObjViewerpage objcolor={this.props.modelColor} />

            </div>
        );
    };

}

ObjViewer.propTypes = {
  actions: PropTypes.object.isRequired,
  modelColor: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    modelColor : state.modelColorReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ObjViewer);
