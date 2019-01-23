import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaKeybase, FaLinkedin } from "react-icons/fa";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Button, Icon } from "antd";

function Banner(props) {
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image">
            <img
              alt="banner"
              src="https://secure.meetupstatic.com/photos/member/4/9/a/5/highres_253638853.jpeg"
              width="60%" style={{ borderRadius: "50%" }}
            />
          </div>
        </TweenOne>
      )}
      <QueueAnim
        className="banner-title-wrapper"
        type={props.isMobile ? "bottom" : "right"}
      >
        <h1 key="h1">Cheng Yu</h1>
        <p key="content">
            A programmer who have an large range of interests.
        </p>
        <div key="button" className="button-wrapper">

          <a href="assets/resume_2019.pdf" target="_blank" rel="noopener noreferrer">
            <Button type="primary">
              Resume
            </Button>
          </a>
          <a href="assets/cheng_pgp_key_pub" target="_blank" rel="noopener noreferrer">
            <Button type="primary" style={{ margin: '0 16px' }} ghost>
              PGP Key
            </Button>
          </a>
          <a href="https://github.com/s3341458" target="_blank">
              <Icon style={{ margin: "0 10px" }}>
                  <FaGithub/>
              </Icon>
          </a>
          <a href="https://keybase.io/chengyu" target="_blank">
              <Icon style={{ margin: "0 10px" }}>
                  <FaKeybase />
              </Icon>
          </a>
          <a href="https://www.linkedin.com/in/cheng-yu-55874484/" target="_blank">
              <Icon style={{ margin: "0 10px" }}>
                  <FaLinkedin />
              </Icon>
          </a>
        </div>
      </QueueAnim>
      {!props.isMobile && (
          <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
            <img
              alt="banner" max-height="20%" max-width="20%" style={{ borderRadius: "50%" }}
              src="https://secure.meetupstatic.com/photos/member/4/9/a/5/highres_253638853.jpeg"
              height="100%"/>
          </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Banner;
