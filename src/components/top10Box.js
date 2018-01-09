import React from 'react';
import Top10List from "./top10List"


class Top10Box extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      top10: {},
    };
  }

  componentDidMount() {
    const url = "https://rss.itunes.apple.com/api/v1/us/apple-music/hot-tracks/all/10/explicit.json"
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if(request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);

        this.setState({top10: data.feed.results});
      }
    });
    request.send();
  }

  render(){
    return (
      <div>
        <h2>Top 10</h2>
        <Top10List top10={this.state.top10}/>
      </div>
    );
  }
}

export default Top10Box;
