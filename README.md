
Este proyecto me servira para hacer el cv online y que cuando me pidan un pdf lo genere automaticamente segun filtro

Estructura de directorios:

src/
├── domain/
│   ├── models/              # Entidades y Value Objects
│   ├── repositories/        # Interfaces de persistencia
│   └── services/            # Lógica de negocio pura
├── application/
│   ├── use-cases/           # Casos de uso (orquestan lógica de dominio)
│   └── dto/                 # Data Transfer Objects
├── infrastructure/
│   ├── express/             # Controladores y rutas
│   ├── persistence/         # Implementaciones de repositorios (ej. Mongo, JSON, etc.)
│   └── config/              # Configuración general (DB, middlewares)
└── shared/
    ├── utils/               # Helpers, validaciones
    └── errors/              # Manejo de errores