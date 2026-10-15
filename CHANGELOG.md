# HomeDex — Releases

Cada versión tiene su texto en español y en inglés. / Each version has its notes in Spanish and English.

---

## v2.2 — Íconos en pixel art / Pixel-art icons (15/10/2026)

### Español
- **Íconos en pixel art** de cada Pokémon (del repositorio de sprites de PokeAPI, generaciones 7 y 8):
  - en cada tarjeta de la Pokédex (en gris los que te faltan);
  - en la ficha de cada Pokémon, ampliado sin perder nitidez;
  - en el botón del compañero, en la lista para elegirlo y en la imagen para compartir.
- La estrella de shiny pasó a estar al lado del tilde de capturado, para dejarle lugar al ícono.
- Los sprites grandes, la versión shiny y el enlace en alta definición siguen disponibles en la ficha.
- Todos los íconos viajan en una sola imagen de 243 KB, que queda guardada para usar sin conexión.
- Pendiente: las especies de 9.ª generación todavía no tienen ícono en el repositorio; 23 formas regionales muestran el de su especie base.

### English
- **Pixel-art icons** for every Pokémon (from the PokeAPI sprites repository, generations 7 and 8):
  - on every Pokédex card (greyed out when missing);
  - on each Pokémon's entry, enlarged without losing sharpness;
  - on the partner button, the partner picker and the share image.
- The shiny star now sits next to the caught tick, to make room for the icon.
- Large sprites, the shiny version and the high-definition link are still available in the entry.
- All icons ship as a single 243 KB image, kept for offline use.
- Pending: Gen 9 species have no icon in the repository yet; 23 regional forms show their base species' icon.

---

## v2.1 — QR, imagen para compartir y app instalable / QR, share image and installable app (15/10/2026)

### Español
- **Pasar con QR:** genera un código con toda tu colección. Al escanearlo con la cámara de otro celular se abre HomeDex y pregunta si combinar o reemplazar. También se puede copiar o compartir el enlace. Los datos viajan dentro del código, sin servidores.
- **Imagen para compartir:** una Pokédex con tu nombre, porcentaje completado, capturados, faltantes, shiny y avance por generación, con los colores de tu compañero. Si no tenés compañero, te ofrece elegir uno o seguir con el rojo clásico. Se descarga o se comparte directo.
- **Instalable como app (PWA):** botón "Instalar app" en Android y PC; en iPhone, desde Safari con "Agregar a inicio". Funciona sin internet y se actualiza sola.
- **Recordatorio de respaldo:** si pasan 30 días sin descargar un respaldo, aparece un aviso con un botón para hacerlo.
- **Aviso de privacidad** al pie de la página y en la Ayuda.
- **Tipografías propias:** ya no se cargan desde Google Fonts.
- Ayuda: nuevas secciones sobre QR, imagen para compartir, instalación y privacidad.

### English
- **Move with QR:** builds a code with your whole collection. Scanning it with another phone's camera opens HomeDex and asks whether to merge or replace. The link can also be copied or shared. The data travels inside the code, through no server.
- **Share image:** a Pokédex with your name, completion percentage, caught, missing, shinies and progress by generation, in your partner's colours. With no partner chosen, it offers to pick one or keep the classic red. Download it or share it directly.
- **Installable app (PWA):** "Install app" button on Android and PC; on iPhone, from Safari with "Add to Home Screen". Works offline and updates itself.
- **Backup reminder:** after 30 days without downloading a backup, a notice offers to do it.
- **Privacy notice** in the footer and in Help.
- **Self-hosted fonts:** no longer loaded from Google Fonts.
- Help: new sections on QR, share image, installing and privacy.

---

## v2.0.1 — Seguridad / Security (14/10/2026)

### Español
- **Cabeceras de seguridad** (`vercel.json`): política de contenido que solo permite los scripts propios de la página, bloqueo de incrustación en otros sitios y de permisos que la app no usa (cámara, micrófono, ubicación, etc.).
- Refuerzo en la forma de mostrar textos que vienen de archivos externos.
- El archivo de Pokémon GO se acepta hasta 5 MB.
- Nuevo `SECURITY.md` con qué datos maneja HomeDex, qué medidas tiene y cómo reportar un problema.

### English
- **Security headers** (`vercel.json`): a content policy that only allows the page's own scripts, blocks embedding in other sites and permissions the app does not use (camera, microphone, location, etc.).
- Hardened display of text coming from external files.
- The Pokémon GO file is accepted up to 5 MB.
- New `SECURITY.md` describing what data HomeDex handles, its safeguards and how to report a problem.

---

## v2.0 — Escanear partida / Scan save file (14/10/2026)

