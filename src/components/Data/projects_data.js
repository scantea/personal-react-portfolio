import portfolio from "../../assets/ProjectImages/web-pic.png";
import chatbot from "../../assets/ProjectImages/chatbot.png";
import iphone from "../../assets/ProjectImages/iphone.png";
import board from "../../assets/ProjectImages/board.png";

const data_projects = [
  {
    name: "Mental Health Chatbot",
    image: chatbot,
    deployed_url: "https://github.com/scantea/openai_codex",
    github_url: "https://github.com/scantea/openai_codex",
  },
  {
    name: "Dev Portfolio",
    image: portfolio,
    deployed_url: "https://github.com/scantea/personal-react-portfolio",
    github_url: "https://github.com/scantea/personal-react-portfolio",
  },
  {
    name: "Inspiration board",
    image: board,
    deployed_url: "https://mean-pugs-inspo-board-api.herokuapp.com/",
    github_url:
      "https://github.com/scantea/front-end-inspiration-board/tree/css",
  },
  {
    name: "Mental Health Journaling App",
    image: iphone,
    github_url: "https://github.com/lzhang39/WavesCapstoneRepo2",
  },
];

export default data_projects;
