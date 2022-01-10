import React, {useState, useEffect} from 'react'

function Todo(props) {
    const{
        todo,
        id,
        todoList
    } = props;
    

    const mystyle = {
        textDecoration: "line-through"
    };
    const [removePressed,updateRemovePressed] = useState(false);
    const [donePressed,updateDonePressed] = useState(false);

    const GetPressedStatus = () =>{
        updateRemovePressed(true);
        todoList.splice(todoList.indexOf(todo),1);

    }

    const GetDoneStatus = () => {
        if(donePressed == false){
            updateDonePressed(true);
        }else{
            updateDonePressed(false)
        }
    }

    return (
        <> {!removePressed &&
        <div className="todo">


            {donePressed && <p style={mystyle}>{todo}</p>}
            {!donePressed && <p>{todo}</p>}

            <div className="functionContainer">
            <button className="Done" onClick={GetDoneStatus}>✓</button>
            <button className="Remove" onClick={GetPressedStatus}>X</button>

            </div>
        </div>
        
        } 
        </>
    )
}

export default Todo
