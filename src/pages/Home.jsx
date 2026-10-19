import Greetings from "../components/Greetings";


const user = window.prompt("Qual seu nome?") || "visitante";

function Home() {
  return (
    <Greetings nome={user} />
  );
}

export default Home;
