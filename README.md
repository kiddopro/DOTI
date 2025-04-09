# Full Stack Note-Taking Application

## Descripción

Esta es una aplicación web de toma de notas que permite a los usuarios crear, editar, eliminar, archivar y filtrar notas. La aplicación está dividida en dos fases:

- **Fase 1**: Creación, edición, eliminación y archivado de notas.
- **Fase 2**: Aplicación de etiquetas y filtrado de notas.

## Tecnologías Utilizadas

- **Frontend**: React, Vite
- **Backend**: Node.js, Express, Supabase
- **Base de Datos**: PostgreSQL

## Requisitos

- Node.js (v18.17 o superior)
- npm (v9.6.7 o superior)

## Instalación

1. Clona el repositorio:

```sh
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

2. Configura las variables de entorno:

```sh
PORT=3000
SUPABASE_URL=<TU_SUPABASE_URL>
SUPABASE_KEY=<TU_SUPABASE_KEY>
SUPABASE_SERVICE=<TU_SUPABASE_SERVICE_KEY>
DATABASE_URL=<TU_DATABASE_URL>
HOSTNAME=localhost
```

## Uso
- El frontend estará disponible en http://localhost:8000.
- El backend estará disponible en http://localhost:8080.
### Endpoints del Backend
```sh
GET /api/task           # Obtener todas las tareas.
GET /api/task/:id       # Obtener una tarea por ID.
POST /api/task          # Crear una nueva tarea.
PUT /api/task/:id       # Actualizar una tarea existente.
DELETE /api/task/:id    # Eliminar una tarea.
```
## Funcionalidades
#### Fase 1
- Crear, editar y eliminar notas.
- Archivar y desarchivar notas.
- Listar notas activas y archivadas.
#### Fase 2
- Agregar y eliminar categorías a las notas.
- Filtrar notas por categoría.