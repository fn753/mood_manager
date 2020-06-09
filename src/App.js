import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Emotions from './Components/Emotions/Emotions';
import Advice from './Components/Advice/Advice';
import Spotify from './util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emotion: '',
      playlists: [{
        id: '',
        name: '',
        uri: ''
      }]
    };

    this.changeEmotion = this.changeEmotion.bind(this);
    this.playlistSearch = this.playlistSearch.bind(this);
  }

  changeEmotion(emotion) {
    this.setState({ emotion: emotion });
    this.playlistSearch(emotion);
  }

  playlistSearch(emotion) {
    let searchTerm;
    if (emotion === 'angry') {
      searchTerm = 'chill';
    } else if (emotion === 'happy') {
      searchTerm = 'party';    
    } else if (emotion === 'sad') {
      searchTerm = 'classical';    
    } else if (emotion === 'frustrated') {
      searchTerm = 'summer';    
    } else if (emotion === 'anxious') {
      searchTerm = 'edm_dance';    
    } else if (emotion === 'emotionless') {
      searchTerm = 'mood';    
    } else if (emotion === 'demotivated') {
      searchTerm = 'workout';    
    } else if (emotion === 'stressed') {
      searchTerm = 'wellness';    
    };
    Spotify.searchPlaylists(searchTerm).then(searchResults => this.setState({ playlists: searchResults }));
    //Spotify.getCategoryList();
  }

  render() {
    return (
      <div className="App">
        {this.state.emotion ? null: <Header />}

        <Emotions onEmotionChange={this.changeEmotion}/>

        {this.state.emotion ? <Advice emotion={this.state.emotion} playlists={this.state.playlists}/> : null}

        <footer>
          &copy; 2020 Franziska Nelson
        </footer>
      </div>
    );
  }
}

export default App;
