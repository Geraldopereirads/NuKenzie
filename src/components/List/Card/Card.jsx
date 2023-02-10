import React from "react";
import styles from "../Card/card.module.css";
import { FaTrash } from "react-icons/fa";

export const Card = ({ todo, removeList }) => {
  return (
    <li className={styles.listVazia}>
      <div>
        <h3 className={styles.descriptionCard}>{todo.descripton}</h3>
        <div className={styles.OptionCard}>{todo.option}</div>
        <span className={styles.priceCard}>R$ {todo.price}</span>
      </div>
      <span onClick={() => removeList(todo.id)} className={styles.remove}>
        {" "}
        <FaTrash />{" "}
      </span>
    </li>
  );
};
