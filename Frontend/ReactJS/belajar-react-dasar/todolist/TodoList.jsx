import Todo from './Todo.jsx'

export default function TodoList() {
    const data = [
        {
            id: 1,
            text: 'belajar HTML',
            isCompleted: true,
            isDeleted: true
        },
        
        {
            id: 2,
            text: 'belajar CSS',
            isCompleted: true
        },
        
        {
            id: 3,
            text: 'belajar Javascript',
            isCompleted: true
        },
        
        {
            id: 4,
            text: 'belajar ReactJS',
            isCompleted: false
        },
        
    ]

    
    return(
        <ul>
            {data.map((todo) => 
                <Todo key={todo.id} {...todo}/>
            )}
        </ul>
    )
}