# Uso de uma imagem base do Node.js
FROM node:18

# Criação do diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalação das dependências
RUN npm install

# Copiar o código fonte
COPY . .

# Exposição da porta usada pela aplicação
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["node", "src/app.js"]