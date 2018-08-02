import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <p>Hopefully you find my project history intriguing!</p>
        <div>
          <h5>Side Projects</h5>
          <p>
            To start off, you're looking at one. Another side project I have
            done was to create an app for a company called Surgical Serenity
            Solutions. I guess this could count as a work project but as it was
            just a beta app I felt it was more a side project. I created the
            beta version of an app with a colleague, it was in both IOS and
            Android.
          </p>
        </div>
        <div>
          <h5>Work Projects</h5>
          <p>
            Unfortunately it is very hard for me to demonstrate what I created
            during my internships as I can't share the code bases of the
            companies I worked at. If you look at my resume you can see an
            overview of what I did and I would be happy to give you a list or
            more in-depth overview of what I created for each company if you
            shoot me an email!
          </p>
        </div>
        <div>
          <h5>School Projects</h5>
          <p>
            These projects are just homework assignments that I had throughout
            my classes at Boston College.
          </p>
          <ul>
            <li>
              <h6>Computer Systems</h6>
              <p>
                This class was about (FILL IN FROM SYLLABUS) and here are some
                of my favorite projects from the class.
              </p>
            </li>
            <li>
              <h6>Randomness And Probability</h6>
              <p>
                This class was about (FILL IN FROM SYLLABUS). Here are some
                projects from the class.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Project;
