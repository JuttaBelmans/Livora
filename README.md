# Livora

Livora is een Nederlandstalig online magazine over lifestyle, mode en beauty voor jonge vrouwen. De vormgeving gebruikt een rustige, redactionele stijl met crème, zachtroze en donkerbruin.

## Techniek

- Next.js 16 met React en de App Router
- Keystatic voor artikelbeheer
- Artikelen staan als leesbare `.mdoc`-bestanden in `src/content/artikelen`
- Tijdens lokale ontwikkeling gebruikt Keystatic lokale bestandsopslag
- In productie gebruikt Keystatic GitHub-opslag voor `JuttaBelmans/Livora`
- Geen aparte database of zelfgebouwd CMS

Deze keuzes volgen het oorspronkelijke technische kader. De repositorynaam is afgeleid van de reeds ingestelde Git-remote (`JuttaBelmans/Livora`); er is niets gepubliceerd of gepusht.

## Pagina's

- `/` — homepage met uitgelicht verhaal en rubrieken
- `/artikelen` — alle verhalen, met filters voor Lifestyle, Mode en Beauty
- `/artikelen/[slug]` — individueel artikel
- `/over-livora` — informatie over het magazine
- `/keystatic` — beheeromgeving

De drie artikelen zijn fictieve voorbeelden. De lokaal opgeslagen voorbeeldfoto's zijn afkomstig van Unsplash en staan in `public/images`.

## Lokaal starten

Installeer eerst Node.js 20.9 of nieuwer. Open daarna een terminal in deze projectmap en voer uit:

```bash
npm install
npm run dev
```

Open vervolgens [http://localhost:3000](http://localhost:3000). Het artikelbeheer staat op [http://localhost:3000/keystatic](http://localhost:3000/keystatic). In lokale modus is geen GitHub-login nodig. Nieuwe artikelen die je in Keystatic maakt, worden bestanden onder `src/content/artikelen`.

## Keystatic op de gepubliceerde site

De productieconfiguratie schakelt over naar GitHub-opslag voor `JuttaBelmans/Livora`. De repository moet privé blijven. Maak voor de live Keystatic-omgeving een aangepaste GitHub App en zet de volgende waarden als omgevingsvariabelen in Vercel:

- `KEYSTATIC_GITHUB_CLIENT_ID`
- `KEYSTATIC_GITHUB_CLIENT_SECRET`
- `KEYSTATIC_SECRET`
- `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`

Geef de GitHub App alleen toegang tot deze repository. GitHub-gebruikers moeten schrijfrechten op de repository hebben om in Keystatic te kunnen bewerken. Zet nooit echte geheimen in Git of in een `.env`-bestand dat je commit. `.env.example` bevat alleen lege namen als geheugensteun.

## Belangrijk bij lokaal testen

`npm run dev` gebruikt lokale opslag. De productie-build schakelt Keystatic-configuratie over naar GitHub-modus; de volledige live-authenticatie kan pas worden gecontroleerd nadat de GitHub App en productie-omgevingsvariabelen zijn ingesteld. Er is tijdens deze eerste implementatie niets naar GitHub of Vercel verzonden.
