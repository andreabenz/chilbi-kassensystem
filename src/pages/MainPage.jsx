import Page from '@/components/page';

const MainPage = () => {
  return (
    <Page>
      <h1>Chilbi Kassensystem</h1>
      <p>Kassensystem für Cevi WIE Chilbi.</p>

      <h2>Funktionen</h2>
      <ul>
        <li>Bestellung aufnehmen</li>
        <li>Bestellung für Kunden anzeigen</li>
        <li>Bestellung abrechnen</li>
        <li>Kundenbeleg drucken</li>
        <li>Küchenbestellung ausdrucken</li>
        <li>Alle Einkäufe als Excel exportieren</li>
      </ul>

      <h2>Navigation</h2>
      <div>
        <h3>Admin</h3>
        <ul>
          <li>
            <a href="/settings">Einstellungen</a>
          </li>
          <li>
            <a href="/closing">Tagesabschluss</a>
          </li>
        </ul>

        <h3>Helfer</h3>
        <ul>
          <li>
            <a href="/order">Aktuelle Bestellung</a>
          </li>
          <li>
            <a href="/overview">Bestellungsübersicht</a>
          </li>
        </ul>

        <h3>Kunde</h3>
        <ul>
          <li>
            <a href="/client">Kundenansicht</a>
          </li>
        </ul>
      </div>
    </Page>
  );
};

export default MainPage;
