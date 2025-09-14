# Chilbi Kassensystem

Kassensystem für Chilbi des Cevi Wiesendangen-Elsau-Hegi

## Entwicklung

Das System ist eine Web-App, die komplett ohne externe Software im Browser läuft. Dazu dürfen keine NodeJS module benutzt werden. Die App wird mit Vite serviert und verteilt.

**Zum entwickeln:**

```bash
npm install  # Nur beim ersten Aufruf
npm run dev  # Starte Dev-Sever, folde URL aus der Konsole. Mit hot-reloading.
# oder
npm run start  # Production-Mode-Vorschau
```

**Zum verteilen:**

Zuerst muss ein HTTP server installiert werden, z.B. das `serve` NPM package:

```bash
npm i -g serve
```

Danach kann die App kompiliert und ausgeführt werden:

```bash
npm run build   # Erstellt Verteilungs-Files in dist/ Ordner
serve dist
```
