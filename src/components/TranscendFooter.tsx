import {
  FaInstagram,
  FaBehance,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
export default function TranscendFooter() {
  return (
    <footer className="trans-footer">
      <div className="footer-bg-person" />

      <div className="footer-brand">
        <div className="footer-brand-head">
          <img
            src="/images/logo.png"
            alt="Delta Prime"
            className="footer-logo"
          />
          <h2>DELTA PRIME</h2>
        </div>

        <p className="footer-slogan">Guided by the Glow.</p>

        <p>
          In the haze of luminous brilliance, existence is reborn, carried by
          the light of endless creation.
        </p>

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

      <div className="footer-divider" />

      <div className="footer-col">
        <h3>EXPLORE</h3>
        <a>Events</a>
        <a>Collection</a>
        <a>Creators</a>
        <a>Tickets</a>
      </div>

      <div className="footer-col">
        <h3>COMPANY</h3>
        <a>About Us</a>
        <a>Careers</a>
        <a>Press</a>
        <a>Contact</a>
      </div>

      <div className="footer-col">
        <h3>SUPPORT</h3>
        <a>FAQ</a>
        <a>Help Center</a>
        <a>Terms of Service</a>
        <a>Privacy Policy</a>
      </div>

      <div className="newsletter">
        <h3>STAY IN THE GLOW</h3>
        <p>Get the latest events, stories and exclusive updates.</p>

        <div className="mailbox">
          <input type="email" placeholder="Your email address" />
          <button>→</button>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Delta Prime. All rights reserved.
      </div>
    </footer>
  );
}