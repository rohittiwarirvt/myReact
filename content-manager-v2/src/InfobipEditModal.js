import React, {Component} from "react";
import {Image, Modal, Button} from 'react-bootstrap';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Thumbnail} from 'react-bootstrap';


class InfobipEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }

  handleClose = () => {
    this.props.onIfbClose({type:'edit'});
  }

  getValidationState = () =>  {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleInputChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });

  }

  handleSave = () => {
    console.log(this.state);
  }
  render() {

    let cardViewData = this.state;
    return (
    <Modal show={this.props.onIfbShow} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {cardViewData.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <form>
       <FormGroup controlId="formBasicImage">
         <Image src={cardViewData.bgImage} thumbnail />
       </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Header </ControlLabel>
          <FormControl
            type="text"
            value={cardViewData.header}
            name="header"
            onChange={this.handleInputChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Description</ControlLabel>
          <FormControl name="description" value={cardViewData.description} componentClass="textarea" placeholder="textarea" onChange={this.handleInputChange} />
        </FormGroup>
       </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.handleSave} >Save </Button>
        <Button onClick={this.handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}

export default InfobipEditModal;
