import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);


    const album = album.Data.find( album => {
      return album.slug === this.props.match.params.slug
    });
  }
  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src ={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.title}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            <section className='library'>
              {
                this.state.album.songs.map( (album, songs, index) =>
                  <Link to={`/album/${album.slug.songs}`} key={index}>
                    <tr id="song1">{album.songs}</tr>
                    <tr id="song2">{album.songs}</tr>
                    <tr id="song3">{album.songs}</tr>
                    <tr id="song4">{album.songs}</tr>
                    <tr id="song5">{album.songs}</tr>
                  </Link>
                )
              }
            </section>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Album;
