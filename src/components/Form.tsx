import React from 'react'

interface Props {
    todos:string[];
    setNewTodo:(e:string)=>void;
    newTodo:string;
    setTodos:([])=>void;
}

const Form: React.FC<Props> = ({ setNewTodo , todos , newTodo  , setTodos}) => {
    console.log("Form renderd")
    return (
        <div className="App__todo-container--top">
            <input
                type="text"
                className="App__todo-container--top-input"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
            />
            <button
                className="App__todo-container--top-button"
                onClick={() => {
                    setTodos([newTodo, ...todos]);
                    setNewTodo("");
                }}
            >
                ADD
            </button>
        </div>
    )
}

export default React.memo(Form)
