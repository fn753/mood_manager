import React from 'react';
import './Emotions.css';

//const emotions = ['angry', 'happy', 'sad', 'frustrated', 'anxious', 'emotionless', 'demotivated', 'stressed'];

class Emotions extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmotionChange = this.handleEmotionChange.bind(this);
    }

    handleEmotionChange(e) {
        this.props.onEmotionChange(e.target.value);
    }

    render() {
        return (
        <div id="emotions" className="container">
        <div className="row emotion-row">
            <div className="col-3">
              <button type="button" className="btn btn-outline-light" value="angry" onClick={this.handleEmotionChange}>angry</button>
            </div>
            <div className="col-3">
               <button type="button" className="btn btn-outline-light" value="happy" onClick={this.handleEmotionChange}>happy</button>
            </div>
            <div className="col-3">
               <button type="button" className="btn btn-outline-light" value="sad" onClick={this.handleEmotionChange}>sad</button>
            </div>
            <div className="col-3">
               <button type="button" className="btn btn-outline-light" value="frustrated" onClick={this.handleEmotionChange}>frustrated</button>
            </div>
        </div>
        <div className="row emotion-row">
            <div className="col-3">
            <button type="button" className="btn btn-outline-light" value="anxious" onClick={this.handleEmotionChange}>anxious</button>
            </div>
            <div className="col-3">
               <button type="button" className="btn btn-outline-light" value="emotionless" onClick={this.handleEmotionChange}>emotionless</button>
            </div>
            <div className="col-3">
               <button type="button" className="btn btn-outline-light" value="demotivated" onClick={this.handleEmotionChange}>demotivated</button>
            </div>
            <div className="col-3">
               <button type="button" className="btn btn-outline-light" value="stressed" onClick={this.handleEmotionChange}>stressed</button>
            </div>
         </div>
        </div>
        )
    }
}

export default Emotions;