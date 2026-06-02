import Image from "next/image";
export default function HeroTranscend() {
  return (
    <main className="site-shell">
      <section className="hero" aria-label="Transcend hero section">
        {/* LAYER 1: background gốc - thay ảnh tại public/images/bg.jpg */}
        <div className="layer layer-bg" />

        {/* atmospheric layers */}
        <div className="layer layer-vignette" />
        <div className="layer layer-nebula" />
        <div className="layer layer-grain" />

        {/* UI layer */}
        <header className="topbar">
          <a href="#" className="brand-logo">
            <Image
              src="/images/logo.png"
              alt="Delta Prime"
              width={50}
              height={45}
              priority
            />
          </a>

          <nav className="nav-left" aria-label="Primary navigation">
            <a href="#creator">CREATOR</a>
            <a href="#collection">COLLECTION</a>
            <a href="#about">ABOUT</a>
          </nav>

          <div className="nav-right" aria-label="Actions">
            <button aria-label="Favorite" className="icon-btn">♡</button>
            <button aria-label="Search" className="search-icon" />
            <a href="#explore" className="explore">EXPLORE</a>
          </div>
        </header>

        {/* LAYER 2: chữ nền */}
        <div className="hero-title">
          <span className="title-left">DELTA</span>
          <span className="title-right">PRIME</span>  
        </div>


        {/* LAYER 3: ảnh người PNG tách nền - thay ảnh tại public/images/person.png */}
        <div className="person-wrap" aria-hidden="true">
          <div className="person" />
        </div>

        {/* text content cùng cấp layer với người */}
        <aside className="left-copy">
          <p className="copy-title">Guided by the Delta</p>
          <p className="copy-body">
            In the haze of luminous<br />
            brilliance, existence is<br />
            reborn, carried by the light<br />
            of endless creation
          </p>
        </aside>

        <p className="credit">@delta.prime</p>
      </section>
      <div className="section-divider" />
    </main>
  );
}
