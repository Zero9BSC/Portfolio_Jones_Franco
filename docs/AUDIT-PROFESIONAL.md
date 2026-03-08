# Auditoría profesional del portfolio — Franco Nicolas Jones

**Objetivo:** Que el portfolio te venda como profesional (reclutadores, empresas, clientes freelance).  
**Fecha:** 2025

---

## 1. Resumen ejecutivo

El portfolio está bien construido a nivel técnico (React, Vite, i18n, SEO base, proyectos destacados, CTA y formulario). Para **venderte mejor como profesional** faltan sobre todo: **prueba social** (testimonios / resultados), **credibilidad explícita** (años de experiencia, certificaciones en la página), **diferenciación** en el copy (beneficios concretos, no solo descripción del rol) y algunos **detalles de conversión y confianza** (enlaces reales a Workana/Upwork, campo asunto en el formulario, mejor accesibilidad).

A continuación: qué está bien, qué falta y mejoras priorizadas.

---

## 2. Lo que ya funciona a tu favor

| Área | Estado |
|------|--------|
| **Stack y despliegue** | React 19, Vite, 6 idiomas, Netlify, dominios propios (.com, .dev). Transmite profesionalidad técnica. |
| **Estructura** | Hero → Servicios → IT Support → Tecnologías → Proyectos (destacados + todos) → CTA → Contacto. Flujo claro. |
| **Doble perfil** | Servicios (dev) + IT Support bien separados; encaja con empleo y con freelance. |
| **Proyectos** | Carousel de 8 destacados + grid de 12. Enlaces a sitios reales (Buran Tattoo, ITSI, Kaisen, etc.) dan credibilidad. |
| **CTAs** | Botón verde "Contactar" en header, CTA strip antes del footer, "Enviar mensaje" en formulario. |
| **Tagline y copy** | "Available for full-time, contract, or freelance" deja claro a quién te diriges. |
| **SEO** | Canonical, sitemap, robots, OG, JSON-LD, dominio principal .com. Bien alineado con tus dominios. |
| **Contacto** | Email, teléfono/WhatsApp, LinkedIn, GitHub, formulario con EmailJS. |

---

## 3. Oportunidades de mejora (por área)

### 3.1 Primera impresión (Hero)

- **Falta un “número” o ancla de credibilidad:** Años de experiencia (ej. “5+ years”) o “X proyectos entregados” no aparecen en la página. Un dato corto bajo el tagline refuerza confianza.
- **Ubicación / disponibilidad:** El copy dice “Europe and New Zealand” pero no se ve de un vistazo dónde estás ahora (ej. “Based in Germany · Open to NZ relocation”). Ayuda a reclutadores que filtran por ubicación.
- **Foto de perfil:** El `alt` es solo "profile". Un `alt` descriptivo (ej. "Franco Nicolas Jones, Software Engineer") mejora accesibilidad y contexto si la imagen no carga.
- **CV:** El enlace del botón “Descargar CV” va a Google Drive. Conviene que sea estable y, si aplica, que tengas versión EN para Seek/NZ.

**Propuestas:**  
- Añadir una línea tipo “5+ years of experience” (o “X projects delivered”) en el hero, vía i18n.  
- Añadir ubicación/disponibilidad corta en intro (i18n).  
- Mejorar `alt` de la imagen de perfil.  
- Revisar que el enlace del CV sea el definitivo y, si usas varios idiomas, considerar CV EN para mercados anglófonos.

---

### 3.2 Confianza y prueba social

- **No hay testimonios ni referencias** en la página. Para freelance y contratación, 1–3 frases de clientes o compañeros aumentan mucho la credibilidad.
- **Certificaciones y cursos** (CCNA en progreso, LinkedIn Learning, FreeCodeCamp, etc.) no se muestran. Un bloque corto “Formación / Certificaciones” o una línea bajo el hero refuerza que sigues formándote.
- **Empresas o sectores** donde has trabajado (salud, estudios contables, IT) no se mencionan de forma explícita. Una frase tipo “Experience in healthcare, professional services, and B2B” ayuda a que visitantes se identifiquen.

**Propuestas:**  
- Añadir sección “Testimonials” o “What others say” con 2–3 frases (nombre, rol o empresa, y enlace a LinkedIn si procede).  
- Añadir bloque “Certifications & learning” (o 1 línea en hero/footer) con 2–4 ítems (ej. CCNA in progress, LinkedIn Learning AI, FreeCodeCamp).  
- Incluir en el copy (hero o “About”) una línea sobre sectores o tipos de cliente (healthcare, B2B, etc.).

---

### 3.3 Conversión y contacto

