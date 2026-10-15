# HomeDex — Historial de versiones / Version history

Cada versión tiene su texto en español y en inglés. / Each version has its notes in Spanish and English.

- **0.x** — desarrollo antes de publicar en GitHub / development before publishing on GitHub
- **1.x** — desde la publicación hasta las mejoras de seguridad / from publication to the security improvements
- **2.x** — desde las mejoras de seguridad / since the security improvements
- El tercer número (X.X.1, X.X.2…) marca mejoras menores o arreglos. / The third number (X.X.1, X.X.2…) marks minor improvements or fixes.

---

## v2.2.1 — Arreglos en celulares e instalación en iPhone / Phone fixes and iPhone install (15/10/2026)

### Español
- **Filtros en el celular:** al abrir "Filtros" después de bajar por la lista, el panel aparecía fuera de la pantalla. Ahora se abre donde estás, se desplaza por dentro y el buscador con el botón "Ocultar filtros" queda siempre a la vista.
- **Celular en horizontal:** los filtros ocupaban casi toda la pantalla y no se podían ocultar. Ahora se pliegan igual que en vertical.
- **Instalar en iPhone y iPad:** Safari no ofrece el aviso de instalación que muestran Android y Chrome, así que el botón "Instalar app" ahora aparece también en iOS y explica los pasos (Compartir → Agregar a inicio).
- Aviso en esos pasos: en iPhone la app instalada guarda sus datos aparte de Safari; se ofrece descargar el respaldo para cargarlo después dentro de la app.
- Etiquetas para que iOS la abra como app a pantalla completa, con el nombre "HomeDex".

### English
- **Filters on phones:** opening "Filters" after scrolling down the list showed the panel off-screen. It now opens where you are, scrolls inside itself, and the search box with the "Hide filters" button always stays in view.
- **Phones in landscape:** the filters took up almost the whole screen and could not be hidden. They now fold just like in portrait.
- **Install on iPhone and iPad:** Safari does not offer the install prompt that Android and Chrome show, so the "Install app" button now also appears on iOS and explains the steps (Share → Add to Home Screen).
- Note in those steps: on iPhone the installed app keeps its data separate from Safari; it offers to download a backup to load afterwards inside the app.
- Tags so iOS opens it as a full-screen app named "HomeDex".

---

## v2.2.0 — Íconos en pixel art / Pixel-art icons (15/10/2026)

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

## v2.1.0 — QR, imagen para compartir y app instalable / QR, share image and installable app (15/10/2026)

### Español
- **Pasar con QR:** genera un código con toda tu colección. Al escanearlo con la cámara de otro celular se abre HomeDex y pregunta si combinar o reemplazar. También se puede copiar o compartir el enlace. Los datos viajan dentro del código, sin servidores.
- **Imagen para compartir:** una Pokédex con tu nombre, porcentaje completado, capturados, faltantes, shiny y avance por generación, con los colores de tu compañero. Si no tenés compañero, te ofrece elegir uno o seguir con el rojo clásico. Se descarga o se comparte directo.
- **Instalable como app (PWA):** botón "Instalar app" en Android y PC. Funciona sin internet y se actualiza sola.
- **Recordatorio de respaldo:** si pasan 30 días sin descargar un respaldo, aparece un aviso con un botón para hacerlo.
- **Aviso de privacidad** al pie de la página y en la Ayuda.
- **Tipografías propias:** ya no se cargan desde Google Fonts.
- Ayuda: nuevas secciones sobre QR, imagen para compartir, instalación y privacidad.

### English
- **Move with QR:** builds a code with your whole collection. Scanning it with another phone's camera opens HomeDex and asks whether to merge or replace. The link can also be copied or shared. The data travels inside the code, through no server.
- **Share image:** a Pokédex with your name, completion percentage, caught, missing, shinies and progress by generation, in your partner's colours. With no partner chosen, it offers to pick one or keep the classic red. Download it or share it directly.
- **Installable app (PWA):** "Install app" button on Android and PC. Works offline and updates itself.
- **Backup reminder:** after 30 days without downloading a backup, a notice offers to do it.
- **Privacy notice** in the footer and in Help.
- **Self-hosted fonts:** no longer loaded from Google Fonts.
- Help: new sections on QR, share image, installing and privacy.

