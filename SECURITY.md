# Seguridad de HomeDex

HomeDex es una página estática: no tiene servidor propio, base de datos, cuentas ni claves de API.

## Qué datos maneja

- Lo que cada persona marca (capturados, shiny, origen, idiomas, juegos, naturaleza, compañero y nombre) se guarda **solo en su navegador** (`localStorage`). No se envía a ningún servidor.
- Las partidas guardadas (`.sav`, `.dsv`, `main`, etc.), el `Gameplay.txt` de Pokémon GO y los respaldos `.json` se leen **dentro del navegador** y no se suben a ningún lado. De una partida solo se guardan las marcas de especies, no el nombre del entrenador ni otros datos.
- **Pasar con QR:** la colección viaja comprimida dentro del código o del enlace (después del signo `#`, que los navegadores no envían a ningún servidor). Apenas se abre, la página borra esos datos de la barra de direcciones. Quien tenga el código o el enlace puede ver esa colección.
- **Imagen para compartir:** se dibuja en el navegador; no se sube a ningún lado.
- Vercel Analytics registra estadísticas de visitas a la página.
- Las tipografías se sirven desde la propia página. Los sprites se cargan desde Poképédia.

## Medidas aplicadas

- HTTPS obligatorio y HSTS (los aplica Vercel).
- La app instalable (`sw.js`) solo guarda en el dispositivo la página, sus íconos y los sprites ya vistos, para funcionar sin conexión.
- Cabeceras de seguridad definidas en `vercel.json`:
  - `Content-Security-Policy`: solo se ejecutan los dos scripts propios de la página (autorizados por su huella SHA-256) y el de Vercel Analytics; no se puede incrustar la página en otros sitios.
  - `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` y `Cross-Origin-Opener-Policy`.
- Todo texto que proviene de archivos externos (nombres de entrenador, apodos, nombres de archivo) se muestra como texto, nunca como código.
- Los archivos tienen límites de tamaño y se identifican por su contenido; los respaldos se validan campo por campo antes de cargarse.

## Importante al actualizar

La política de seguridad autoriza los scripts por su huella. Por eso `index.html` y `vercel.json` se generan juntos y **deben subirse siempre juntos**: si se cambia uno solo, la página deja de funcionar.

## Reportar un problema

Si encontrás una falla de seguridad, avisá abriendo un *issue* en este repositorio sin incluir detalles que permitan explotarla, y se coordinará el resto por privado.
