import React, {Component} from "react";
import sampleData from './mock-api.json'
import {Grid, Row} from 'react-bootstrap';
import CardContent from './CardContent.js';


class CardManager extends Component {
  constructor(props) {
    super(props);
    this.loadDefaultContent();
  }

  loadDefaultContent() {
    this.state = {contentData: sampleData};
    this.assetPrefix = {
      ico: "/assets/ico/",
      img: "/assets/img/"
    };
  }


  render() {
    const listItems = this.state.contentData.map((data, index) => {
       data.backgroundImage = data.backgroundImage.replace(/ /g, '%20');
       data.bgImage = `${this.assetPrefix.img}${data.backgroundImage}`;
       data.ico = `$(this.assetPrefix.ico}${data.icon}`;
      let cssObj = {
         "background-image": `url(${data.bgImage}`,
         "background-size": "contain"
      }
      data.cssObj = cssObj;
      return <CardContent key={index} cardData={data}/>;
    });
    return (
      <Grid>
        <Row className="show-grid">
          {listItems}
        </Row>
      </Grid>
    );
  }
}

export default CardManager;
