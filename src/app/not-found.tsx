import Link from 'next/link';

export default function NotFound() {
  return <section className="not-found content-width"><p className="eyebrow">Deze pagina is even uit beeld</p><h1>Dit verhaal<br /><em>bestaat niet (meer).</em></h1><Link className="button" href="/">Terug naar Livora</Link></section>;
}
