import React from 'react';

class Playlist extends React.Component {
    render() {
        return (
                <p><a href={this.props.playlist.uri} target="_blank" rel="noopener noreferrer">{this.props.playlist.name}</a></p>
        )
    }
}

export default Playlist;