import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      volume: 0.5,
      isPlaying: false
    };


    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    this.audioElement.volume = this.state.volume;

  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      }
    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListener.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick () {
    const nowIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const nextIndex = Math.min(4, nowIndex + 1);
    const nextSong = this.state.album.songs[nextIndex];
    this.setSong(nextSong);
    this.play();
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  formatTime(time) {
    return time
      ? `${Math.floor(time / 60)}:${Number((time % 60) / 100)
        .toFixed(2)
        .substr(2, 3)}`
      :"-:--";
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume : newVolume });
  }

  handleVolumeUp(e) {
    if (this.state.volume < 1) {
      const newVolume = this.state.volume + 0.1;
      this.audioElement.volume = Math.min(newVolume, 1);
      this.setState({ volume: newVolume });
    } else this.setState({ volume: 1 });
  }

  handleVolumeDown(e) {
    if (this.state.volume > 0) {
      const newVolume = this.state.volume - 0.1;
      this.audioElement.volume = Math.max(0, newVolume);
      this.setState({ volume: newVolume });
    } else this.setState ({ volume: 0});
  }

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" alt={this.state.album.Title} src={this.state.album.albumCover} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.year} {this.state.album.label}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {this.state.album.songs.map( (song, index) =>
              <tr className="song" key={index} onClick={ () => this.handleSongClick(song)}
              onMouseEnter={() => this.setState({ isHovered: index + 1 })}
              onMouseLeave={() => this.setState({ isHovered: false })}>
                <td className="song-actions">
                  <button id="play-pause">
                    {this.state.currentSong.title === song.title ?
                    (<span className={this.state.isPlaying ? "ion-pause" : "ion-play"} />) :
                    this.state.isHovered === index +1 ? (<span className="ion-play" />) :
                    (<span className="song-number">{index + 1}</span>)}
                  </button>
                </td>
                <td className="song-title">{song.title}</td>
                <td className="song-duration">{this.formatTime(song.duration)} </td>
              </tr>
            )}
          </tbody>
        </table>
        <PlayerBar isPlaying={this.state.isPlaying} currentSong={this.state.currentSong}
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.formatTime(this.audioElement.currentTime)}
          duration={this.formatTime(this.audioElement.duration)}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={(e) => this.formatTime(this.handleTimeChange(e))}
          handleVolumeChange={(e) => this.handleVolumeChange(e)}
          handleVolumeUp={(e) => this.handleVolumeUp(e)}
          handleVolumeDown={(e) => this.handleVolumeDown(e)}
        />
      </section>
    );
  }
}

export default Album;
