import React from "react";

import Menu from "../commonComponents/Menu";
import TraitsWindow from "./windows/TraitsWindow";

import ReactFullpage from "@fullpage/react-fullpage";
import { Hourglass } from "react95";

const StartupPage = React.lazy(() => import("./StartupPage/StartupPage"));
const ProjectsWindow = React.lazy(() => import("./windows/ProjectsWindow"));
const SocialMediaWindow = React.lazy(() =>
  import("./windows/SocialMediaWindow")
);

const pluginWrapper = () => {
  require("fullpage.js/vendors/scrolloverflow");
};

const HomeScreen = () => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <>
      <ReactFullpage
        anchors={["slide1", "slide2", "slide3", "slide4"]}
        sectionsColor={["#008080", "#008080", "#008080", "#008080"]}
        // pluginWrapper={pluginWrapper}
        // autoScrolling={false}
        scrollingSpeed={400}
        css3={false}
        render={(comp) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" key="slide1">
                <div className="HomeScreen">
                  <StartupPage />
                </div>
              </div>
              <div className="section" key="slide2">
                <div className="HomeScreen">
                  <TraitsWindow title="developer.exe" />
                </div>
              </div>
              <div className="section" key="slide3">
                <div className="HomeScreen">
                  <ProjectsWindow title="projects.exe" />
                </div>
              </div>
              <div className="section" key="slide4">
                <div className="HomeScreen">
                  <SocialMediaWindow title="social_media.exe" />
                </div>
              </div>
              <div>
                <Menu />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default HomeScreen;
