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
	const [currentList, setCurrentList] = useState(0);

	const list =
		currentList === 0
			? items
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
					})
			: items
					.filter((obj) => obj.isCompleted === true)
					.map((obj) => {
						return (
							<TodoItem
								changeItem={changeItem}
								removeItem={removeItem}
								key={obj.id}
								item={obj}
							/>
						);
					});

	return (
		<div className="container md:container md:mx-auto px-4">
			<div className="content rounded-2xl">
				<div className="content__title">TODO</div>
				<Creator setItems={setItems} />
				<div className="todo__list">
					<div className="flex justify-between mb-10">
						<div
							onClick={() => setCurrentList(0)}
							className="todo__count border-2 p-2 w-fit rounded-2xl hover:bg-violet-600 active:translate-y-1"
						>
							Активные :{" "}
							{
								items.filter((obj) => obj.isCompleted === false)
									.length
							}
						</div>
						<div
							onClick={() => setCurrentList(1)}
							className="todo__count border-2 p-2 w-fit rounded-2xl hover:bg-violet-600 active:translate-y-1"
						>
							Заавершенные :{" "}
							{
								items.filter((obj) => obj.isCompleted === true)
									.length
							}
						</div>
					</div>

					{list}
				</div>
			</div>
		</div>
	);
}

export default App;
