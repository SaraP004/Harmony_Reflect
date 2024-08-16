import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: '',
});

export const ai = async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "Sistema iniciado." },
                { role: "user", content: "Dame una frase que me motive en mi estilo de vida, que sea corta no menos de 1 linea" },
            ],
        });

        const frase = completion.choices[0].message.content;
        res.json({ tip: frase });
    } catch (error) {
        console.error('Error al obtener el tip:', error);
        res.status(500).json({ error: 'Error al obtener el tip' });
    }
};
