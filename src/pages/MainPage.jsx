import { NavLink } from 'react-router';
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
            <NavLink to="/settings">Einstellungen</NavLink>
          </li>
          <li>
            <NavLink to="/closing">Tagesabschluss</NavLink>
          </li>
        </ul>

        <h3>Helfer</h3>
        <ul>
          <li>
            <NavLink to="/order">Aktuelle Bestellung</NavLink>
          </li>
          <li>
            <NavLink to="/overview">Bestellungsübersicht</NavLink>
          </li>
        </ul>

        <h3>Kunde</h3>
        <ul>
          <li>
            <NavLink to="/client">Kundenansicht</NavLink>
          </li>
        </ul>
      </div>
    </Page>
  );
};

export default MainPage;
