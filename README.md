# 📄 Invoice Finder App (React + Vite)

Esta es una aplicación **React** creada con **Vite** que permite consultar facturas a través de un buscador con filtros.  
La aplicación se comunica con una API construida en **Ruby on Rails**.

---

## 🚀 Requisitos previos

- **Node.js** `20.19.5`
- **npm** (incluido con Node)

---

## ⚙️ Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone git@github.com:NaimGrimaldo/invoice-finder.git
cd invoice-finder
npm install
```

---

## ▶️ Ejecución en desarrollo

Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

La aplicación correrá por defecto en:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 🔌 Configuración de la API

La app se conecta a una API en Ruby.  
La **URL base** de la API se configura en:

```
src/config.ts
```

Ejemplo:

```ts
export const API_BASE_URL = "http://localhost:3000";
```

> ⚠️ Si tu API corre en otro host o puerto, **modifica este archivo** antes de ejecutar el proyecto.

---

## 📑 Funcionalidades principales

- **Página principal (HomePage):**
  - Buscador de facturas
  - Filtros por fechas
  - Resultados en tabla
  - Paginación con actualización de datos desde la API

---

## 📦 Scripts disponibles

- `npm run dev` → Inicia el servidor de desarrollo en [http://localhost:5173](http://localhost:5173)  
---

## 🛠️ Tecnologías usadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [Material UI](https://mui.com/) (interfaz de usuario)  
- [TypeScript](https://www.typescriptlang.org/)  
- API en [Ruby on Rails](https://rubyonrails.org/)  

---

## 📌 Notas

- Esta app está pensada solo para uso **local**.  
- Verifica que el backend en Ruby esté corriendo antes de usar el buscador.  
- Si la API requiere autenticación o cabeceras personalizadas, ajusta la función `fetchInvoices` en `HomePage.tsx`.  

---


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
