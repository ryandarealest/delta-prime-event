import Reveal from "./Reveal";
export default function EventDetail() {
  return (
    <section className="detail-section" id="detail">
      <div className="section-bg section-bg-detail" />
      <div className="detail-orbit" />

      <a href="#events" className="back-link">← BACK TO EVENTS</a>

    
      <div className="detail-date reveal-left">
        <Reveal>
          <strong>24</strong>
          <span>MAY<br />SATURDAY</span>
        </Reveal>
      </div>
      
      
      <div className="detail-content reveal-up">
        <Reveal>
          <h2>DELTA<br />NIGHT</h2>
        </Reveal >
        <Reveal>
          <p className="tag">ELECTRONIC EXPERIENCE</p>
        </Reveal>
        <Reveal>
          <div className="meta"><span>⌖ Da Nang, Vietnam</span><span>◷ 20:00 - 03:00</span></div>
        </Reveal>
        <Reveal>
          <p className="detail-copy">An immersive night where sound, light, and energy merge to transcend reality.</p>
        </Reveal>
        <Reveal>
          <div className="detail-actions"><a className="ticket-btn" href="#">GET TICKETS <span>→</span></a><a className="ghost-btn" href="#">ADD TO CALENDAR</a></div>
        </Reveal>
      </div>
      
      <div className="detail-person reveal-right" />
    </section>
  );
}
