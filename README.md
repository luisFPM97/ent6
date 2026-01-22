# E-Commerce - Estilo Mercado Libre

Aplicación de e-commerce moderna con diseño inspirado en Mercado Libre, desarrollada con React + Vite.

## 🚀 Características

- **Diseño estilo Mercado Libre**: Interfaz moderna y familiar inspirada en el marketplace líder de América Latina
- **Modo Demo**: Funciona completamente sin backend - simula datos de productos y autenticación
- **Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Sistema de Filtros**: Filtra productos por categoría, precio y búsqueda de texto
- **Carrito de Compras**: Gestión completa del carrito con Redux
- **Autenticación Simulada**: Login y registro que funcionan sin backend
- **Footer Completo**: Footer informativo con enlaces y redes sociales

## 🎨 Paleta de Colores

- Amarillo ML: `#FFE600`
- Azul ML: `#3483FA`
- Verde ML: `#00A650`
- Gris de fondo: `#EBEBEB`

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🔑 Modo Demo

La aplicación funciona completamente sin backend:
- **Productos**: Se cargan datos simulados si la API no responde
- **Login/Registro**: Cualquier credencial será aceptada en modo demo
- **Usuario demo**: Se crea automáticamente al iniciar sesión

## 🛠️ Tecnologías

- React 18
- React Router DOM
- Redux Toolkit
- React Hook Form
- Axios
- Vite

## 📱 Estructura del Proyecto

```
src/
├── components/
│   ├── Home/           # Componentes de la página principal
│   ├── Login/          # Formularios de autenticación
│   ├── Register/       # Registro de usuarios
│   └── shared/         # Componentes compartidos (Header, Footer)
├── hooks/              # Custom hooks
├── pages/              # Páginas principales
├── store/              # Redux store y slices
└── utils/              # Utilidades y datos simulados
```

## 🎯 Características Destacadas

### Datos Simulados
- 12 productos de ejemplo con imágenes reales
- 8 categorías de productos
- Sistema de fallback automático si la API falla

### Autenticación Flexible
- Funciona con backend real si está disponible
- Modo demo sin backend
- Persistencia en localStorage

### Diseño Responsive
- Mobile First
- Breakpoints optimizados
- Grid responsive para productos

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias y mejoras.
```
