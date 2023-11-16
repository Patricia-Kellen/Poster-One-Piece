import posterImg from "../../assets/grup.png";
import styles from "./styles.module.css";

export default function Card() {
  return (
    <div class className={styles.container}>
      <img className={styles.poster} src={posterImg} alt="one-piece img"></img>
      <div>
        <h2 className={styles.title}>ONE PIECE</h2>
        <p className={styles.description}>
          A série foca em Monkey D. Luffy, um jovem feito de borracha, que,
          inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo,
          parte em uma jornada do mar do East Blue para encontrar o tesouro
          mítico, o One Piece, e proclamar-se o Rei dos Piratas.
        </p>
        <button className={styles.button}>Assistir Agora!</button>
      </div>
    </div>
  );
}
