import React from 'react'
import Todo from './todo'

function List(props) {
    const {
        todoList
    } = props;
    console.log(todoList);

    return (
        <>  
            
            <div className="Container">
                {todoList.map(todo => 
                    <Todo todoList={todoList} key={todo} id={todoList.indexOf(todo)} todo={todo}/> 
                )}
            </div>
            

        </>
        
    )
}

export default List
