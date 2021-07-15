/**
 * Copyrights @ Axoten Innovation 2021
 * Starter code for test knowledge in React.
 *
 * ============== INTROUDCTION ===============
 * This is a simple TODO application, in the basic structure, the screen will contain a input field and a button to add new todos to the list.
 * You can type in the input field, then the live preview of the currently typing todo will be listed with background color of yellow. Once you click
 * add button it will be added to the actual todo array.
 *
 * Then the list will be render to below the input field.
 *
 * Later the, the top section that contains input feild and the button will have more adavance fields such as rich text editors, emojies, image uploads etc.
 * Also, the list will have drag drop features to sort the priority of the TODOs, features for edit delete cards and each card will able to customize by using
 * the settings option of each cards ( such as card background etc )
 *
 * So in near future this component is going to be really complex. It will have complex logic, complex UI renderings, transitions, animitation etc.
 * In order to keep a good performance, as well as to prevent side effects, the below component is needed to update.
 *
 * ============== TASK =================
 *
 * YOU DO NOT NEED TO IMPLEMENT ANY OF THE NEW FEATURE I MENITIONED ABOVE. ALL YOU NEED TO DO IS, UPDATE THE BELOW COMPONENT IN A WAY THAT IT WILL
 * 1) MINIMIZE THE PERFORMANCE ISSUES,
 * 2) REMOVE UNWANTED UI RENDERS,
 * 3) ESCAPE SIDE EFFECTS.
 *
 * For example, You may need to put some parts into separate child components. Likewise, do anything you know to fullfil the above 3 requirments.
 *
 * @author dilshan@axoten.com
 */

import { useEffect, useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setTodos(["TODO #1", "TODO #2", "TODO #3"]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <div className="App__todo-container">

      <Form todos={todos}  setNewTodo={setNewToDo}  newTodo={newToDo} setTodos={setTodos} />
        
        <div className="App__todo-container--main">
          {newToDo.length > 0 && (
            <div className="Card" style={{ backgroundColor: "yellow" }}>
              {newToDo }
            </div>
          )}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            todos.map((item, index) => {
              return <Card key={index} item={item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;