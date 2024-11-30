# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Requerimientos cumplidos:
1. Habilitar los cors en el servidor utilizando el paquete de npm. 
2. Usar el paquete pg para conectarse e interactuar con la base de datos. 
3. Crear una ruta GET con Express para devolver los registros de una tabla alojada en  PostgreSQL.
4. Crear una ruta POST con Express que reciba y almacene en PostgreSQL un nuevo registro. 

Ser requiere instalar: Express, pg
"dependencies": {
		"cors": "^2.8.5",
		"dotenv": "^16.4.5",
		"express": "^4.21.1",
		"pg": "^8.13.1"
}
  "dependencies": {
    "axios": "^1.7.8",
    "bootstrap": "^5.3.3",
    "react": "^18.3.1",
    "react-bootstrap": "^2.10.6",
    "react-dom": "^18.3.1"
  },

