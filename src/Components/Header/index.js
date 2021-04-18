import "./header.scss";

const index = () => {
  return (
    <div className="d-flex justify-content-between align-items-center header">
      <div className="d-flex align-items-center">
        <div className="logo"></div>
        <div className="headerDetails d-flex align-items-center">
          <div className="detailLogo"></div>
          <div className="logoText">20 points</div>
        </div>
        <div className="headerDetails d-flex align-items-center">
          <div className="trophyLogo"></div>
          <div className="logoText">level 1</div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="searchLogo"></div>
        <div className="dashboard d-flex align-items-center">
          <div className="dashboardLogo"></div>
          <div className="dashboardText">Dashboard</div>
        </div>
        <div className="tvLogo"></div>
        <div className="bellLogo"></div>
        <div className="ylp d-flex align-items-center justify-content-center">
          <div className="ylpText">YLP</div>
          <div className="ylpLogo"></div>
        </div>
        <div className="menuLogo"></div>
      </div>
    </div>
  );
};

export default index;
