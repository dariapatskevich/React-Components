import React from "react";

export class RabotaByCard extends React.Component {
  render() {
    const { vacancy, company, city, post, submit, date } = this.props;
    return (
      <div>
        <h2>Task 3</h2>
        <div className="RabotaBy">
          <div className="RabotaBy__header">{vacancy}</div>
          <div className="RabotaBy__body">
            <div className="RabotaBy__body-info">
              {company}
              <p>{city}</p>
            </div>
            <div className="RabotaBy__body-main">{post}</div>
          </div>
          <div className="RabotaByBtn">
            <button className="submit-btn">Откликнуться</button>
            <p className="date">{date}</p>
          </div>
        </div>
      </div>
    );
  }
}
