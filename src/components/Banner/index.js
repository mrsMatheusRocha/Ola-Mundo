import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Mundo!
        </h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Matheus Rocha Sousa, estudante de Front-end na Alura e universitário em Sistemas da Informação na FIAP. Aqui compartilho meus conhecimentos, espero que aprenda algo novo xD
        </p>
      </div>
    </div>
  )
}