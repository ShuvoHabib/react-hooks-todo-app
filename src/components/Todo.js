import React, { useState } from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
		>
			{todo.text}
			
			<div>
				<button onClick={() => completeTodo(index)}>{todo.isCompleted ? "Not done" : "Done"}</button>
				<button onClick={() => removeTodo(index)}>x</button>
			</div>
		</div>
	);
}

export default Todo;