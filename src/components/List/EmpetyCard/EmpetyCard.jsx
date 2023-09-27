import React from 'react'
import styles from "../EmpetyCard/empetyCard.module.css";


export const EmpetyCard = () => {
  return (

    <ul className={styles.ulEmpety}>
      <li aria-label="alert" className={styles.listVazia}>
        <div className={styles.divVaziaOne}></div>
        <div className={styles.divVaziaTwo}></div>
      </li>

      <li aria-label="alert" className={styles.listVazia}>
        <div className={styles.divVaziaOne}></div>
        <div className={styles.divVaziaTwo}></div>
      </li>

      <li aria-label="alert" className={styles.listVazia}>
        <div className={styles.divVaziaOne}></div>
        <div className={styles.divVaziaTwo}></div>
      </li>

    </ul>


  )
}
