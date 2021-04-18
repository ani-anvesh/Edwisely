import "./logoTextBox.scss";

const index = (props) => {
  var _ = require("lodash");

  console.log(props.skills);
  var skillsArray =
    props.skills !== undefined && props.skills !== null
      ? _.groupBy(props.skills, (skill) => skill.level)
      : null;

  console.log(skillsArray);
  return (
    <div className="logoTextBox">
      <div className="heading d-flex align-items-center">
        <div
          className="headingLogo"
          style={{
            backgroundImage: `url(${props.icon})`,
            backgroundSize: "63px",
          }}
        ></div>
        <div className="headingText">{props.heading}</div>
      </div>
      <div className="side">
        <div className="sideText">{props.sideText}</div>
        {props.video !== undefined ? (
          <div className="sideVideobox">
            <video
              width="100%"
              height="100%"
              poster={props.video.video_thumb}
              controls
            >
              <source src={props.video.resume_video} type="video/mp4" />
            </video>
          </div>
        ) : null}
        {props.languages !== undefined && props.languages !== null ? (
          <div className="d-flex align-items-center flex-wrap">
            {props.languages.map((lang, index) => (
              <div key={index} className="sideLanguages">
                <span>{lang.name}</span> |{" "}
                {lang.listening + lang.read + lang.speaking + lang.write > 15
                  ? "Fluent"
                  : lang.listening + lang.read + lang.speaking + lang.write <=
                      15 &&
                    lang.listening + lang.read + lang.speaking + lang.write > 8
                  ? "Intermediate"
                  : "Basic"}
              </div>
            ))}
          </div>
        ) : null}
        {props.skills !== undefined && props.skills !== null ? (
          <div className="sideSkills">
            {Object.keys(skillsArray).map((level, i) => (
              <div key={i}>
                <div className="sideSkillCat">{level}</div>
                <div className="d-flex align-items-center flex-wrap">
                  {skillsArray[level].map((skill, index) => (
                    <div key={index} className="sideSkillsInfo">
                      {skill.name}{" "}
                      {skillsArray[level].indexOf(skill) !==
                      skillsArray[level].length - 1
                        ? "|"
                        : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default index;