---

## v2.0.0 — Seguridad / Security (14/10/2026)

### Español
- **Cabeceras de seguridad** (`vercel.json`): política de contenido que solo permite los scripts propios de la página, bloqueo de incrustación en otros sitios y de permisos que la app no usa (cámara, micrófono, ubicación, etc.).
- Refuerzo en la forma de mostrar textos que vienen de archivos externos.
- El archivo de Pokémon GO se acepta hasta 5 MB.
- Nuevo `SECURITY.md` con qué datos maneja HomeDex, qué medidas tiene y cómo reportar un problema.
- Desde esta versión, `index.html` y `vercel.json` se generan juntos y deben subirse juntos.

### English
- **Security headers** (`vercel.json`): a content policy that only allows the page's own scripts, blocks embedding in other sites and permissions the app does not use (camera, microphone, location, etc.).
- Hardened display of text coming from external files.
- The Pokémon GO file is accepted up to 5 MB.
- New `SECURITY.md` describing what data HomeDex handles, its safeguards and how to report a problem.
- From this version on, `index.html` and `vercel.json` are generated together and must be uploaded together.

---

## v1.3.0 — Escanear partida / Scan save file (14/10/2026)

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

## v1.2.0 — Búsqueda y segundo tipo / Search and second type (09/10/2026)

### Español
- **Segundo tipo opcional** en el filtro (el orden de los dos tipos da igual).
- **Buscador ampliado:** además del nombre, acepta el número de la Pokédex Nacional (las formas regionales aparecen con su especie) o el nombre de un tipo.
- **"Con su línea evolutiva":** muestra también las preevoluciones y evoluciones de lo que buscás.

### English
- **Optional second type** in the filter (the order of the two types does not matter).
- **Wider search:** besides the name, it takes the National Dex number (regional forms show up with their species) or a type name.
- **"With its evolution line":** also shows the pre-evolutions and evolutions of what you search for.

---

## v1.1.2 — Nombres de lugares completos / Complete location names (06/10/2026)

### Español
- Completados los nombres en español de los lugares que todavía faltaban en las ubicaciones de los juegos más viejos.

### English
- Filled in the Spanish names of the locations still missing for the older games.

---

## v1.1.1 — Ubicaciones traducidas / Translated locations (06/10/2026)

### Español
- Ubicaciones de Diamante Brillante/Perla Reluciente, Leyendas: Arceus, Escarlata/Púrpura y Leyendas: Z-A traducidas al inglés.
- Nombres en español de los lugares de Let's Go Pikachu/Eevee.

### English
- Locations for Brilliant Diamond/Shining Pearl, Legends: Arceus, Scarlet/Violet and Legends: Z-A translated into English.
- Spanish names for the Let's Go Pikachu/Eevee locations.

---

## v1.1.0 — Español / English (06/10/2026)

### Español
- **Selector ES | EN** en el encabezado: toda la interfaz, la ayuda y los datos (nombres de Pokémon, tipos, juegos, cómo conseguirlo en Pokémon GO) en español o en inglés.
- El buscador acepta nombres en los dos idiomas.

### English
- **ES | EN switch** in the header: the whole interface, the help and the data (Pokémon names, types, games, how to get it in Pokémon GO) in Spanish or English.
- Search accepts names in both languages.

---

## v1.0.2 — Ajustes de diseño / Layout tweaks (06/10/2026)

### Español
- Los contadores de cada tarjeta entran en una sola línea.
- Textos legales del pie de página a todo el ancho.

### English
- Each card's counters fit on a single line.
- Footer legal notes span the full width.

---

## v1.0.1 — Estadísticas de visitas / Visit statistics (06/10/2026)

### Español
- Vercel Analytics para contar visitas a la página. No registra lo que cada persona marca.

### English
- Vercel Analytics to count page visits. It does not record what each person marks.

---

## v1.0.0 — Publicación / Public release (06/10/2026)

### Español
- Primera versión publicada en GitHub y Vercel: https://pokehomedex.vercel.app
- Incluye todo lo hecho en las versiones 0.x.

### English
- First version published on GitHub and Vercel: https://pokehomedex.vercel.app
- Includes everything built in the 0.x versions.

---