### Español
- **Escanear partida (Beta):** lee partidas guardadas y marca lo que tenés. Se pueden arrastrar varios archivos a la vez o elegirlos desde el explorador.
  - **Game Boy / Color:** Rojo, Azul, Amarillo, Oro, Plata, Cristal.
  - **Game Boy Advance:** Rubí, Zafiro, Esmeralda, Rojo Fuego, Verde Hoja.
  - **Nintendo DS:** Diamante, Perla, Platino, Oro HeartGold, Plata SoulSilver, Negro, Blanco, Negro 2, Blanco 2.
  - **Nintendo 3DS:** X, Y, Rubí Omega, Zafiro Alfa, Ultrasol, Ultraluna (Sol y Luna sin probar con partidas reales).
  - **Nintendo Switch:** Diamante Brillante, Perla Reluciente, Leyendas: Arceus, Escarlata, Púrpura, Leyendas: Z-A (en estos cuatro últimos se toman los Pokémon guardados, no la Pokédex).
  - Formatos de emulador y de Action Replay (`.sav`, `.srm`, `.dat`, `.dsv`, `.dst`, `.duc`) y el archivo `main` de 3DS/Switch.
  - Muestra Pokédex, equipo, cajas y shiny de cada partida; solo suma, nunca desmarca.
  - Aviso cuando una partida parece modificada con trucos.
- **Pokémon GO (Beta):** lee el `Gameplay.txt` de los datos personales que entrega Niantic.
- Número de versión visible arriba y al pie de la página.
- Ayuda actualizada con GIFs de ejemplo.

### English
- **Scan save file (Beta):** reads save files and marks what you have. Drop several files at once or pick them from the file browser.
  - **Game Boy / Color:** Red, Blue, Yellow, Gold, Silver, Crystal.
  - **Game Boy Advance:** Ruby, Sapphire, Emerald, FireRed, LeafGreen.
  - **Nintendo DS:** Diamond, Pearl, Platinum, HeartGold, SoulSilver, Black, White, Black 2, White 2.
  - **Nintendo 3DS:** X, Y, Omega Ruby, Alpha Sapphire, Ultra Sun, Ultra Moon (Sun and Moon not yet tested with real saves).
  - **Nintendo Switch:** Brilliant Diamond, Shining Pearl, Legends: Arceus, Scarlet, Violet, Legends: Z-A (for the last four, stored Pokémon are used, not the Pokédex).
  - Emulator and Action Replay formats (`.sav`, `.srm`, `.dat`, `.dsv`, `.dst`, `.duc`) and the 3DS/Switch `main` file.
  - Shows each save's Pokédex, party, boxes and shinies; it only adds, never unmarks.
  - Warning when a save looks modified with cheats.
- **Pokémon GO (Beta):** reads the `Gameplay.txt` from the personal data Niantic provides.
- Version number shown at the top and in the footer.
- Help updated with example GIFs.

---

## v1.x — Primeras versiones / First versions (octubre 2026, sin número / unnumbered)

### Español
- Pokédex Nacional completa (1–1025) con formas regionales.
- Por Pokémon: cantidad en HOME, cantidad de shiny, región de origen, idiomas, juegos de origen y naturaleza.
- Compañero: la página toma los colores del Pokémon elegido.
- Resumen con porcentajes por generación, ShinyDex, legendarios, singulares, regionales e iniciales.
- Filtros por generación, tipo (con segundo tipo opcional), Pokédex regional de cada juego, legendarios, singulares, iniciales, paradoja y formas regionales; vistas Todos, MissingDex, Capturados y ShinyDex.
- Buscador por nombre (español o inglés), número o tipo, con opción de mostrar la línea evolutiva.
- Ficha con línea evolutiva, cómo conseguirlo en Pokémon GO, ubicaciones en los juegos y exclusivos de versión.
- Marcar muchos a la vez, importar números, respaldo descargable y exportación a CSV.
- Modo oscuro, nombre personalizado e idioma español/inglés.

### English
- Full National Pokédex (1–1025) with regional forms.
- Per Pokémon: count in HOME, shiny count, origin region, languages, origin games and nature.
- Partner: the page takes on the chosen Pokémon's colours.
- Summary with percentages by generation, ShinyDex, legendaries, mythicals, regionals and starters.
- Filters by generation, type (with optional second type), each game's regional Pokédex, legendaries, mythicals, starters, paradox and regional forms; All, MissingDex, Caught and ShinyDex views.
- Search by name (Spanish or English), number or type, with an option to show the evolution line.
- Entry with evolution line, how to get it in Pokémon GO, locations in the games and version exclusives.
- Bulk marking, number import, downloadable backup and CSV export.
- Dark mode, custom name and Spanish/English language.
