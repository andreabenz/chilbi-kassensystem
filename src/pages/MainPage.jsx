import { NavLink } from 'react-router';
import Page from '@/components/page';
import { items } from '/JS/items';

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

      <h2>Artikel</h2>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>ID</th>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th style={{ textAlign: 'left' }}>Kat.</th>
            <th style={{ textAlign: 'right' }}>Grundpreis</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category_id}</td>
              <td style={{ textAlign: 'right' }}>
                {item.base_price ? `CHF ${item.base_price.toFixed(2)}` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  );
};

export default MainPage;
