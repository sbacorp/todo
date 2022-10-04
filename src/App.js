import { useState } from "react";
import Creator from "./components/Creator";
import TodoItem from "./components/TodoItem";
import "./styles/App.scss";
function App() {
	const [items, setItems] = useState([]);

	const changeItem = (id) => {
		const copy = [...items];
		const current = copy.find((item) => item.id === id);
		current.isCompleted = !current.isCompleted;
		setItems(copy);
	};

	const removeItem = (id) => {
		const newItems = items.filter((obj) => obj.id !== id);
		setItems(newItems);
	};


	return (
		<div className="container md:container md:mx-auto px-4">
			<div className="content rounded-2xl">
				<div className="content__title">TODO</div>
				<Creator setItems={setItems} />
				<div className="todo__list">
					<div className="todo__count">
						Активные -
						{
							items.filter((obj) => obj.isCompleted === false)
								.length
						}
					</div>
					{items
						.filter((obj) => obj.isCompleted === false)
						.map((obj) => {
							return (
								<TodoItem
									changeItem={changeItem}
									removeItem={removeItem}
									key={obj.id}
									item={obj}
								/>
							);
						})}
				</div>
				<div className="todo__list">
					<div className="todo__count">
						Заавершенные -
						{items.filter((obj) => obj.isCompleted === true).length}
					</div>
					{items
						.filter((obj) => obj.isCompleted === true)
						.map((item) => {
							return (
								<TodoItem
									changeItem={changeItem}
									removeItem={removeItem}
									item={item}
									key={item.id}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default App;
