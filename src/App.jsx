import { useState } from "react";
import { LadingPage } from "./pages/ladingPage/ladingPage";
import { DashBoard } from "./pages/dashboard/DashBoard";
import { v4 as uuidv4 } from "uuid";
import "./styles/index.css";

export const App = () => {
  const [page, setPage] = useState("LadingPage");
  const [transicion, settransicion] = useState([]);

  const addTodoTotransicion = (todo) => {
    const newTodo = { ...todo, id: uuidv4() };
    settransicion([...transicion, newTodo]);
  };

  const removeList = (id) => {
    if (confirm("Você realmente deseja remover essa descrição ?")) {
      const newList = transicion.filter((todo) => todo.id !== id);
      settransicion(newList);
    }
  };

  const totalValue = transicion.reduce((accumulator, currentTransation) => {
    if (currentTransation.option === "despesa") {
      return accumulator - Number(currentTransation.price);
    } else {
      return accumulator + Number(currentTransation.price);
    }
  }, 0);

  return (
    <main>
      {page === "LadingPage" ? (
        <LadingPage setPage={setPage} />
      ) : (
        <DashBoard
          setPage={setPage}
          transicion={transicion}
          addTodoTotransicion={addTodoTotransicion}
          removeList={removeList}
          totalValue={totalValue}
        />
      )}
    </main>
  );
};
