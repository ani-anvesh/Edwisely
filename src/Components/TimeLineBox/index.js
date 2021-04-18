import "./timelinebox.scss";

const index = (props) => {
  console.log(props.education);
  return (
    <div className="timeLineBox">
      <div className="heading d-flex align-items-center">
        <div
          className="headingLogo"
          style={{
            backgroundImage: `url(${props.icon})`,
            backgroundSize: "57px",
          }}
        ></div>
        <div className="headingText">{props.heading}</div>
      </div>
      {props.education !== null && props.education !== undefined
        ? props.education.map((time, index) => (
            <div key={index} className="timeLine d-flex align-items-stretch">
              <div className="timeLineDate">
                {time.from_year + " " + "-" + " " + time.to_year}
              </div>
              <div>
                <div className="timelineLogo d-flex align-items-center justify-content-stretch flex-column">
                  <div className="timelineLogoC"></div>
                  <div className="timelineLogoL"></div>
                </div>
              </div>
              <div className="timelineText">
                <div className="timelineheading d-flex align-items-center">
                  <div
                    className="timelineTextLogo"
                    style={{
                      backgroundImage: `url(${props.College})`,
                      backgroundSize: "25px",
                    }}
                  ></div>
                  <div className="timelineTextheading">{time.institute}</div>
                </div>
                <div className="timelineTextside">
                  <div className="timelineTextsideHeading">{time.degree}</div>
                  <div className="timelineTextsideGrade">{time.grade}</div>
                  <div className="timelineTextsideBody">{time.description}</div>
                  <div className="timelineThumb">
                    {time.files.map((img, i) => (
                      <a key={i} target="_blank" href={img.file_url}>
                        <img
                          className="timelineThumbimage"
                          src={img.thumb_url}
                          alt="Forest"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        : props.experience !== null && props.experience !== undefined
        ? props.experience.map((time, index) => (
            /* company: "hahsna"
description: "nabana"
files: []
from_year: "Apr 2018"
id: 472
is_current: 0
location: "nsnam"
title: "hahaha"
to_year: "Apr 2021"
type: "Full Time" */
            <div key={index} className="timeLine d-flex align-items-stretch">
              <div className="timeLineDate">
                {time.from_year + " " + "-" + " " + time.to_year}
              </div>
              <div>
                <div className="timelineLogo d-flex align-items-center justify-content-stretch flex-column">
                  <div className="timelineLogoC"></div>
                  <div className="timelineLogoL"></div>
                </div>
              </div>
              <div className="timelineText">
                <div className="timelineheading d-flex align-items-center">
                  <div
                    className="timelineTextLogo"
                    style={{
                      backgroundImage: `url(${props.College})`,
                      backgroundSize: "25px",
                    }}
                  ></div>
                  <div className="timelineTextheading">{time.title}</div>
                </div>
                <div className="timelineTextside">
                  <div className="timelineTextsideHeading">{time.company}</div>
                  <div className="timelineTextsideGrade">{time.location}</div>
                  <div className="timelineTextsideBody">{time.description}</div>
                  <div className="timelineThumb d-flex align-items-center">
                    {time.files !== undefined
                      ? time.files.map((img, i) => (
                          <a key={i} target="_blank" href={img.file_url}>
                            <img
                              className="timelineThumbimage"
                              src={img.thumb_url}
                              alt="Forest"
                            />
                          </a>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default index;
