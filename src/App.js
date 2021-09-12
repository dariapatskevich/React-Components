import React from "react";

import { FacebookCard } from './components/FacebookCard';
import { OnlinerCard } from "./components/OnlinerCard";
import { RabotaByCard } from "./components/RabotaByCard";
import { TumblrCard } from "./components/TumblrCard/TumblrCard";
import './App.css';

const facebook = [
  {
    name: 'Darya',
    surname:'Patskevich',
    university:'MSLU',
    post:'My first attempt to create FACEBOOK post with React. ',
    avatarUrl: 'https://sun1.velcom-by-minsk.userapi.com/impg/MEnoxTY_xDK7AFLX1ZbEp4Oi0OpAIEZ1xX-k3A/a5fp7dnq7XQ.jpg?size=1080x1920&quality=96&sign=a8ce557ab9f03062af3e587f683b0aac&type=album',
    likes:'Like',
    reply:'Reply',
    date:'2 seconds ago',
  }

]

const onliner = [{theme: 'КОШЕЛЕК',
countComments: '239',
description: 'Что происходит с почтой, грузами, и доставкой валюты',
backgroundUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/269C/production/_118648890_tass_46012508.jpg'
}]

const rabota = [{
vacancy:"Junior React.js Engineer (Internship/React.js Lab)", 
company:"ООО АйтиРекс Групп",
city:"Минск",
post:"Медицинское обслуживание. Онлайн-ивенты. Реферальная программа. 10+ лет успешной работы на глобальном рынке ИТ-услуг. Какие знания и навыки нужны для старта: Базовые знания HTML...",
submit:"откликнуться",
date:"7 сентября"
}]

const tumblr = [
  {
   avatarUrl:"https://lh3.googleusercontent.com/1MWKD6ZiMl_lpO15rdvwEsumTA7BbGDLDIdF9DqKU1LKs6gAs6L7wgGkhfMII_kWn7vetg=s85",
  symbols:"💜💜💜💜",
  description:"Je partage mon amour avec vous.",
  author:"Dora Muray",
  home:"Home",
  ask:"Ask",
  archieve:"Archieve",
  theme:"Theme"  
  }
]

function App() {
  return (
    <div className="App">
      {facebook.map((facebook) => {
        const {
          name,
          surname,
          date,
          post,
          avatarUrl,
          reply,
          university,
          likes,
        } = facebook;

        return (
          <FacebookCard
            name={name}
            surname={surname}
            date={date}
            post={post}
            avatarUrl={avatarUrl}
            reply={reply}
            likes={likes}
      university={university}
      />
      ) 
    })}
        {onliner.map((onliner) => {
          const {theme, countComments, description, backgroundUrl} = onliner
          return (
            <OnlinerCard theme = {theme}
              countComments = {countComments}
              description = {description}
              backgroundUrl = {backgroundUrl}
            /> 
            )
          })}

{rabota.map((rabota) => {
          const {vacancy, company, city, post, submit, date } = rabota
          return (
            <RabotaByCard vacancy = {vacancy}
            company = {company}
            city = {city}
            post = {post}
            submit = {submit}
            date = {date}
            /> 
            )
})}
{tumblr.map((tumblr) => {
          const {symbols, description, author, home, ask, archieve, theme ,avatarUrl} = tumblr
          return (
            <TumblrCard symbols = {symbols}
            description = {description}
            author = {author}
            home = {home}
            ask = {ask}
            archieve = {archieve}
            theme = {theme}
            avatarUrl= {avatarUrl}
            /> 
            )
})}
   </div>
      );
    }


export default App;