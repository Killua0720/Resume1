import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="LeftColumn">
            <Contact />
            <Education />
            <Skills />
          </div>
          <div className="RightColumn">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Jan Raymond Soriano</h1>
      <h2>Aspiring Web Designer</h2>
    </div>
  );
}

function Contact() {
  return (
    <div className="Section">
      <h3>Contact</h3>
      <p>Email: Marshmello0720@gmail.com </p>
      <p>Phone: (+63) 9451849423</p>
      <p>Location: Mangga-Cacutud Arayat Pampanga</p>
      <p>GitHub: <a href="#">github.com/Killua0720</a></p>
    </div>
  );
}

function Education() {
  return (
    <div className="Section">
      <h3>Education</h3>
      <p>Bachelor of Science, Information Technology</p>
      <p>University of the Assumption</p>
      <p>2021 - 2024 (Ongoing)</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="Section">
      <h3>Skills</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Bootstrap, React</li>
        <li>Responsive Web Design</li>
        <li>Version Control (Git)</li>
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <div className="Section">
      <h3>Work Experience</h3>
      <div className="Job">
        <h4>Web Design Intern</h4>
        <p><strong>ABC Tech Solutions</strong> | 2023 - Present | San Jose, CA</p>
        <ul>
          <li>Assisted in designing user-friendly web pages for clients using HTML, CSS, and Bootstrap.</li>
          <li>Developed responsive websites ensuring mobile compatibility.</li>
          <li>Worked with the development team to optimize site performance and UI/UX.</li>
        </ul>
      </div>
      <div className="Job">
        <h4>Freelance Web Designer</h4>
        <p><strong>Self-employed</strong> | 2022 - Present | Remote</p>
        <ul>
          <li>Created customized websites for local businesses and entrepreneurs.</li>
          <li>Utilized React and Bootstrap to develop responsive web designs.</li>
          <li>Improved user experiences by incorporating modern web design practices.</li>
        </ul>
      </div>
    </div>
  );
}
