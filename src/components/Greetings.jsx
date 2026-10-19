import "./Greetings.css";

function Greetings({ nome, mensagem = "Seja bem vindo(a)!" }) {
  return (
    <div className="greeting">
      <span className="greeting__eyebrow">
        React - Primeiros Passos
      </span>

      <h1>{nome}, {mensagem}</h1>

      <p>
        The text generator that any undead person would love to use.
        Zombie ipsum also gives you the possibility of adding 50%
        of "brains" to your text. Braaaaains.
      </p>
    </div>
  );
}

export default Greetings;