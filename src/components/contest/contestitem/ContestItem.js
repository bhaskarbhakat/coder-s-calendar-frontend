import React from "react";
import "./item.css";

export default function ContestItem(props) {
  var utcStartDate = props.start_time;
  let localStartDate = new Date(utcStartDate);

  var utcEndDate = props.end_time;
  let localEndDate = new Date(utcEndDate);

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
    return hDisplay + mDisplay;
  }

  return (
    <>
      <div className="card" style={{ background: props.color }}>
        <div className="row">
          <div className="columnTime" style={{ fontSize: 10 }}>
            <p>{localStartDate.toLocaleString()}</p>
          </div>
          <div className="columnTime" style={{ fontSize: 10 }}>
            <p>{localEndDate.toLocaleString()}</p>
          </div>
          <div className="columnTime" style={{ fontSize: 10 }}>
            <p>{secondsToHms(props.duration)}</p>
          </div>
          <div className="column" style={{ fontSize: 10 }}>
            <a href={props.url}>{props.name}</a>
          </div>
          <div className="columnSite" style={{ fontSize: 10 }}>
            <p style={{ fontSize: 10 }}>{props.site}</p>
          </div>
        </div>
      </div>
    </>
  );
}
