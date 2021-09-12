import React from "react";

export class TumblrCard extends React.Component {
  render() {
    const {
      symbols,
      description,
      author,
      avatarUrl,
      ask,
      home,
      theme,
      archieve,
    } = this.props;
    return (
      <div>
        <h2>Task 4</h2>
        <div className="TumblrCard">
          <div className="TumblrCard-header">
            <img className="userAvatar" src={avatarUrl} width={70} />
            <p className="symbols">{symbols}</p>
            <p className="description">{description}</p>
            <p className="author">{author}</p>
          </div>
          <div className="TumblrCard-buttons">
            <div className="btn-info">
              <button className="ask">{ask}</button>
              <button className="home">{home}</button>
            </div>
            <div className="btn-main">
              <button className="archieve">{archieve}</button>
              <button className="theme">{theme}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
