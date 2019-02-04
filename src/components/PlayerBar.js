import React, { Component } from 'react';
import './PlayerBar.css';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <div className="button-player">
            <div id="previous" onClick={this.props.handlePrevClick}>
              <div className="ion-skip-backward"></div>
            </div>
            <div id="play-pause-2" onClick={this.props.handleSongClick} >
              <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
            </div>
            <div id="next" onClick={this.props.handleNextClick}>
              <span className="ion-skip-forward"></span>
            </div>
          </div>
          <div className="show-time">
            <section id="time-control">
              <div className="current-time">{this.props.currentTime}</div>
              <input
                type="range"
                className="seek-bar"
                value={(this.props.currentTime / this.props.duration) || 0}
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleTimeChange}
              />
            </section>
           </div>
           <div className="volume-slide">
             <section id="volume-control">
              <div id="volume-down" className="icon ion-volume-low">{this.props.currentVolume}</div>
              <input
                type="range"
                className="seek-bar"
                value={this.props.volume}
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleVolumeChange}
              />
              <div id="volume-up" className="icon ion-volume-high"></div>
            </section>
          </div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
