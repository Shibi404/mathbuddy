import { Link } from "react-router-dom"; // Routing concept
import "../styles/CleanHands.css";

const CleanHands = () => {
  const steps = [
    { id: 1, img: "/handwashing-steps/step-1.jpg" },
    { id: 2, img: "/handwashing-steps/step-2.jpg" },
    { id: 3, img: "/handwashing-steps/step-3.jpg" },
    { id: 4, img: "/handwashing-steps/step-4.jpg" },
    { id: 5, img: "/handwashing-steps/step-5.jpg" },
    { id: 6, img: "/handwashing-steps/step-6.jpg" },
    { id: 7, img: "/handwashing-steps/step-7.jpg" },
    { id: 8, img: "/handwashing-steps/step-8.jpg" },
    { id: 9, img: "/handwashing-steps/step-9.jpg" },
    { id: 10, img: "/handwashing-steps/step-10.jpg" },
    { id: 11, img: "/handwashing-steps/step-11.jpg" },
    { id: 12, img: "/handwashing-steps/step-12.jpg" },
  ];
  return (
    <>
      <div className="page-container">
        <div className="content-container">
          <div className="content-text">
            <h1 className="title">Why Washing Hands is Important</h1>
            <p className="content-text-bullet">
              Washing hands removes dirt and germs that we cannot see. It helps
              us stay healthy and prevents the spread of diseases.
            </p>
            <p className="content-text-bullet">
              Before eating food and after playing, washing hands makes sure no
              germs enter our body.
            </p>
            <p className="content-text-bullet">
              Clean hands protect us and our friends from getting sick.
            </p>
          </div>
          <div className="content-img-container">
            <img
              src="/Teaching-children-about-hand-washing.png"
              alt="Hand Wash"
              className="image"
            />
          </div>
        </div>
      </div>

      <div className="info-container">
        <h1 className="info-title">When Should We Wash Our Hands? 🧼</h1>

        <p className="info-text">
          Washing your hands is a superpower against germs! We may not always
          see them, but tiny germs live on the things we touch. Washing hands at
          the right time protects us from falling sick. 🌟
        </p>

        <ul className="info-list">
          <li>👉 Before eating food</li>
          <li>👉 After using the toilet</li>
          <li>👉 After playing outside</li>
          <li>👉 After coughing, sneezing, or touching your nose</li>
          <li>👉 After touching pets or animals</li>
        </ul>

        <p className="info-highlight">
          🌟 Washing hands regularly keeps you safe, happy, and full of energy!
        </p>
      </div>

      <div className="demo-container">
        <h1 className="demo-title">Steps for Proper Handwashing 👐</h1>
        <p className="demo-subtitle">
          Follow these simple steps to keep your hands clean and stay healthy!
        </p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-box">
              <img
                src={step.img}
                alt={`Step ${step.id}`}
                className="step-img"
              />
              <h3 className="step-number">Step {step.id}</h3>
            </div>
          ))}
        </div>

        <p className="demo-tip">
          🕒 Wash your hands for at least <strong>20 seconds</strong> each time!
        </p>
      </div>
    </>
  );
};

export default CleanHands;
