
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };     // access to state.

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView style={styles.containerStyle}>
                {this.renderAlbums()}
            </ScrollView>
            
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white'
    },

    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
        backgroundColor: 'white',

    },

    textStyle: {
        fontSize: 25,
        color: 'skyblue'
    }
};

export default AlbumList;
