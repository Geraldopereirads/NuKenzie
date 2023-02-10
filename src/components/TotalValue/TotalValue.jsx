import React from "react";
import styles from "../TotalValue/TotalValue.module.css";

export const TotalValueTransation = ({totalValue}) => {
  return (
    <div className={styles.containerTotalValue}>
      <div className={styles.containerValue}>
        <h3 className={styles.valorTotalString}>Valor total:</h3>
        <span className={styles.value}>{totalValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
      </div>
      <div className={styles.containerValue}>
      <small className={styles.ValueSmall}>O valor se refere ao saldo</small>
        <div>

        </div>
      </div>
    </div>
  );
};
