import styles from "../ladingPage/ladingPage.module.css";
import Illustration from "../../assets/Illustration.svg";
import NuKenzie from "../../assets/Nu Kenzie.svg";


export const LadingPage = ({ setPage }) => {
  return (
    <main className={styles.containerMainLanding}>
      <div className={styles.containerMain}>
        <div className={styles.containerMainTittle}>
          <img
            className={styles.imgLogoMain}
            src={NuKenzie}
            alt="Logo nu kenzie"
          />
          <h1 className={styles.tittleMain}>
            Centralize o controle das suas finanças
          </h1>
          <p className={styles.paragraphMain}>de forma rápida e segura</p>
          <button
            className={styles.buttonLandingPage}
            type="button"
            onClick={() => setPage("DashBoard")}
          >
            Iniciar
          </button>
        </div>
        <img
          className={styles.imgMain}
          src={Illustration}
          alt=""
        />
      </div>
    </main>
  );
};
