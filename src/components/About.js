import myImage from '../../images/myImage.jpg'; // ✅ correct (based on your folder structure)

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a paragraph</p>
      <img src={myImage} alt="I made this" />
    </div>
  );
}

export default About;