- **Workana y Upwork** en el footer enlazan a la página principal de cada plataforma, no a tu perfil. Quien viene de ahí no encuentra continuidad; quien no, no descubre tu perfil.
- **Formulario:** Solo nombre, email y mensaje. Un campo “Asunto” o “Tipo de consulta” (empleo / proyecto / presupuesto) ayuda a priorizar y responder mejor.
- **Segundo teléfono:** Tu CV menciona dos números; en la web solo aparece uno. Si quieres dar ambas vías, se puede mostrar el segundo (o dejarlo solo en el CV).

**Propuestas:**  
- Sustituir los enlaces de Workana y Upwork por las URLs de tu perfil en cada plataforma.  
- Añadir campo “Asunto” o “Tipo de consulta” al formulario y a la plantilla de EmailJS.  
- (Opcional) Añadir segundo número o dejarlo solo en “Descargar CV” según prefieras.

---

### 3.4 Contenido y copy (diferenciación)

- **Servicios e IT Support** describen bien qué haces, pero poco **qué gana el cliente/empresa** (menos tiempo de soporte, menos bugs, escalabilidad, etc.). Un “beneficio” por tarjeta mejora la venta.
- **Intro:** Es clara y profesional; se puede reforzar con una frase de “valor” (ej. “I help teams ship reliable software and keep their systems running”).
- **Proyectos:** Las descripciones son técnicas; en algunos casos se podría añadir 1 línea de **resultado** o **contexto** (ej. “Used by X users”, “Reduced manual work for the team”) si lo tienes.

**Propuestas:**  
- En las tarjetas de Servicios e IT Support, añadir en i18n una línea de beneficio por ítem (o subtexto bajo la descripción).  
- Añadir en intro (i18n) una frase de valor única.  
- En proyectos destacados, donde aplique, añadir en i18n una línea de resultado o contexto.

---

### 3.5 UX y navegación

- **Scroll al hacer clic en anclas:** Comportamiento correcto con `#home`, `#service`, etc. Revisar en móvil que el header fijo no tape el título de la sección al hacer scroll.
- **Idiomas:** 6 idiomas y selector claro. Bien para mercados internacionales.
- **Botón “Subir”:** Flotante, visible. Correcto.
- **Carga de imágenes:** Proyectos usan Imgur/Cloudinary; considerar `loading="lazy"` en todas las imágenes que estén fuera del viewport inicial (ya aplicado en el grid de “Todos los proyectos”).

**Propuestas:**  
- Comprobar en móvil el scroll a anclas y el espacio bajo el header.  
- Mantener lazy loading en imágenes del grid; en el carousel se puede dejar eager para el slide visible.

---

### 3.6 Proyectos

- **Enlaces de demo/código** presentes en la mayoría. Los que no tienen demo (Kaisen Gestión, Chubutex) están bien como “en desarrollo” o “interno”.
- **Imágenes:** Algunas URLs usan `imgur.com` sin `i.imgur.com`; las que ya usan `i.imgur.com` cargan mejor. Unificar a formato directo donde aplique.
- **Orden y destacados:** Los 8 del carousel coinciden con el CV. Bien para coherencia con aplicaciones.

**Propuestas:**  
- Unificar URLs de Imgur a `i.imgur.com/ID.png` (o .jpg) donde falte.  
- Opcional: en proyectos con métrica conocida (usuarios, tiempo ahorrado), añadirla en la descripción vía i18n.

---

### 3.7 SEO y técnico

- **Dominios:** Canonical y sitemap apuntan a `franconicolasjones.com`. Correcto.
- **Meta y JSON-LD:** Título, descripción, Person schema con nombre, jobTitle, url, email, sameAs. Bien.
- **Falta:** No hay `author` en meta; no hay `og:locale:alternate` para otros idiomas (opcional, más relevante si tuvieras URLs por idioma).

**Propuestas:**  
- Añadir `<meta name="author" content="Franco Nicolas Jones">`.  
- Cuando tengas una imagen OG dedicada 1200×630, actualizar `og:image` y `twitter:image`.

---

### 3.8 Accesibilidad

- **Idioma y RTL:** `lang` y `dir` se actualizan con el selector (incl. árabe). Bien.
- **Selector de idioma:** Tiene `aria-haspopup`, `aria-expanded`, `aria-label`, `role="listbox"` y `role="option"`. Bien.
- **Imágenes:** Proyectos usan `alt=""` (decorativas en contexto de carousel/grid); la foto de perfil tiene `alt="profile"`. Mejorar el alt de la foto de perfil.
- **Contraste:** Verde #01be96 sobre fondos oscuros suele cumplir; conviene validar con Lighthouse o herramienta de contraste (WCAG AA).
- **Focus visible:** Revisar que botones y enlaces tengan outline/focus visible al navegar con teclado.

