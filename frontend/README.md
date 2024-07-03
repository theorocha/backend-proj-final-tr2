# Rodando o Frontend

Este guia fornece instruções detalhadas para configurar e rodar o frontend da aplicação de monitoramento de tanques de combustível utilizando React.js.

## Pré-requisitos

Certifique-se de ter os seguintes programas instalados em sua máquina:

1. **Node.js (versão 14 ou superior)**
   - **Para Windows/MacOS/Linux**:
     - Acesse o site oficial do Node.js [Node.js Download](https://nodejs.org/) e baixe o instalador da versão LTS mais recente. Siga as instruções do instalador.

   - **Para Linux (usando nvm - Node Version Manager)**:
     - Instale o `nvm` (Node Version Manager) para gerenciar facilmente as versões do Node.js:
     
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
     source ~/.bashrc
     ```
     
     - Instale a versão mais recente do Node.js:
     
     ```bash
     nvm install node
     ```

2. **npm** (geralmente vem com o Node.js)

## Passos para configurar e rodar o frontend

### 1. Clonar o repositório

Clone o repositório para sua máquina local usando o comando:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Navegar para o diretório do frontend

Entre na pasta do frontend:

```bash
cd proj-final-tr2/frontend
```

### 3. Instalar dependências

Instale as dependências do projeto usando o npm:

```bash
npm install
```

### 4. Rodar o servidor de desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm start
```

### 5. Acessar a aplicação

Abra o seu navegador e acesse http://localhost:3000 para visualizar o frontend da aplicação (o backend deve estar rodando).