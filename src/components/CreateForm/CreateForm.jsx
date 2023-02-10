import React, { useState } from "react";
import { TotalValueTransation } from "../../components/TotalValue/TotalValue";
import styles from "../../components/CreateForm/CreateForm.module.css";

export const CreateForm = ({ addTodoTotransicion, totalValue }) => {
  const [formData, setFormData] = useState({
    
    descripton: "",
    price: "",
    option: "",
  });
console.log(formData)
  const submit = (event) => {
    event.preventDefault();
    addTodoTotransicion(formData);

    setFormData({
      descripton: "",
      price: "",
      option: "",
    });
  };

  return (
    <div className={styles.containerAllForm}>
      <form className={styles.containerForm} onSubmit={submit}>
        <div className={styles.containerInput}>
          <label className={styles.mainLabelOne} htmlFor="descricao">
            Descrição
          </label>
          <input
            value={formData.descripton}
            className={styles.inputMainOne}
            type="text"
            name="descricao"
            id="descricao"
            placeholder="Digite aqui sua descrição"
            required
            autoComplete="off"
            onChange={(event) =>
              setFormData({ ...formData, descripton: event.target.value })
            }
          />
          <small className={styles.smallMain}>Ex: Compra de roupas</small>
        </div>
        <div className={styles.containerInputTwo}>
          <div className={styles.containerInputValor}>
            <div className={styles.containerInputTipo}>
              <label className={styles.mainLabelTwo} htmlFor="valor">
                Valor
              </label>
              <div className={styles.containerSimbolo}>
                <input
                  value={formData.price}
                  className={styles.inputMainTwo}
                  type="number"
                  name="valor"
                  id="valor"
                  required
                  autoComplete="off"
                  onChange={(event) =>
                    setFormData({ ...formData, price: event.target.value })
                  }
                  
                />
                
              </div>
            </div>
          </div>
          <div className={styles.containerSelect}>
            <label className={styles.labelSelect} htmlFor="tipo">
              Tipo de valor
            </label>
            <select
              value={formData.option}
              className={styles.selectForm}
              name="tipo"
              id="tipo"
              onChange={(event) =>
                setFormData({ ...formData, option: event.target.value })
              }
            >
              <option className={styles.optionSelect} value="">
                Selecione um Tipo
              </option>
              <option className={styles.optionSelect} value="despesa">
                Despesa
              </option>
              <option className={styles.optionSelect} value="entrada">
                Entrada
              </option>
            </select>
          </div>
        </div>

        <button className={styles.buttonDash} type="submit">
          Inserir Valor
        </button>
      </form>

      <TotalValueTransation totalValue={totalValue} />
    </div>
  );
};
