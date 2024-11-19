const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const readingRoutes = require('./backend/routes/readingRoutes');
const userRoutes = require('./backend/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 8086; // Se não houver a variável de ambiente, usa a porta 8086

// String de conexão MongoDB diretamente no código
const MONGODB_URI = 'mongodb+srv://cristianfatec:123Fatec@apiairlytics.1znrl.mongodb.net/?retryWrites=true&w=majority&appName=apiAirlytics';

// Configurações do CORS
app.use(cors());

// Middleware para aceitar JSON no corpo da requisição
app.use(express.json());

// Conectar ao banco de dados MongoDB com a URI diretamente no código
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.log('Erro de conexão com o MongoDB:', err));

// Definir as rotas da API
app.use('/api/readings', readingRoutes);
app.use('/api/users', userRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
