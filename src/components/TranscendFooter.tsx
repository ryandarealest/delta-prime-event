import {
  FaInstagram,
  FaBehance,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import Reveal from "./Reveal";
export default function TranscendFooter() {
  return (
    <footer className="trans-footer">
      {/* <div className="footer-bg-person" /> */}

      <Reveal>
        <div className="footer-brand">
          <div className="footer-brand-head">
            <img
              src="/images/logo.png"
              alt="Delta Prime"
              className="footer-logo"
            />
            <Reveal>
              <h2>DELTA PRIME</h2>
            </Reveal>
          </div>

          <Reveal>
            <p>STAY IN THE DELTA</p>
          </Reveal>
          <Reveal>
            <p>Be the first to discover upcoming events, experiences and exclusive opportunities.</p>
          </Reveal>
          
          <Reveal>
          <div className="mailbox">
            <input type="email" placeholder="Your email address" />
            <button>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          </Reveal>
        </div>
      </Reveal>

      <div className="footer-divider" />
      <Reveal>
        <div className="footer-col">
          <h3>EXPLORE</h3>
          <a>Events</a>
          <a>Collection</a>
          <a>Creators</a>
          <a>Tickets</a>
        </div>
      </Reveal>
      <Reveal>
        <div className="footer-col">
          <h3>COMPANY</h3>
          <a>About Us</a>
          <a>Careers</a>
          <a>Press</a>
          <a>Contact</a>
        </div>
      </Reveal>
      <Reveal>
        <div className="footer-col">
          <h3>SUPPORT</h3>
          <a>FAQ</a>
          <a>Help Center</a>
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
        </div>
      </Reveal>
      <Reveal>
        <div className="newsletter">

          <Reveal>
            <h3 className="footer-slogan">GUIDED BY THE DELTA.</h3>
          </Reveal>

          <Reveal>
            <p>
              From concept to execution,
              we craft immersive experiences
              through sound, light and creativity.
            </p>
          </Reveal>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Behance">
              <FaBehance />
            </a>

            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>

            <a href="#" aria-label="Youtube">
              <FaYoutube />
            </a>

            <a href="#" aria-label="Spotify">
              <FaSpotify />
            </a>
          </div>
        </div>
      </Reveal>
      <div className="footer-bottom">
        © 2026 Delta Prime. All rights reserved.
      </div>
    </footer>
  );
}