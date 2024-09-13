# Template de Next.js - Typescript

## Descripcion

Este template de Next.js ofrece una configuración sólida y preconfigurada para iniciar rápidamente tus proyectos. Incluye una serie de herramientas y scripts para garantizar un desarrollo eficiente y de alta calidad.

## Instalación y correr entorno de desarrollo

```bash
  git clone https://github.com/franciscovento/nextjs-template.git

  cd nextjs-template

  npm install

  npm run dev
```

### Características principales

#### Linter y Formateador:

- ESLint: Configuraciones predefinidas para asegurar la calidad del código.
- Prettier: Formatea el código automáticamente para una mayor consistencia.
- Husky: Garantiza que el código esté linteado y formateado correctamente antes de cada commit y push, además de correr los test y generan un build para prevenir errores.
- Commitlint: Impone convenciones de commit para mantener un historial de cambios claro y conciso.

#### Testing:

- Vitest: Framework de pruebas unitarias de componentes y funciones.
- Cobertura de código: Genera reportes de cobertura para evaluar el coverage de los tests.

#### Gestión de dependencias:

- npm: Gestor de paquetes predeterminado.
- Node.js 20.17.0: Versión específica de Node.js para un entorno de desarrollo estable.

### Convenciones para commit

Utiliza el archivo **commitlint.config.js** para ver los prefijos de commit permitidos.
