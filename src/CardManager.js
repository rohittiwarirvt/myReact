import React, {Component} from 'react';



class ContentCard extends Component {

  render() {
    return (
    <div class="col-md-3  col-xs-6">
      <div className="card-wrapper">
        <div className="wrapper">
          <img alt="test" title="test" src="null"/>
          <h1>
            My Card
          </h1>
          <p>
            Explore the history of the classic Lorem Ipsum passage and generate your own text using any number of characters, words, sentences or paragraphs. Commonly used as placeholder text in the graphic and print industries, Lorem Ipsum's origins extend far back to a scrambled Latin passage from Cicero in the middle ages.
          </p>
        </div>
      </div>
    </div>
    )
  }
}


export default ContentCard;
