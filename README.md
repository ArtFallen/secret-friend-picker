# 🎁 Amigo Secreto

Aplicación web sencilla para organizar sorteos de **Amigo Secreto**. Permite agregar participantes a una lista y seleccionar un ganador al azar con un solo clic.

---

## ✨ Funcionalidades

- **Agregar participantes** — Ingresa nombres uno a uno mediante un campo de texto.
- **Validación de duplicados** — No se permiten nombres repetidos en la lista.
- **Validación de campo vacío** — Muestra una alerta si se intenta agregar un nombre en blanco.
- **Lista en tiempo real** — Los participantes se muestran al instante conforme se agregan.
- **Sorteo aleatorio** — Selecciona un nombre al azar de la lista con el botón "Sortear amigo".

---

## 🚀 Cómo usar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador — no requiere servidor ni instalación.

---

## 🗂️ Estructura del proyecto

```
amigo-secreto/
├── index.html        # Estructura de la interfaz
├── style.css         # Estilos visuales
├── app.js            # Lógica de la aplicación
└── assets/
    ├── amigo-secreto.png         # Imagen de cabecera
    └── play_circle_outline.png   # Ícono del botón de sorteo
```

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica de la página |
| CSS3 | Estilos y diseño visual |
| JavaScript (Vanilla) | Lógica de negocio e interacción con el DOM |

---

## 🧠 Lógica principal

| Función | Descripción |
|---|---|
| `agregarAmigo()` | Valida el input, evita duplicados y agrega el nombre al arreglo. |
| `mostrarAmigos()` | Renderiza la lista actualizada de participantes en el DOM. |
| `sortearAmigo()` | Selecciona un índice aleatorio del arreglo y muestra el resultado. |

---

## 📸 Vista previa

> Abre `index.html` en tu navegador para ver la aplicación en acción.

---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos.
