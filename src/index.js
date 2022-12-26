import React from 'react'
import ReactDOM from 'react-dom/client'
import pfp from './pfp.jpg'
import './App.css'

function Picture() {
  return (
    <div className = "wrapper">
      <img src={pfp} alt = "adarsh" /> 
    </div>
  );
}

function Subtitle() {
  return (
      <h1>Adarsh Hiremath</h1>
  ); 
}

function Biography() {
  return (
    <div className = "biographyContent">
      <p>hi, i'm adarsh (ah-dhursh). i study computer science, mathematics, and economics at harvard.</p>
      <p>currently, i'm building <a href = "https://mercor.io" target="_blank">mercor</a>, a software developer vetting and job placement platform. i also do research about inflation. in my free time, i help coach bellarmine college prep's policy debate debate team.</p>
      <p>previously, i was an ML research intern @ IBM, SWE @ Stanford CIBSR, and SWE @ 1WorldOnline.</p>
      <p>i taught myself how to juggle 5 balls last summer, i can slice a banana in half by throwing playing cards, i'm learning how to DJ, i can custom make longboard decks, and i put milk in my bowl before the cereal.</p>
      <p>academic interests: computer vision, LLMs, macroeconomics, and full stack web development. </p>
      <p>skills (in order of proficiency): python (pytorch, numpy, pandas, django), react, typescript, AWS (S3, Lambda, EC2, Cognito, Dynamo DB, Cloudfront), mongo DB, firebase, java, C, MATLAB</p>
      <p>links: <a href = "https://github.com/ahiremathh" target="_blank">github</a>, <a href = "https://twitter.com/adarsh_exe" target="_blank">twitter</a>, <a href = "https://www.linkedin.com/in/adarsh-h-623941204/" target="_blank">linkedin</a></p>
      <p>contact me at ahiremath@college.harvard.edu</p>
    </div>
  ); 
}

class Page extends React.Component {
  render() {
    return (
      <div className = "page">
        <div className = "name">
          <Picture/>
        </div>

        <div className = "subtitle">
          <Subtitle/>
        </div>

        <div className = "biography">
          <Biography/>
        </div>
      </div>
    ); 
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
