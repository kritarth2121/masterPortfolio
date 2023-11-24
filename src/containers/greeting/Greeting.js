import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className="greeting-text font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-green-500 to-indigo-500
            animate-text "
              >
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2
                  className="greeting-nickname
                  animate-bounce animate-infinite animate-ease-in"
                  style={{ color: theme.text }}
                >
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="saad sitting on table"
              src={require("../../assests/images/greeting.gif")}
            ></img>
            {/* <FeelingProud theme={theme} /> */}
            {/* <iframe
              src={`${greeting.introYtVideo}?autoplay=1&mute=1&hl=en&cc_lang_pref=en&cc_load_policy=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
              allowfullscreen
              frameborder="0"
            ></iframe> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
