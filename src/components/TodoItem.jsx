import React from "react";

function TodoItem({ item, changeItem, removeItem}) {
	return (
		<div className="todo__item mx-auto item rounded-2xl">
			<div
				onClick={() => changeItem(item.id)}
				className={
					!item.isCompleted
						? "comlete-button"
						: "comlete-button active"
				}
			></div>

			<div
				className={
					!item.isCompleted ? "item__title" : "item__title completed"
				}
			>
				{item.title}
			</div>

			<div className="button" onClick={() => removeItem(item.id)}>
				удалить
			</div>
		</div>
	);
}

export default TodoItem;
