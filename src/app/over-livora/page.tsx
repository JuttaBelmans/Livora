import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Over Livora' };

export default function AboutPage() {
  return <section className="about-page content-width"><p className="eyebrow">Fijn dat je er bent</p><h1>Een plek om<br /><em>helemaal jezelf te zijn.</em></h1><div className="about-layout"><div className="about-monogram">l<span>.</span></div><div><p className="about-lead">Livora is een Nederlandstalig online magazine over lifestyle, mode en beauty — gemaakt voor vrouwen die nieuwsgierig zijn naar wat bij hén past.</p><p>We geloven dat stijl persoonlijk is, selfcare in kleine dingen zit en inspiratie pas waardevol wordt als je er je eigen draai aan kunt geven. Daarom vind je hier verhalen die uitnodigen om te ontdekken, uit te proberen en soms gewoon even op adem te komen.</p><p>Livora is een fictief magazineconcept. De voorbeeldartikelen op deze website zijn speciaal gemaakt om de site en het beheerpaneel te laten zien.</p></div></div><div className="about-values"><div><span>01</span><h2>Met aandacht</h2><p>Voor de details die jouw dag mooier maken.</p></div><div><span>02</span><h2>Op jouw manier</h2><p>Jouw smaak, jouw tempo, jouw verhaal.</p></div><div><span>03</span><h2>Altijd nieuwsgierig</h2><p>Ruimte om te blijven ontdekken.</p></div></div></section>;
}
