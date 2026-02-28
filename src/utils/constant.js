export const LOGO = "https://logodix.com/logo/1313177.png";
export const UserIMG =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const lang = 
  {
    hindi: {
      search: "खोज",
      text: "आज आप क्या देखना चाहते हैं?",
    },
    english: {
      search: "search",
      text: "What do you want to see today?",
    },
    spanish: {
      search: "buscar",
      text: "¿Qué quieres ver hoy?",
    },
  };

export const supportLang = [
    {
        identifier: "english",
        name: "english",
    },
    {
      identifier: "hindi",
      name: "hindi",
    },
  {
    identifier: "spanish",
    name: "spanish",
  },
];

 export const openai_key=process.env.REACT_APP_OPENAI_API_KEY
