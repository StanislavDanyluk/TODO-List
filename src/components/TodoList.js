import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


const TodoList = ({ tasksList, deleteTask }) => (
    <ul className="todo-list collection">
        {tasksList.map(({ id, text, isCompleted }) => (
            <TodoItem deleteTask={deleteTask} id={id} key={id} text={text} isCompleted={isCompleted} className='collection-item' />
        ))}
    </ul>
);

TodoList.propTypes = {
    tasksList: PropTypes.array,
    deleteTask: PropTypes.func
}

TodoList.defaultProps = {
    tasksList: [],
    deleteTask: () => { }
}

export default TodoList;
