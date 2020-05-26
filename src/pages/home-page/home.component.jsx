import React from "react";

import HeroText from "../../components/hero-text/hero-text.component";

import "./home.styles.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroText>
        Hey<span className="hero-emphasis">!</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            My name's Brandon Lee , and I think I'd be a great fit for your open
            position. It's pretty easy to just say that with no context, so let
            the wooing commence!
          </span>
          <img src="" alt="" />
        </div>
      </div>
      <HeroText>
        Why Me<span className="hero-emphasis">?</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            Honestly, I could wax poetic about all my qualities that make me
            perfectly fit this position in a Cover Letter worthy manner, but for
            the sake of brevity (And also the fact that you're probably swamped
            with applications), here's a summary:
            <ul>
              <li>Adaptable</li>
              <li>Constant learner</li>
              <li>Very open to constructive criticism</li>
              <li>Super easy to get along with</li>
              <li>
                I will always admit if I don't understand or know something, as
                in my opinion that normally saves time and gives me a more
                focused direction to look for answers to my problems.
              </li>
              <li>
                Building off of the last point, I'm also independent about my
                learning, so if I don't know something, after ensuring that my
                team's aware, I'd definitely work on my own to plug any
                knowledge gaps I might have.
              </li>
            </ul>
          </span>
        </div>
      </div>
      <HeroText>
        Why You<span className="hero-emphasis">?</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            More than anything else, the transparency on your hiring process
            inspired me to make the extra effort and complete this Application
            instead of just blindly sending out CVs to job recruitment sites. I
            am aware that the option was to send a Cover Letter, but the option
            to paste meant that I couldn't resist putting it in this form. This
            combined with your complete remote culture, promise to make a quick
            response, value of diversity and openness to other cultures made
            this a complete sale and quite frankly? I'd genuinely love to begin
            working together with you all.
          </span>

          <span>
            Your hiring flow of Interview > Coding Challenge > Trial > Offer is
            super well thought out and shows that you challenge the
            whiteboarding norms that have dominated the hiring process for any
            development jobs, and for that I'm excited to join you.
          </span>

          <span>
            Finally, the fact that you offered this non-standard approach to
            applying! This immediately appealed to me as it suggests flexibility
            in approach to solving problems, and I'm super excited to be part of
            a team that would take an approach like this.
          </span>
        </div>
      </div>
      <HeroText>
        Here are my Strengths<span className="hero-emphasis">...</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            I have strong Javascript/CSS/HTML knowledge, including React and
            Node.js/Express. Of React, I'm comfortable using it in combination
            with Redux.
          </span>
          <span>
            I also have a solid grasp on Python up to an intermediate level.
          </span>
          <span>
            I work very well autonomously, but also enjoy collaboration with
            teammates and genuinely enjoy learning people's stories, which often
            leads to me fitting with teams quickly.
          </span>
        </div>
      </div>
      <HeroText>
        And my weaknesses<span className="hero-emphasis">.</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            I'll be honest, there are also some (easily surmountable!) problems
            that might affect my initial fit, but they're all easily adjusted
            for, and may in fact work out to be healthier for my fit in the long
            run as starting from the ground up in certain areas means that I can
            optimize the direction of my growth. Enough damage control though,
            let's go in!
          </span>
          <span>
            Firstly, I don't have much knowledge of PHP. I know it was mentioned
            that Python was a plus, but knowing that you work with wordpress,
            I'll have to put in extra effort to get up to speed. Honestly? I'm
            looking forward to it, it's been too long since I learned a new
            language.
          </span>
          <span>
            I tend to hyperfixate a bit too much on solving certain problems.
            However I'm constantly working on that aspect of my personality, not
            to mention that working in a team definitely helps in that regard.
          </span>
          <span>
            Again, for the sake of brevity, I'll end it here. We can discuss
            both my strengths and weaknesses in greater detail come interview
            time!
          </span>
        </div>
      </div>
      <HeroText>
        Thanks for your consideration<span className="hero-emphasis">!</span>
      </HeroText>
      <div className="home-page-container">
        <div className="home-page-content">
          <span>
            Seriously, thanks a bunch for having such a genuinely
            well-documented approach to hiring!
          </span>
          <span>Thanks for reading this far, </span>
          <span>Brandon</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
