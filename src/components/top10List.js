import React from "react";
import Song from "./Song";

class Top10List extends React.Component {
  render (){
    if(!this.props.top10) {return null};

    const songNodes = this.props.top10.map(song => {
      return (
        <Song artist={song.artistName} key={song.artistId} title={song.name}/>
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
