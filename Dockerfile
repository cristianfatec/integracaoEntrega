# Usar a imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos de dependências para o contêiner
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código para o contêiner
COPY . .

# Expor a porta onde a aplicação irá rodar
EXPOSE 3000

# Rodar a aplicação
CMD ["node", "server.js"]
