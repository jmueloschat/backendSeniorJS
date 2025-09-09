# appSOAP5
Arquitetura de integração com ERP

Criar estrutura de pastas
src
src/controllers
src/routes
src/services
src/models

criar package.json 
npm init -y

instalar
npm instal nodejs

criar fontes na raiz do src:
server.js
app.js

//npm init -y
//npm install dotenv
//npm install express 
//npm install express axios --é o cliente http
//npm install oracledb

//deixar rodando em servidor
//npm install -g pm2
//pm2 start index.js
//pm2 save
//pm2 startup

//Verificar status da aplicação
//pm2 list
//pm2 logs minha-app

//pm2 start index.js --name minha-app    # Inicia a aplicação
//pm2 list                               # Lista os apps gerenciados
//pm2 logs minha-app                     # Mostra logs
//pm2 restart minha-app                  # Reinicia a aplicação
//pm2 stop minha-app                     # Para a aplicação
//pm2 delete minha-app                   # Remove do gerenciamento
//pm2 save                               # Salva configuração atual
//pm2 startup                            # Gera comando para iniciar com o sistema
