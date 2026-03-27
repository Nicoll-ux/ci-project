```md
# CI Report – Proyecto CI/CD

## Pipeline

```mermaid
graph TD
A[Push a GitHub] --> B[Instalar dependencias]
B --> C[Ejecutar pruebas]
C --> D[Generar reporte de cobertura]
```
Métricas

Tests implementados: 3
Cobertura: 100%
Estado del pipeline: Exitoso (GitHub Actions)

Decisiones

Se utilizó Node.js con Express para simplicidad
Jest para pruebas automatizadas
GitHub Actions para integración continua
El pipeline ejecuta instalación y pruebas en cada push

Conclusión

El proyecto implementa un flujo básico de CI/CD asegurando calidad mediante pruebas automáticas en cada cambio.