import "./ProfileHeader.scss";

const index = (props) => {
  return (
    <div className="profileHeader">
      {/* justify-content-between */}
      <div className="hexagon"></div>
      <div className="student d-flex align-items-center">
        <div className="studentName">{props.data.name}</div>
        <div className="studentId">{props.data.roll_number}</div>
      </div>
      <div className="HLine"></div>
      <div className="infoBox">
        <div className="d-flex justify-content-between align-items-center">
          <div className="infoBoxText">
            {props.data.department_details !== undefined
              ? props.data.department_details.full_name
              : null}
          </div>
          <div className="infoBoxText">{props.data.email}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="infoBoxText">
            {props.data.college !== undefined
              ? props.data.college.college_full_name
              : null}
          </div>
          <div className="infoBoxText">{props.data.mobile_number}</div>
        </div>
      </div>
    </div>
  );
};

export default index;
