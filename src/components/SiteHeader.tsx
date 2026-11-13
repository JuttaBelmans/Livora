import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Livora — naar de homepage">livora<span>.</span></Link>
        <p className="header-note">Een magazine voor jouw moment</p>
        <nav className="main-nav" aria-label="Hoofdnavigatie">
          <Link href="/artikelen">Artikelen</Link>
          <Link href="/artikelen?rubriek=Lifestyle">Lifestyle</Link>
          <Link href="/artikelen?rubriek=Mode">Mode</Link>
          <Link href="/artikelen?rubriek=Beauty">Beauty</Link>
          <Link href="/over-livora">Over Livora</Link>
        </nav>
      </div>
    </header>
  );
}
