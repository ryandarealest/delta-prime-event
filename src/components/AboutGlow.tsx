const items = [
  ['✦', 'CREATION', 'We create experiences that inspire and connect.'],
  ['◇', 'EXPRESSION', 'Light and form become a universal language.'],
  ['◌', 'TRANSCEND', 'Beyond boundaries, toward infinite possibilities.'],
];

export default function AboutGlow() {
  return (
    <section className="about-section" id="about">
      <div className="section-bg section-bg-about" />
      <div className="about-hand" />

      <div className="about-content reveal-up">
        <p className="eyebrow">ABOUT</p>
        <h2>GUIDED BY THE GLOW</h2>
        <p className="about-lead">In the haze of luminous brilliance, existence is reborn, carried by the light of endless creation.</p>

        <div className="about-features">
          {items.map(([icon, title, text]) => (
            <div className="feature" key={title}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="stats-panel">
          <div><strong>25+</strong><span>EVENTS</span></div>
          <div><strong>120K+</strong><span>ATTENDEES</span></div>
          <div><strong>18</strong><span>CITIES</span></div>
          <div><strong>∞</strong><span>POSSIBILITIES</span></div>
        </div>
      </div>
    </section>
    
  );
}
