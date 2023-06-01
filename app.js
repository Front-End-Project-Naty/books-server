const express = require("express");
const rotaLivro = require("./rotas/livro");
const rotaFavorito = require("./rotas/favorito")

const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}))

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito)

const port = 8001;

app.use((err, req, res, next) => {
  if (err.code === 'ECONNRESET') {
    console.log('Connection was reset by the client');
    return res.status(500).json({ error: 'Connection reset by client' });
  }
  console.error('An error occurred:', err);
  return res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
