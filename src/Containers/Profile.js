import { useState } from "react";
import { useFetch } from "../Components/Hooks/useFetch";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import ProfileHeader from "../Components/ProfileHeader";
import TimeLineBox from "../Components/TimeLineBox";
import LogoTextBox from "../Components/Utils/logoTextBox";
import Pencil from "../assets/pencil.svg";
import Shape from "../assets/Shape.svg";
import Cap from "../assets/student_copy.svg";
import Certificate from "../assets/Combined_Shape.svg";
import CertificateS from "../assets/Combined_Shape_Copy.svg";
import Video from "../assets/Combined_Shape-1.svg";
import Lanuage from "../assets/Group_16.svg";
import pro from "../assets/Group60.svg";
import proS from "../assets/Group17.svg";
import Job from "../assets/Group_51.svg";
import JobS from "../assets/Group_59.svg";
import Skills from "../assets/Group_58_Copy.svg";
import College from "../assets/Group_27_Copy.svg";

const Profile = () => {
  const [statu, setStatu] = useState("");
  const url =
    "https://stagingstudentpython.edwisely.com/user/getProfile?roll_number=A224&password=1234";
  const { status, statusCode, data, message } = useFetch(url);
  console.log(status + " " + statusCode + " " + message + "  ");
  console.log(data);

  return (
    <div>
      <Header />
      <Filter />
      {data !== null && data !== undefined && data !== {} ? (
        <div style={{ padding: "0px 47px 50px 47px" }}>
          <ProfileHeader data={data} />
          <LogoTextBox
            icon={Pencil}
            heading={"Your Interest"}
            sideText={`You are interested in ${
              data.splash !== undefined ? data.splash.splash_name : null
            } and would like to become a ${
              data.splash !== undefined ? data.splash.category_name : null
            }.`}
          />
          <LogoTextBox
            icon={Video}
            heading={"Video Resume"}
            sideText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            }
            video={data.video_resume}
          />
          <LogoTextBox
            icon={Shape}
            heading={"Career Objective"}
            sideText={data.summary}
          />
          <TimeLineBox
            icon={Cap}
            heading={"Education"}
            education={data.education}
            College={College}
          />
          <TimeLineBox
            icon={Job}
            heading={"Experience and Volunteering"}
            experience={data.experience}
            College={JobS}
          />
          <TimeLineBox
            icon={Certificate}
            heading={"Certificates and Training"}
            experience={data.certificate}
            College={CertificateS}
          />
          <TimeLineBox
            icon={pro}
            heading={"Projects"}
            experience={data.project}
            College={proS}
          />
          <LogoTextBox
            icon={Lanuage}
            heading={"Languages"}
            languages={data.languages}
          />
          <LogoTextBox icon={Skills} heading={"Skills"} skills={data.skills} />
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>LOADING...!</h1>
      )}
    </div>
  );
};

export default Profile;
