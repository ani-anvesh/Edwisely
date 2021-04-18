import "./filter.scss";
import IconText from "../Utils/iconText";
import DownloadIcon from "../../assets/Group_65.svg";
import ShareIcon from "../../assets/share.svg";

const index = () => {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <div className="filter d-flex align-items-center">
        <div className="dropdown d-flex align-items-center">
          <div className="dropdownText">
            Select Theme <span> Edwisly Resume theme 001</span>
          </div>
          <div className="dropdownIcon"></div>
        </div>
        <div className="VLine"></div>
        <div>
          <IconText buttonText={"Download"} icon={DownloadIcon} />
        </div>
        <div className="VLine"></div>
        <div>
          <IconText buttonText={"Share"} icon={ShareIcon} />
        </div>
      </div>
      <div className="editButton">Edit</div>
    </div>
  );
};

export default index;
