import React, {Component} from "react";
import {Image, Modal, Button} from 'react-bootstrap';


class  InfobipViewModal extends Component {

  constructor(props) {
    super(props);
  }


  handleClose = () => {
    this.props.onIfbClose({type:'view'});
  }


  render() {
    let cardViewData = this.props.data;
    return (
      <Modal show={this.props.onIfbShow} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cardViewData.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={cardViewData.bgImage} thumbnail />
          {cardViewData.description}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default InfobipViewModal;
