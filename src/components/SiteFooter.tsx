import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="wordmark footer-wordmark" href="/">livora<span>.</span></Link>
      <p>Voor een leven dat helemaal van jou is.</p>
      <div className="footer-links"><Link href="/over-livora">Over ons</Link><Link href="/keystatic">Redactie</Link></div>
      <small>© 2026 Livora Magazine · Een fictief concept</small>
    </footer>
  );
}
