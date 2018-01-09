import React from 'react';

const Song = (props) => {
  return (
    <article className="song">
    <h2>{props.position}</h2> 
    <h2>{props.artist}</h2>
    <h3>{props.title}</h3>

  </article>)
}


export default Song
