---
title: Mis estilos en Markdown
description: Este post demuestra todos los estilos disponibles para contenido Markdown usando mis propios estilos css. A continuación, verás ejemplos de cada tipo de elemento y cómo se visualiza con los estilos que he definido.
published: true
locale: es
date: 2025-5-17
tags: ['CSS', 'Estilos', 'Diseño']
---

## Encabezados

Los encabezados proporcionan una estructura jerárquica a tu contenido. Utilizamos tamaños decrecientes con espaciado proporcional para crear una jerarquía visual clara.

### Encabezado de nivel 3

Este es un ejemplo de un encabezado de nivel 3. Notas cómo es más pequeño que el de nivel 2 pero aún destaca del texto normal.

#### Encabezado de nivel 4

Ideal para secciones dentro de secciones y manteniendo jerarquía visual.

## Texto básico y párrafos

Los párrafos son el elemento más común en cualquier documento. Se muestran con espaciado adecuado para mejorar la legibilidad. Aquí tienes algunos ejemplos de formato de texto:

El texto **negrita** se utiliza para enfatizar palabras o frases importantes. El texto en _cursiva_ añade un énfasis más sutil o se utiliza para términos especiales.

También puedes combinar **formatos _anidados_** cuando sea necesario para dar énfasis adicional a partes específicas de una frase.

## Enlaces

Los [enlaces](https://ejemplo.com) son fundamentales para la navegación. Nuestros enlaces utilizan el color primario del tema con un subrayado sutil que se vuelve más prominente al pasar el cursor por encima.

## Listas

### Listas no ordenadas

Las listas no ordenadas utilizan viñetas para cada elemento:

- Primer elemento de la lista
- Segundo elemento de la lista
- Tercer elemento con una lista anidada:
  - Elemento anidado uno
  - Elemento anidado dos
- Cuarto elemento de la lista

### Listas ordenadas

Las listas ordenadas utilizan números para indicar secuencia:

1. Primer paso del proceso
2. Segundo paso del proceso
3. Tercer paso con elementos anidados:
   1. Subpaso uno
   2. Subpaso dos
4. Paso final del proceso

## Citas

Las citas se muestran con un estilo distintivo para diferenciarlas del texto normal:

> Este es un ejemplo de una cita. Las citas son útiles para destacar información importante o para incluir texto de otras fuentes.
>
> Las citas pueden contener múltiples párrafos y mantienen su estilo distintivo a lo largo de todo el bloque.

## Código

### Código en línea

Puedes incluir `código en línea` dentro de un párrafo para destacar nombres de variables, comandos o pequeños fragmentos de código.

### Bloques de código

Para fragmentos de código más largos, utiliza bloques de código con resaltado de sintaxis:

```javascript
// Este es un comentario
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
  return {
    mensaje: `Bienvenido, ${nombre}`,
    timestamp: new Date(),
  };
}

// Llamar a la función
const resultado = saludar('Mundo');
```

## Tablas

Las tablas son útiles para presentar datos estructurados:

| Nombre | Edad | Profesión     |
| ------ | ---- | ------------- |
| Ana    | 28   | Diseñadora    |
| Carlos | 35   | Desarrollador |
| Elena  | 42   | Arquitecta    |
| David  | 31   | Escritor      |

## Imágenes

Las imágenes se muestran con bordes redondeados y adaptadas al ancho del contenedor:

![Descripción de la imagen](https://via.placeholder.com/800x400)

También puedes incluir imágenes con leyendas:

<figure>
  <img src="https://via.placeholder.com/800x400" alt="Imagen con leyenda">
  <figcaption>Esta es una leyenda para explicar la imagen de arriba</figcaption>
</figure>

## Líneas horizontales

Las líneas horizontales ayudan a separar secciones de contenido:

---

## Combinación de elementos

En la práctica, estos elementos se combinan para crear contenido rico y estructurado:

### Proyecto de ejemplo

Este es un ejemplo de cómo podrías documentar un proyecto utilizando varios elementos Markdown:

> **Nota importante:** Este proyecto está en fase beta y puede contener errores.

#### Pasos de instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/proyecto.git
   cd proyecto
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:

   - Crea un archivo `.env` basado en `.env.example`
   - Actualiza los valores según tu entorno

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

#### Estructura del proyecto

| Directorio | Propósito           |
| ---------- | ------------------- |
| `/src`     | Código fuente       |
| `/public`  | Archivos estáticos  |
| `/tests`   | Tests automatizados |
| `/docs`    | Documentación       |

## Estilos en Markdown

```css
.prose {
  overflow-x: hidden;
  word-break: break-word;
}

.prose h1 {
  font-size: 2.25rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: var(--color-foreground);
  line-height: 1.1;
}

.prose h2 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-foreground);
  line-height: 1.2;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.5rem;
}

.prose h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: var(--color-foreground);
  line-height: 1.3;
}

.prose h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--color-foreground);
}

.prose p {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.prose strong {
  font-weight: 600;
  color: var(--color-foreground);
}

.prose em {
  font-style: italic;
}

.prose a {
  color: var(--color-primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: all 0.2s ease;
}

.prose a:hover {
  color: var(--color-primary);
  opacity: 0.85;
  text-decoration-thickness: 2px;
}

.prose ul {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.prose ol {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
  list-style-type: decimal;
}

.prose li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose li > ul,
.prose li > ol {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose blockquote {
  font-style: italic;
  border-left: 3px solid var(--color-border);
  padding-left: 1rem;
  margin-left: 0;
  margin-right: 0;
  background-color: var(--color-muted);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: 1rem 1.5rem;
}

.prose blockquote p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-muted-foreground);
}

.prose code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875em;
  padding: 0.25rem 0.4rem;
  border-radius: var(--radius-sm);
}

.prose pre {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  padding: 1rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.prose pre code {
  color: inherit;
  background-color: transparent;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.7;
}

.prose table {
  width: 100%;
  table-layout: auto;
  text-align: left;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-collapse: collapse;
  overflow-x: auto;
}

.prose thead {
  border-bottom: 2px solid var(--color-border);
}

.prose thead th {
  padding: 0.75rem;
  font-weight: 600;
  vertical-align: bottom;
}

.prose tbody tr {
  border-bottom: 1px solid var(--color-border);
}

.prose tbody tr:last-child {
  border-bottom: none;
}

.prose tbody td {
  padding: 0.75rem;
  vertical-align: top;
}

.prose img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.prose figure {
  margin: 2rem 0;
}

.prose figcaption {
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
}

.prose hr {
  border: 0;
  border-top: 1px solid var(--color-border);
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: var(--color-muted-foreground);
  font-size: 0.875rem;
}

.post-meta .post-date {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.post-meta .post-author {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.post-tag {
  background-color: var(--color-secondary);
  color: var(--color-secondary-foreground);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.post-tag:hover {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
}

@media (max-width: 768px) {
  .prose {
    font-size: 0.9375rem;
  }

  .prose h1 {
    font-size: 1.875rem;
  }

  .prose h2 {
    font-size: 1.5rem;
  }

  .prose h3 {
    font-size: 1.25rem;
  }

  .prose pre {
    border-radius: var(--radius-sm);
  }

  .prose pre,
  .prose table {
    width: 100%;
    overflow-x: auto;
  }
}
```

---

Con esto concluye nuestra demostración de estilos Markdown. Todos estos elementos visuales están cuidadosamente diseñados para funcionar con las variables de tema que has definido, asegurando coherencia en toda tu aplicación.
