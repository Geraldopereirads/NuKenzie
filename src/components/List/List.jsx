import React from "react";
import { Card } from "../../components/List/Card/Card";
import { EmpetyCard } from "../../components/List/EmpetyCard/EmpetyCard";
import styles from "../../components/List/list.module.css";


export const List = ({ transicion, removeList }) => {
  return (
    <div className={styles.containerList}>
      <h3 className={styles.tittleDash}>Resumo financeiro</h3>

      <h2 className={styles.tittleDashTwo}>
        Você ainda não possui nenhum lançamento
      </h2>
      <ul>
        {transicion.length > 0 ? (
          <>
            {transicion.map((todo, index) => (
              <Card key={index} todo={todo} removeList={removeList} />
            ))}
          </>
        ) : (
          <EmpetyCard />
        )}
      </ul>
    </div>
  );
};
