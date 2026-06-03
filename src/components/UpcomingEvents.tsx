import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
const events = [
  { day: '24', month: 'MAY', title: 'DELTA NIGHT', type: 'ELECTRONIC EXPERIENCE', place: 'Da Nang, Vietnam', image: '/images/event-1.jpg' },
  { day: '08', month: 'JUN', title: 'PRIME CHAPTER II', type: 'VISUAL SHOWCASE', place: 'Ho Chi Minh, Vietnam', image: '/images/event-2.jpg' },
  { day: '21', month: 'JUN', title: 'BEYOND REALITY', type: 'ART & TECHNOLOGY', place: 'Ha Noi, Vietnam', image: '/images/event-3.jpg' },
];

export default function UpcomingEvents() {
  return (
    <section className="event-section" id="events">
      <div className="section-bg section-bg-events" />
      <div className="section-glow" />
      <Reveal>
      <div className="events-intro reveal-up">
        <Reveal>
          <p className="eyebrow">EVENTS</p>
        </Reveal>
        <Reveal>
          <h2>UPCOMING<br />EVENTS</h2>
        </Reveal>
        <Reveal>
          <span className="line" />
        </Reveal>
        <Reveal>
          <p className="intro-text">Step into a world where light shapes moments and moments become unforgettable.</p>
        </Reveal>
        <Reveal>
          <a className="pill-btn" href="#detail">VIEW ALL EVENTS <span>→</span></a>
        </Reveal>
      </div>
      </Reveal>
      
      <Reveal>
      <div className="event-cards">
        {events.map((event, index) => (
          <article className="event-card reveal-up" style={{ '--delay': `${index * 120}ms` } as CSSProperties} key={event.title}>
            <div className="date-box"><b>{event.day}</b><span>{event.month}</span></div>
            <div className="event-img" style={{ backgroundImage: `url(${event.image})` }} />
            <div className="event-card-content">
              <h3>{event.title}</h3>
              <p>{event.type}</p>
              <div className="event-bottom"><span>⌖ {event.place}</span><a href="#detail">→</a></div>
            </div>
          </article>
        ))}
      </div>
      </Reveal>
    </section>
  );
}
