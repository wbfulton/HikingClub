import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about">
      <div className="dark-overlay">
        <div className="about-inner pt">
          {/* Section 1 */}
          <div className="m">
            <h3 className="text-primary">Who are We?</h3>
            <p className="text-center">
              We are rideshare organizer through a student built web application
              at the University of Washington (Seattle).
            </p>
            <div className="line"></div>
          </div>
          {/* Section 2 */}
          <div>
            <h3 className="text-primary">What do We Do?</h3>
            <p className="text-center m">
              Our purpose is to create a thriving community of snowboarders and
              skiers alike that share a love for the mountains and all things
              snow! UW Rideshare is set up as a ride-share program currently for
              all who want to sign up. Once you register, you can instantly join
              drives, make posts, and create your profile! We strive to connect
              people through shared experiences and can't wait to see you out there!
            </p>
            <div className="line"></div>
          </div>
          {/* Section 3 */}
          <div className="m">
            <h3 className="text-primary">How much does it cost?</h3>
            <p className="text-center">
              Its FREE!!
            </p>
            <h3 className="text-primary">How do I contact the admin?</h3>
            <p className="text-center">
              Message us through <a href="m.me/wbfulton">Messenger!</a>
            </p>
            <div className="line"></div>
          </div>
          {/* Buttons */}
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
