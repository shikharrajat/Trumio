import express from 'express';
const app = express();
app.use(express.json());

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
});

let mesg= [{role: "system", content: "You are a master prompt genertator for other instances of chatgpt provided a field name generate a prompt for a system role call for another chatgpt instance."}]

app.get('/', async (req, res) => {
    mesg.push({ role: "user", content: String(req.body.ques) });
    const chatCompletion = await openai.chat.completions.create({
        messages: mesg,
        model: "gpt-3.5-turbo",
    });
    console.log(req.body.ques);
    console.log(chatCompletion);
    console.log(chatCompletion.choices[0].message.content);
    res.send(chatCompletion);
  });

app.listen(process.env.PORT || 8080, () => {
    console.log('Backend server is running fine!');
  });
