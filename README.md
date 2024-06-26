# Documentação projeto final TR2
Repositório: https://github.com/theorocha/proj-final-tr2

## Backend
Este projeto é uma API RESTful desenvolvida em Python utilizando Flask para gerenciar dados de tanques, incluindo medições ao longo do tempo.

## Funcionalidades

- **Listar Tanques:** Endpoint para obter uma lista de todos os tanques registrados.
- **Listar Tanque por ID:** Endpoint para obter uma lista de medições para um tanque específico, ordenadas da mais antiga para a mais recente.
- **Adicionar Tanque:** Endpoint para adicionar um novo registro de medição para um tanque.
- **Remover Tanque:** Endpoint para remover um registro de medição específico para um tanque.

## Tecnologias Utilizadas

- Python
- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- Flask-CORS

## Exemplos

```sh
GET /tanque

GET /tanque/1

DELETE /tanque/1/2023-07-01T10:00:00

POST /tanque
Content-Type: application/json

{
  "id": 1,
  "latitude_loc": -15.7801,
  "longitude_loc": -47.9292,
  "capacidade_max": 1000.0,
  "medida_atual": 950.0
}
   ```

