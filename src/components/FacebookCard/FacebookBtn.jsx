import React from "react";

export class FacebookBtn extends React.Component {
  render() {
    const { like, reply } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <p>{like}</p>
        <p>{reply}</p>
      </div>
    );
  }
}
