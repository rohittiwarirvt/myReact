import React, {Component} from 'react';
import {Col, Image, Modal, Button} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import InfobipViewModal from './InfobipViewModal.js';
import InfobipEditModal from './InfobipEditModal.js';



class CardContent extends Component {

  constructor(props){
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      showEdit: false,
      showView: false,
      value: ""
    }
  }

  handleShow(state) {
    switch(state.type){
      case 'edit':
        this.setState({showEdit: true});
        break;
      case 'view':
        this.setState({showView: true});
        break;
      default:
    }
  }

  handleClose(state) {
    switch(state.type){
      case 'edit':
        this.setState({showEdit: false});
        break;
      case 'view':
        this.setState({showView: false});
        break;
      default:
    }
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }


  render() {
    let cardData = this.props.cardData;
    return (
            <Col sm={6} md={3}>
              <InfobipViewModal data={cardData} onIfbShow={this.state.showView} onIfbClose={this.handleClose} />
              <InfobipEditModal data={cardData} onIfbShow={this.state.showEdit} onIfbClose={this.handleClose} />

              <div className="card-wrapper" style={cardData.cssObj}>
                <div className="wrapper">
                  <h1>
                    {cardData.header}
                  </h1>
                  <p>
                    {cardData.description}
                  </p>
                  <Button bsStyle="primary" bsSize="xsmall" onClick={() =>this.handleShow({type:'view'})}>
                        view
                  </Button>
                  <Button bsStyle="primary" bsSize="xsmall" onClick={() =>this.handleShow({type:'edit'})}>
                     edit
                  </Button>
                </div>
              </div>
            </Col>

    )
  }
}


export default CardContent;
