import { useEffect, useState } from 'react';

function DragAndDropSides() {
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);

    async function fetchListOfTodos() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/todos?limit=5&skip=0');
            const result = await apiResponse.json();

            if (result && result.todos && result.todos.length > 0) {
                const updatedTodos = result.todos.map((todoItem) => ({
                    ...todoItem,
                    status: 'wip',
                }));
                setTodos(updatedTodos);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfTodos();
    }, []);

    function handleDragStart(event, id) {
        event.dataTransfer.setData('id', id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event, status) {
        const id = event.dataTransfer.getData('id');
        const updateTodos = todos.map((todoItem) => {
            if (todoItem.id.toString() === id) {
                return { ...todoItem, status: status };
            }
            return todoItem;
        });
        setTodos(updateTodos);
    }

    function renderTodos(status) {
        return todos
            .filter((todo) => todo.status === status)
            .map((todoItem) => {
                <div
                    onDragStart={(event) => handleDragStart(event, todoItem.id)}
                    onDrop={(event) => handleDrop(event, status)}
                    onDragOver={handleDragOver}
                    draggable
                    key={todoItem.id}
                    className='todo-card'>
                    Verma
                </div>;
            });
    }

    if (loading) return <h1>Loading data! Please wait</h1>;

    return (
        <div className='wrapper'>
            <h1>Drag and Drop</h1>
            <div className='drag-and-drop-board'>
                <div className='work-in-progress'>
                    <h3>In Progress:</h3>
                    {renderTodos('wip')}
                </div>
                <div className='completed'>
                    <h3>Completed:</h3>
                    {renderTodos('completed')}
                </div>
            </div>
        </div>
    );
}

export default DragAndDropSides;
