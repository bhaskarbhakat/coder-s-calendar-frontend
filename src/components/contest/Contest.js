import React, { useState, useEffect } from "react";
import ContestItem from "./contestitem/ContestItem";
import axios from "axios";
import ContestNavbar from "./ContestNavbar";

export default function Contest(props) {
  const url = `https://kontests.net/api/v1/${props.site}`;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  if (data) {
    data.sort(function (a, b) {
      return new Date(a.start_time) - new Date(b.start_time);
    });
    return (
      <>
        <div className="container my-3">
          <ContestNavbar />
        </div>
        <div className="container my-3">
          {data.map((contest) => {
            if (contest.status === "CODING") {
              return (
                <ContestItem
                  color={"#dfffd9"}
                  name={contest.name}
                  url={contest.url}
                  start_time={contest.start_time}
                  end_time={contest.end_time}
                  duration={contest.duration}
                  site={contest.site==null?props.site:contest.site}
                />
              );
            } else {
              return (
                <ContestItem
                  name={contest.name}
                  url={contest.url}
                  start_time={contest.start_time}
                  end_time={contest.end_time}
                  duration={contest.duration}
                  site={contest.site==null?props.site:contest.site}
                />
              );
            }
          })}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container my-3">
        <ContestNavbar />
      </div>
    </>
  );
}
