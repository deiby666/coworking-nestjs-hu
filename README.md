<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Coworking NestJS HU

This project is an API built with NestJS to manage the reservation of workspaces in a coworking space. Users can reserve workspaces for a specific session, facilitating the management of space occupancy and improving user experience.

## Índice

1. [Descripción](#descripción)
2. [Instalación](#instalación)
3. [Configuración](#configuración)
4. [Uso](#uso)
5. [Tests](#tests)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Contribución](#contribución)

## Descripción

Esta API está construida con NestJS para gestionar la reserva de espacios de trabajo en un coworking. Los usuarios pueden reservar espacios para una sesión específica, facilitando la gestión de la ocupación del espacio y mejorando la experiencia del usuario.

## Instalación

Sigue estos pasos para instalar el proyecto en tu máquina local.

### Requisitos previos

```bash
- Node.js (versión 14 o superior)
- npm
```

### Clonar el repositorio

```bash
git clone https://github.com/deiby666/coworking-nestjs-hu.git
cd coworking-nestjs-hu
```

Instalar dependencias

```bash
npm install
```

### Configuración

Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

```bash
POSTGRES_USER=default
POSTGRES_HOST=ep-black-mud-a448djts-pooler.us-east-1.aws.neon.tech
POSTGRES_PASSWORD=Wrktng9qR3OM
POSTGRES_DATABASE=verceldb
POSTGRES_PORT=5432
```

### Uso
Instrucciones para ejecutar la aplicación.

### Desarrollo

```bash
npm run start:dev
```

```bash
npm run build
npm run start:prod
```


El proyecto estará corriendo en http://localhost:3000.


### Tests
Instrucciones para ejecutar los tests.

### Unit tests

```bash
npm run test
```

### End-to-end tests

```bash
npm run test:e2e
```

### Test coverage

```bash
npm run test:cov
```

### Estructura del Proyecto
El proyecto tiene la siguiente estructura:

```bash
src/
|-- app.module.ts
|-- main.ts
|-- salas/
|   |-- entidades/
|   |   |-- sala.entity.ts
|   |-- dtos/
|   |   |-- create-sala.dto.ts
|   |   |-- update-sala.dto.ts
|   |-- controladores/
|   |   |-- salas.controller.ts
|   |-- servicios/
|       |-- salas.service.ts
|-- espacios/
|   |-- entidades/
|   |   |-- espacio.entity.ts
|   |-- dtos/
|   |   |-- create-espacio.dto.ts
|   |   |-- update-espacio.dto.ts
|   |-- controladores/
|   |   |-- espacios.controller.ts
|   |-- servicios/
|       |-- espacios.service.ts
|-- reservas/
|   |-- entidades/
|   |   |-- reserva.entity.ts
|   |-- dtos/
|   |   |-- create-reserva.dto.ts
|   |   |-- update-reserva.dto.ts
|   |-- controladores/
|   |   |-- reservas.controller.ts
|   |-- servicios/
|       |-- reservas.service.ts
|-- sesion/
|   |-- entidades/
|   |   |-- sesion.entity.ts
|   |-- dtos/
|   |   |-- create-sesion.dto.ts
|   |   |-- update-sesion.dto.ts
|   |-- controladores/
|   |   |-- sesion.controller.ts
|   |-- servicios/
|       |-- sesion.service.ts
|-- usuarios/
    |-- entidades/
    |   |-- usuario.entity.ts
    |-- dtos/
    |   |-- create-usuario.dto.ts
    |   |-- update-usuario.dto.ts
    |-- controladores/
    |   |-- usuarios.controller.ts
    |-- servicios/
        |-- usuarios.service.ts
```

app.module.ts: Módulo principal de la aplicación.
main.ts: Punto de entrada de la aplicación.
salas, espacios, reservas, sesion, usuarios: Cada carpeta contiene sus respectivas entidades, DTOs, controladores y servicios.

## License

Nest is [MIT licensed](LICENSE).
