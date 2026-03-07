# Franco Nicolas Jones — Portfolio

Portfolio personal de **Franco Nicolas Jones** (IT Systems Engineer / Software Engineer). Pensado para reclutadores, empresas y clientes (empleo o freelance).

**Sitio en vivo:** [francojones.netlify.app](https://francojones.netlify.app)

---

## Stack

- [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) 19
- [Styled Components](https://styled-components.com/)
- [React Awesome Reveal](https://react-awesome-reveal.morello.dev/)
- [i18next](https://www.i18next.com/) (ES / EN / DE)
- [EmailJS](https://www.emailjs.com/) para el formulario de contacto
- [React Hot Toast](https://react-hot-toast.com/)

---

## Características

- Build y HMR rápidos con Vite
- Diseño responsive
- Animaciones al scroll
- **Proyectos destacados** en carousel y **todos los proyectos** en grid
- Secciones: Servicios, Soporte IT, Tecnologías, Contacto
- Formulario de contacto con EmailJS
- Selector de idioma (ES / EN / DE)
- Navegación por anclas y header que se oculta al bajar

---

## Cómo ejecutarlo en local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Zero9BSC/Portfolio_Jones_Franco.git
   cd Portfolio_Jones_Franco
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear `.env` en la raíz (ver `.env.example`):
   ```env
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

4. Arrancar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abrir [http://localhost:5173](http://localhost:5173).

---

## Scripts

| Comando       | Descripción              |
|---------------|--------------------------|
| `npm run dev` | Servidor de desarrollo   |
| `npm run build` | Build de producción    |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Ejecutar ESLint         |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Banner/       # Header, Hero (ProfComponent)
│   ├── Footer/       # Contacto + formulario
│   ├── Projects/     # Carousel destacados + grid todos
│   ├── Service/      # Servicios, Soporte IT
│   └── Technologies/
├── i18n/             # es.json, en.json, de.json
├── App.jsx
├── main.jsx
└── index.css
```

Más detalle en [docs/AUDIT.md](docs/AUDIT.md).

---

## Despliegue (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- Variables de entorno: configurar las mismas `VITE_*` que en `.env` en el panel de Netlify.

---

## Contacto

- **LinkedIn:** [linkedin.com/in/franco-jones](https://www.linkedin.com/in/franco-jones/)
- **GitHub:** [github.com/Zero9BSC](https://github.com/Zero9BSC)
- **Portfolio:** [francojones.netlify.app](https://francojones.netlify.app)

---

## Licencia

[MIT](LICENSE).
