// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  changeState = () => {
    this.setState({isClicked: true})
  }

  render() {
    let authButton
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    if (isClicked === false) {
      authButton = (
        <div className="inner-container">
          <h1 className="main-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="list-prop">
            <li>
              <div className="container-el">
                <button
                  type="submit"
                  className="custom-btn"
                  onClick={this.changeState}
                >
                  <img
                    className="img"
                    src={emojis[0].imageUrl}
                    alt={emojis[0].name}
                  />
                </button>
                <p>{emojis[0].name}</p>
              </div>
            </li>
            <li>
              <div className="container-el">
                <button
                  type="submit"
                  className="custom-btn"
                  onClick={this.changeState}
                >
                  <img
                    className="img"
                    src={emojis[1].imageUrl}
                    alt={emojis[1].name}
                  />
                </button>
                <p>{emojis[1].name}</p>
              </div>
            </li>
            <li>
              <div className="container-el">
                <button
                  type="submit"
                  className="custom-btn"
                  onClick={this.changeState}
                >
                  <img
                    className="img"
                    src={emojis[2].imageUrl}
                    alt={emojis[2].name}
                  />
                </button>
                <p>{emojis[2].name}</p>
              </div>
            </li>
          </ul>
        </div>
      )
    } else {
      authButton = (
        <div className="inner-container">
          <img className="heart-img" src={loveEmojiUrl} alt="love emoji" />
          <h1 className="main-heading">Thank you!</h1>
          <p className="para">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }
    return <div className="bg-container">{authButton}</div>
  }
}

export default Feedback
