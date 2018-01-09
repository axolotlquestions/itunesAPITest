import React from "react";
import Song from "./Song";

class Top10List extends React.Component {
  render (){
    if(!this.props.top10) {return null};
    const songNodes = this.props.top10.map(song) => {
      return (
        <song artist={song.artistName} key={song.artistId}/>
      )
    })
    return(
      <div className="song-list">
        {songNodes}
      </div>
    )
  }
}


export default Top10List
