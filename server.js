const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/submit-form', async (req, res) => {
    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdtnAikstVGQXElR_f77KeT3Y_Gjev1LZfe8iWN7DnwJ8Phkg/formResponse';

    try {
        await axios.post(formUrl, new URLSearchParams(req.body).toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        // Sucesso na submissão do formulário
        res.status(200).json({ message: 'Formulário submetido com sucesso!' });
    } catch (error) {
        // Erro ao submeter o formulário
        console.error('Erro ao submeter formulário:', error);
        res.status(500).json({ message: 'Erro ao submeter formulário' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));