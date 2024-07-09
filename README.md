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

## Frontend
O frontend do projeto foi desenvolvido utilizando React.js, e está integrado com o backend descrito acima para apresentar e gerenciar dados dos tanques de forma intuitiva e eficiente. O frontend permite aos usuários visualizar informações sobre os tanques, adicionar novos registros de medições e remover medições específicas. 

### Funcionalidades
- **Dashboard:** Apresenta uma visão geral dos tanques cadastrados, mostrando informações essenciais como o nível atual de cada tanque. Cada tanque é representado por um cartão que inclui um ícone visual indicando seu status.
- **Adicionar Tanque:** Uma página para adicionar novos registros de medições para os tanques. Inclui um formulário para inserir latitude, longitude, capacidade máxima e medida atual do tanque.
- **Detalhes do Tanque:** Apresenta detalhes específicos de um tanque selecionado, incluindo um mapa com a localização do tanque, um gráfico histórico de medições e informações detalhadas sobre o nível do tanque.
- **Excluir Tanque: (Essa funcionalidade está implementada no backend, no entanto, não foi inserida no frontend)** Permite a exclusão de medições específicas de um tanque. A exclusão é feita passando o ID do tanque e a data da medição no formato ISO 8601.

### Tecnologias Utilizadas
- React.js
- Material-UI
- Axios (para fazer requisições HTTP)
- React-Leaflet (para mapas interativos)

### Componentes Principais
- **AdicionarTanque.js:** Componente responsável por renderizar o formulário de adição de novos registros de medição.
- **Dashboard.js:** Componente que exibe uma visão geral de todos os tanques registrados.
- **DetalhesTanque.js:** Componente que exibe detalhes de um tanque específico, incluindo gráficos e mapas.
- **ESPStatusPage.js:** Componente que exibe informações sobre a conexão e status das ESPs utilizadas no projeto.
- **NavBar.js:** Componente de navegação, permitindo fácil acesso às diferentes páginas da aplicação.

### Integração com o Backend
O frontend faz chamadas HTTP para os endpoints do backend para obter, adicionar e remover dados dos tanques. Aqui estão alguns exemplos de como o frontend se comunica com o backend:
- **Listar Tanques:** Faz uma requisição GET para o endpoint `/tanque` para obter a lista de tanques.
- **Adicionar Tanque:** Faz uma requisição POST para o endpoint `/tanque` com os dados do novo registro.
- **Remover Tanque:** Faz uma requisição DELETE para o endpoint `/tanque/{id}/{data}` para remover uma medição específica.

