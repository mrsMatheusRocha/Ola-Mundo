import styles from './SobreMim.module.css';
import PostModelo from 'components/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Matheus!
      </h3>

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz em te ver por aqui.
      </p>

      <p className={styles.paragrafo}>
        Meu primeiro contato com programação aconteceu durante o ensino médio integrado ao curso de Eletrônica na ETEC Profa. Dra. Doroti Quiomi Kanashiro Toyohara. Nessa fase, aprendi lógica de programação e os fundamentos da linguagem C++, utilizada no Arduino. Inicialmente, minha preferência era pelo estudo do hardware, e a programação não despertava tanto meu interesse. No entanto, com o tempo, descobri que essa área se tornaria uma das minhas maiores paixões.
      </p>

      <p className={styles.paragrafo}>
        Atualmente, estou no segundo ano da graduação em Sistemas de Informação na Faculdade de Informática e Administração Paulista (FIAP). Durante minha trajetória acadêmica, participei do NEXT, um festival de tecnologia e inovação, onde competi na ROBOCUP, um torneio de duelos entre robôs. Meu grupo conseguiu avançar para a segunda fase, mas, apesar da eliminação, a experiência foi extremamente enriquecedora.
      </p>

      <p className={styles.paragrafo}>
        Além disso, sou estudante de Front-end na Alura e sigo aprimorando meus conhecimentos na área de desenvolvimento, sempre em busca de novos desafios e aprendizados.
      </p>
    </PostModelo>
  )
}