import React from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

const Team = () => {
  return (
    <section id="team" className="team pos-rel">
      <div className="container">
        <div className="sec-title text-center mb-70">
          <h5 className="sec-title__subtitle">Our Team</h5>
          <h2 className="sec-title__title">Meet our skilled team</h2>
        </div>

        <div className="team__wrap ul_li">
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/team/img1.jpg" alt="" />
            </div>
            <div className="team__info text-center mb-20">
              <h3>Devansh Dhruve</h3>
              <span>Web3 Developer</span>
            </div>

            <div className="team__social-link ul_li_center">
              <ul className="team__social-link link-left ul_li">
                <li>
                  <a href="#">
                    <TiSocialFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialGithub />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/team/img2.jpg" alt="" />
            </div>
            <div className="team__info text-center mb-20">
              <h3>Sophia Martinez</h3>
              <span>Web3 Developer</span>
            </div>

            <div className="team__social-link ul_li_center">
              <ul className="team__social-link link-left ul_li">
                <li>
                  <a href="#">
                    <TiSocialFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialGithub />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/team/img3.jpg" alt="" />
            </div>
            <div className="team__info text-center mb-20">
              <h3>Ethan Collins</h3>
              <span>Software Developer</span>
            </div>

            <div className="team__social-link ul_li_center">
              <ul className="team__social-link link-left ul_li">
                <li>
                  <a href="#">
                    <TiSocialFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialGithub />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/team/img4.jpg" alt="" />
            </div>
            <div className="team__info text-center mb-20">
              <h3>Ava Reynolds</h3>
              <span>Software Developer</span>
            </div>

            <div className="team__social-link ul_li_center">
              <ul className="team__social-link link-left ul_li">
                <li>
                  <a href="#">
                    <TiSocialFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialGithub />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="team__shape">
        <div className="shape shape-1">
          <img src="assets/img/shape/s_shape1.png" alt="" />
        </div>
        <div className="shape shape-2">
          <img src="assets/img/shape/s_shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Team;
