import React from 'react';
import './Advice.css';
import Playlist from '../Playlist/Playlist';

class Advice extends React.Component {
    render() {
        return (
            <div id="advice" className="container">
                <div className="row text-center">
                    <div className="col-sm-12">
                        <h3>You are {this.props.emotion}? Try this:</h3>
        <p>Spotify Playlists for this mood</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div id="playlists" className="col-sm-6">
                    {this.props.playlists.map(playlist => {
                    return <Playlist key={playlist.id} playlist={playlist} />;
                    })}
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Advice;