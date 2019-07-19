import React from 'react';
import { timeDifference } from '../utils/time';

export default class RecentTracks extends React.Component {
  constructor(props) {
    super(props);

    if(typeof(fetch) !== "undefined"){
      fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=joegandy1&api_key=6900d6827e2c0d6248e54a385fe242b6&format=json')
        .then(response => response.json())
        .then(data => this.setState({tracks: data.recenttracks.track}));
    }

    this.state = {
      tracks: []
    };
  }

  render() {
    let tracks = this.state.tracks;
    if(tracks.length < 1) return <></>
    return <div className={'_recent_tracks ' + (tracks.length > 0 ? 'load' : '')}>
        <h3>What I've been listening too</h3>
        {tracks.map(function (track, i) {
          if (i > 9) return;
          let now_playing = track['@attr'] && track['@attr']['nowplaying'];
          return <a key={i} href={track.url} rel="noopener" target="_blank">
            <div className="_track">
              <div className="_image">
                <img src={track.image[0]['#text']} />
              </div>
              <p className="_track_artist">{track.artist['#text']}</p>
              <p className="_track_name">{track.name}</p>
              {now_playing ?
                <p className='_play_status _now_playing'>Playing now</p> :
                <p
                  className='_play_status _played'>{timeDifference(new Date(), new Date(track.date.uts * 1000))}</p>}
            </div>
          </a>;
        })}
      </div>;
    }
}