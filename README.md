# Publimeta S.A.S - Sitio Web

Este proyecto es un sitio web informativo para **Publimeta S.A.S**, empresa de publicidad ubicada en Villavicencio, Meta. Fue desarrollado con **Next.js** y **Tailwind CSS**, siguiendo los requisitos planteados en el taller.

---

## 🚀 Tecnologías utilizadas

* [Next.js](https://nextjs.org/) (App Router, frontend estático)
* [React](https://react.dev/) (componentización de UI)
* [Tailwind CSS](https://tailwindcss.com/) (estilos y diseño responsivo)

---

## 📌 Páginas implementadas

* **Inicio (`/`)**

  * Banner principal con eslogan
  * Breve descripción de la empresa
  * Servicios destacados con imágenes
  * Testimonios de clientes

* **Servicios (`/services`)**

  * Listado de servicios ofrecidos
  * Descripción de cada servicio

* **Contacto (`/contact`)**

  * Formulario de contacto (Nombre, Email, Teléfono, Mensaje)
  * Información de contacto directo (teléfono, dirección, correo)
  * Enlaces a redes sociales

* **Nosotros (`/about`)** *(reto extra)*

  * Historia de la empresa
  * Misión, visión y valores
  * Imagen del equipo

---

## 🎨 Características

* Diseño limpio, profesional y responsivo
* Navegación con el sistema de rutas de Next.js
* Uso de componentes reutilizables (`Header`, `Footer`, `ServiceCard`, `Testimonial`)
* Estructura visual consistente en todas las páginas

---

## 📂 Estructura principal

```
src/
 ├── app/
 │   ├── about/
 │   ├── contact/
 │   ├── services/
 │   └── page.jsx   # Home
 ├── components/    # Header, Footer, Cards, etc.
public/
 └── images/        # Recursos de imágenes
```

---

## ⚡ Ejecución del proyecto

1. Clonar el repositorio
2. Instalar dependencias

   ```bash
   npm install
   ```
3. Ejecutar en modo desarrollo

   ```bash
   npm run dev
   ```
4. Abrir en [http://localhost:3000](http://localhost:3000)

---

✍️ Proyecto desarrollado como parte del taller para Publimeta S.A.S
