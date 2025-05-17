---
title: Post de Ejemplo con Todos los Estilos
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

---

Con esto concluye nuestra demostración de estilos Markdown. Todos estos elementos visuales están cuidadosamente diseñados para funcionar con las variables de tema que has definido, asegurando coherencia en toda tu aplicación.
