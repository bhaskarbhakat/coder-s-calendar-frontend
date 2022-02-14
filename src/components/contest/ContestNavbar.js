import React from "react";
import "./contestitem/item.css";
export default function ContestNavbar() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="columnTime" style={{ fontSize: 10 }}>
            <p>Start Time</p>
          </div>
          <div className="columnTime" style={{ fontSize: 10 }}>
            <p>End Time</p>
          </div>
          <div className="columnTime" style={{ fontSize: 10 }}>
            <p>Duration</p>
          </div>
          <div className="column" style={{ fontSize: 10 }}>
            <p>Contest Name</p>
          </div>
          <div className="columnSite" style={{ fontSize: 10 }}>
            <p style={{ fontSize: 10 }}>Site</p>
          </div>
        </div>
      </div>
    </>
  );
}
