const TodoList = ({todos,onDel,onToggle}) => {
  return (
    <ul id="todo-list">
        {
            todos.map((list,idx)=>{
                return (
                <li key={idx}>
                    <input 
                        type="checkbox"
                        onChange={()=>{onToggle(list.id)}}
                        checked={list.done}
                    />
                    <span style={{
                        textDecoration : list.done ? "line-through":"none",
                        textDecorationColor : list.done ? "#903f29ff" : "none",
                        textDecorationThickness : list.done ? "5px" : "none" 
                        }}>{list.todo}</span>
                    <button 
                    id={`todo-delete-btn-${list.id}`}
                    className="todo-delete-btn"
                    onClick={()=>{onDel(list.id)}}>
                        ×
                    </button>
                </li>
                )
            })
        }
    </ul>
  )
}

export default TodoList