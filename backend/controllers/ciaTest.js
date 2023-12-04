
import chats from '../models/chats.js';
import OpenAI from "openai";
import { user } from '../models/user.js';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

let mesg= [{role: "system", content: "You are a master prompt genertator for other instances of chatgpt provided a field name generate a system prompt to be given in a api call for another chatgpt instance. For example if you are provied field name Machine Learning then the response should be like \"You are an expert at Machine learning at a online eductaional website. Help the students with their queries \""}]


export const createChat=  async (req, res) => {
    const {userId} = req.body;
    const userExisting = await user.findById(userId);
    if(!userExisting)
    {
        return res.status(404).json({message:"User Not found"});
    }
    mesg.push({ role: "user", content: String(req.body.botname) });
    const chatCompletion = await openai.chat.completions.create({
        messages: mesg,
        model: "gpt-3.5-turbo",
    });
    console.log(req.body.ques);
    console.log(chatCompletion);
    let newchat = new chats();
    newchat.messages.push({role: "system", content: chatCompletion.choices[0].message.content});
    newchat.botname=String(req.body.botname);
    await newchat.save();
    if(!userExisting.chatIds)
    {
        userExisting.chatIds=[];
    }
    userExisting.chatIds.push(newchat._id);
    await userExisting.save();
    res.status(200).json({message: chatCompletion.choices[0].message.content, id: newchat._id});
  };

export const postChat = async (req, res) => {
      let chat = await chats.findById(req.body.chatId);
      let mes= chat.messages;
      mes = mes.map((m)=>{
          return {
              role: m.role,
              content: m.content
          };
      })
      mes.push({role: "user", content: req.body.ques});
      console.log(mes);
      const chatCompletion = await openai.chat.completions.create({
        messages: mes,
        model: "gpt-3.5-turbo",
    });
    chat.messages.push({role: "user", content: req.body.ques});
    chat.messages.push({role: "assistant", content: chatCompletion.choices[0].message.content});
    chat.save();
    res.status(200).json({message: chatCompletion.choices[0].message});
};

export const postHelper = async(req,res)=>{
    mesg.push({ role: "user", content: String(req.body.botname) });
    const chatCompletion = await openai.chat.completions.create({
        messages: mesg,
        model: "gpt-3.5-turbo",
    });
    let newmsg=[];
    newmsg.push({role: "system", content: chatCompletion.choices[0].message.content});
    newmsg.push({role:"user",content :req.body.content});
    const chatCompletion2 = await openai.chat.completions.create({
        messages: newmsg,
        model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion2.choices[0].message.content);
    return res.status(200).json(chatCompletion2.choices[0].message.content)
};


