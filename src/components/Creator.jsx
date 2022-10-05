import React from 'react'
function Creator({ setItems}) {

	const [title, setTitle] = React.useState("");

	const addItem = (title) => {
		setItems((prev) => [
			{
				id: Date.now(),
				title,
				isCompleted: false,
			},
			...prev,
		]);
		setTitle("");
	};
	return (
		<div className="creator">
			<input
				onKeyPress={(e) => title && e.key === "Enter" && addItem(title)}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Введите название задачи..."
				className="bg-stone-600 rounded-2xl hover:border-violet-600 focus:border-violet-600"
				type="text"
				name="title"
				id=""
			/>
		</div>
	);
}

export default Creator