## v0.8 — Resumen y Ayuda / Summary and Help (06/10/2026)

### Español
- Resumen con Legendarios, Singulares, Regionales e Iniciales.
- Tabla por generación con dos decimales y barras de avance.
- Botón de **Ayuda** con guías: lo básico, la ficha, filtros y búsqueda, combinaciones útiles y el resumen.
- Ícono de la pestaña (favicon).

### English
- Summary with Legendaries, Mythicals, Regionals and Starters.
- Generation table with two decimals and progress bars.
- **Help** button with guides: the basics, the entry, filters and search, useful combinations and the summary.
- Tab icon (favicon).

---

## v0.7 — Dónde encontrarlos / Where to find them (06/10/2026)

### Español
- Ubicaciones en estado salvaje por juego dentro de la ficha (PokeAPI; WikiDex para los juegos que PokeAPI no cubre).
- Exclusivos de cada versión.
- Botón para escuchar el grito de cada Pokémon.

### English
- Wild locations per game in the entry (PokeAPI; WikiDex for the games PokeAPI does not cover).
- Version exclusives.
- Button to hear each Pokémon's cry.

---

## v0.6 — Formas regionales / Regional forms (06/10/2026)

### Español
- Formas regionales (Alola, Galar, Hisui, Paldea) con seguimiento propio y su propio filtro, que incluye las especies que solo evolucionan desde ellas.
- Color de la región de origen en cada tarjeta.

### English
- Regional forms (Alola, Galar, Hisui, Paldea) tracked on their own, with their own filter, which includes the species that only evolve from them.
- Origin-region colour on every card.

---

## v0.5 — Compañero / Partner (05/10/2026)

### Español
- Elegí un Pokémon compañero y la página toma sus colores (en modo claro y oscuro).

### English
- Choose a partner Pokémon and the page takes on its colours (in light and dark mode).

---

## v0.4 — Naturalezas / Natures (05/10/2026)

### Español
- Naturaleza de cada Pokémon en la ficha.
- Pokémon Champions agregado a la lista de juegos.
- Contador de la Pokédex elegida (tamaño de la dex y capturados sobre ese total).
- Arreglo: Victini (#000 en las Pokédex de Teselia) aparecía mal en esos filtros.

### English
- Each Pokémon's nature in the entry.
- Pokémon Champions added to the game list.
- Counter for the chosen Pokédex (dex size and caught out of that total).
- Fix: Victini (#000 in the Unova dexes) showed up wrong in those filters.

---

## v0.3 — Tema e idiomas de origen / Theme and origin languages (05/10/2026)

### Español
- Botón para cambiar entre modo claro y oscuro, con mejor contraste.
- Idioma y juego de origen de cada Pokémon.
- Los respaldos y el CSV incluyen los datos nuevos.

### English
- Light/dark mode toggle, with better contrast.
- Each Pokémon's language and origin game.
- Backups and CSV include the new data.

---

## v0.2 — Pokédex regionales / Regional Pokédex (05/10/2026)

### Español
- Pokédex regional de cada juego como filtro.
- Varias generaciones a la vez en el filtro.
- El filtro de iniciales incluye la línea completa.
- Megaevoluciones y Dinamax/Gigamax en la ficha.
- Respaldo descargable.

### English
- Each game's regional Pokédex as a filter.
- Several generations at once in the filter.
- The starters filter includes the whole line.
- Mega Evolutions and Dynamax/Gigantamax in the entry.
- Downloadable backup.

---

## v0.1 — Primera versión / First version (05/10/2026)

### Español
- Paso de la planilla de Google Sheets a una página web.
- Pokédex Nacional completa (1–1025): capturados, shiny y cantidad en HOME.
- Vistas Todos, MissingDex, Capturados y ShinyDex; filtros por generación y tipo.
- Ficha con línea evolutiva y cómo conseguirlo en Pokémon GO.
- Marcar muchos a la vez, importar números y exportar a CSV.

### English
- Moved from the Google Sheets spreadsheet to a web page.
- Full National Pokédex (1–1025): caught, shiny and count in HOME.
- All, MissingDex, Caught and ShinyDex views; filters by generation and type.
- Entry with evolution line and how to get it in Pokémon GO.
- Bulk marking, number import and CSV export.
