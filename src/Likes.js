import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 124,
      updated: false,
    };
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false,
        };
      });
    }
  }

  render() {
    return (
      <div className="likes">
        <div onClick={this.updateLikes}>
          <FavoriteBorderIcon />
        </div>
        <div>{this.state.likes}</div>
      </div>
    );
  }
}

export default Likes;
