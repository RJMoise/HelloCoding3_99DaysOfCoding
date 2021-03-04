import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

class ToDOList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "My To Do List",
            tasks: ["Watch React Course", "Finish Hello Coding"],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickIndex = this.handleClickIndex.bind(this);
    }

    handleClick(even) {
        eval(this[event.target.name]).bind(this)(event);
    }
    handleChange(event) {
        eval(this[event.target.name]).bind(this)(event);
    }
    handleSubmit(event) {
        event.preventDefault();
        eval(this[event.target.name]).bind(this)(event);
    }
    handleClickIndex(index, even) {
        eval(this[event.target.name]).bind(this)(index, event);
    }

    task(event) {
        this.setState({ task: event.target.value });
    }
    addItem(event) {
        const items = this.state.tasks;
        items.push(this.state.task);
        this.setState({ tasks: items, task: "" });
    }
    deleteTask(index, event) {
        const items = this.state.tasks;
        items.splice(index, 1);
        this.setState({ tasks: items });
    }
    render() {
        const tasks = this.state.tasks.map((task, index) => (
            <li>
                {task}{" "}
                <button
                    name="deleteTask"
                    onClick={(event) => this.handleClickIndex(index, event)}
                >
                    Delete
                </button>
            </li>
        ));

        return (
            <div className="container">
                <h1>{this.state.name}</h1>

                <ol>
                    {tasks}
                    {this.state.task && <li>{this.state.task}</li>}
                </ol>

                <form name="addTask" onSubmit={this.handleSubmit}>
                    <input
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button name="addItem" onClick={this.handleClick}>
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <ToDOList name="World" />,
    document.getElementById("container")
);