**Propuestas:**  
- Alt de la foto de perfil más descriptivo.  
- Revisar contraste (Lighthouse / DevTools).  
- Asegurar `:focus-visible` en navegación y botones.

---

## 4. Mejoras propuestas priorizadas

### Rápidas (poco esfuerzo, alto impacto)

1. **Enlaces reales a Workana y Upwork** en el footer (tu perfil, no la home de la plataforma).  
2. **Añadir “5+ years of experience” (o similar)** en el hero, vía i18n (todas las lenguas).  
3. **Mejorar `alt` de la foto de perfil** (ej. “Franco Nicolas Jones, Software Engineer”).  
4. **Añadir `<meta name="author" content="Franco Nicolas Jones">`** en `index.html`.  
5. **Ubicación/disponibilidad** en una línea del hero (ej. “Based in Germany · Open to New Zealand relocation”), vía i18n.

### Medio plazo (una tarde o poco más)

6. **Campo “Asunto” o “Tipo de consulta”** en el formulario de contacto (y en EmailJS).  
7. **Sección “Certifications & learning”** (o 1 línea bajo el hero): 2–4 ítems (CCNA, LinkedIn Learning, FreeCodeCamp, etc.).  
8. **Una frase de beneficio** por tarjeta en Servicios e IT Support (i18n).  
9. **Unificar URLs de Imgur** a `i.imgur.com` donde aún no lo esté.  
10. **Testimonios:** 2–3 frases con nombre y rol (o “Client” / “Former colleague”) y, si quieres, enlace a LinkedIn.

### Largo plazo (cuando tengas material)

11. **Imagen OG dedicada** 1200×630 (nombre + rol + marca).  
12. **Una línea de resultado** en descripciones de proyectos donde tengas datos (usuarios, tiempo ahorrado, etc.).  
13. **Blog o “Articles”** (opcional): 1–2 posts técnicos o de experiencia para SEO y autoridad.  
14. **Lighthouse en producción** y corrección de ítems en rojo/amarillo (rendimiento, accesibilidad, buenas prácticas).

---

## 5. Checklist “¿Me vende bien el portfolio?”

- [ ] Un visitante entiende en **&lt; 10 segundos** quién eres y qué ofreces (empleo + freelance).  
- [ ] Hay al menos **un dato de credibilidad** visible en la primera pantalla (años exp, proyectos, certificación).  
- [ ] **Contacto** es obvio (botón + formulario + email/teléfono).  
- [ ] Los **proyectos** llevan a sitios o repos reales.  
- [ ] El **CV** se descarga desde un enlace estable y actualizado.  
- [ ] **Workana/Upwork** enlazan a tus perfiles reales.  
- [ ] El **formulario** permite indicar tipo de consulta o asunto.  
- [ ] **Testimonios o referencias** (aunque sean 2) dan prueba social.  
- [ ] **SEO** apunta a un solo dominio canónico y tiene sitemap/robots/OG.  
- [ ] **Idiomas** cubren los mercados que te interesan (EN, ES, etc.).  

Con las mejoras rápidas y de medio plazo anteriores, este checklist quedaría cubierto en su mayoría.

---

## 6. Conclusión

El portfolio ya te presenta como desarrollador e ingeniero IT de forma seria y ordenada. Para que **te venda aún mejor como profesional**, lo más rentable es:  
- **Credibilidad visible** (años de experiencia, certificaciones, sectores).  
- **Prueba social** (testimonios o referencias).  
- **Conversión clara** (perfiles freelance reales, formulario con asunto/tipo de consulta).  
- **Copy orientado a beneficios** (qué gana el cliente/empresa al trabajar contigo).  
- **Detalles técnicos y de accesibilidad** (alt, author, contraste, focus).

Priorizando las mejoras rápidas de la sección 4, el sitio gana fuerza con poco esfuerzo; luego se pueden ir añadiendo testimonios, certificaciones y refinamientos de copy según tengas material.

---

## 7. Implementado en esta auditoría

- **Meta author** en `index.html`: `<meta name="author" content="Franco Nicolas Jones">`.
- **Alt de la foto de perfil** mejorado: "Franco Nicolas Jones, Software Engineer and IT Systems Engineer".
- **Líneas de credibilidad en el hero** (i18n en los 6 idiomas):
  - `intro.yearsExp`: ej. "5+ years of experience" / "Más de 5 años de experiencia".
  - `intro.location`: ej. "Based in Germany · Open to New Zealand relocation" / "Resido en Alemania · Abierto a reubicación en Nueva Zelanda".
- Puedes editar estos textos en `src/i18n/*.json` si quieres cambiar años, ubicación o redacción.
