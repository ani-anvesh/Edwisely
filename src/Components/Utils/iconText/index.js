import "./icontext.scss";

const index = (props) => {
  console.log(props.icon);
  return (
    <div className="d-flex justify-content-between align-items-center iconText">
      <div
        className="buttonIcon"
        style={{
          backgroundImage: `url(${props.icon})`,
          backgroundSize: "16px",
        }}
      ></div>
      <div className="buttonText">{props.buttonText}</div>
    </div>
  );
};

export default index;
/* 
        style={{ backgroundImage: `url(${"../../../assets/" + props.icon})` }}
 */
