import {useEffect} from "react";

const ParticleBackground = () => {
  useEffect(() => {
    const particlesContainer = document.querySelector(".particles")!;
    const numberOfParticles = 100;

    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 5 + 2;
      const duration = Math.random() * 5 + 3;
      const delay = Math.random() * 5;
      const positionX = Math.random() * 100;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.left = `${positionX}vw`;

      particlesContainer.appendChild(particle);
    }
  }, []);

  return <div className="particles"></div>;
};

export default ParticleBackground;