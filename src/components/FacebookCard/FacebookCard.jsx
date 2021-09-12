import React from "react";
import { FacebookBtn } from "./FacebookBtn";

export class FacebookCard extends React.Component {
  render() {
    const { name, surname, post, avatarUrl, reply, university, likes, date } =
      this.props;
    return (
      <div>
        <h2>Task 1</h2>
        <div className="facebookCard">
          <div className="userAvatar">
            <img src={avatarUrl} width={70} />
          </div>
          <div className="cardDescription">
            <div className="cardTitle">
              <p className="user-info">
                {name} {surname}
              </p>
              <p className="user-uni">{university}</p>
            </div>
            <p className="user-post">{post}</p>
            <div className="FacebookBtn">
              <FacebookBtn like={likes} />
              <FacebookBtn reply={"Reply"} />
              <p className="facebook-date">{date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
