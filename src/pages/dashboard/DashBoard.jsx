import styles from "../dashboard/dashBoard.module.css";
import { List } from "../../components/List/List";
import { CreateForm } from "../../components/CreateForm/CreateForm";
import NuKenzie from "../../assets/Nu Kenzie DashBoard.svg";

export const DashBoard = ({ setPage, addTodoTotransicion, transicion, removeList, totalValue }) => {


  return (
    <main>
      <header className={styles.containerHeader}>
        <img
          className={styles.imgLogoMain}
          src={NuKenzie}
          alt="Logo nu kenzie"
        />
        <button className={styles.buttonDash} type="button" onClick={() => setPage("LadingPage")}>
          Inicio
        </button>
      </header>

      <div className={styles.containerMainDash}>
        <CreateForm addTodoTotransicion={addTodoTotransicion} totalValue={totalValue} />

      

      <List transicion={transicion} removeList={removeList}/>
      </div>
    </main>
  );
};
