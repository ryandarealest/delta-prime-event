import Reveal from "./Reveal";
const items = [
  ['✦', 'CREATION', 'We create experiences that inspire and connect.'],
  ['◇', 'EXPRESSION', 'Light and form become a universal language.'],
  ['◌', 'TRANSCEND', 'Beyond boundaries, toward infinite possibilities.'],
];

export default function AboutGlow() {
  return (
    <section className="about-section" id="about">
      <div className="section-bg section-bg-about" />
      <Reveal>
        <div className="about-hand" />
      </Reveal>

      <div className="about-content reveal-up">
        <Reveal>
          <p className="eyebrow">ABOUT</p>
        </Reveal>
        <Reveal>
          <h2>GUIDED BY THE DELTA</h2>
        </Reveal>
        <Reveal>
          <p className="about-lead">From concept to execution, we create immersive experiences through sound, light and innovation.</p>
        </Reveal>

        <Reveal>
        <div className="about-features">
          {items.map(([icon, title, text]) => (
            <div className="feature" key={title}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        </Reveal>
        <Reveal>
        <div className="stats-panel">
          <Reveal><div><strong>25+</strong><span>EVENTS</span></div></Reveal>
          <Reveal><div><strong>120K+</strong><span>ATTENDEES</span></div></Reveal>
          <Reveal><div><strong>18</strong><span>CITIES</span></div></Reveal>
          <Reveal><div><strong>∞</strong><span>POSSIBILITIES</span></div></Reveal>
        </div>
        </Reveal>
      </div>
    </section>
    
  );
}
