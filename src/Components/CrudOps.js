import React from "react";
import logo1 from "./logo1.png";
import "./CrudOps.css";


class CrudOps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            newItem: ""
        };
    }

    addItem(todoValue) {
        if (todoValue !== "") {
            const newItem = {
                id: Date.now(),
                value: todoValue,
                isDone: false
            };
            const list = [...this.state.list];
            list.push(newItem);

            this.setState({
                list,
                newItem: ""
            });
        }

    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updateList = list.filter(item => item.id !== id);
        this.setState({
            list: updateList
        });
    }

    updateInput(input) {
        this.setState({
            newItem: input
        });
    }

    render() {
        return (
            <div className = "">
                <img src={logo1} className=" logo" width="200 px" height="auto" />
                <h1 >ToDo App</h1>
                <div>
                    Add an Item...

                    <br />
                    <input
                        type="text"
                        placeholder="Enter the details"
                        value={this.state.newItem}
                        onChange={e => this.updateInput(e.target.value)}
                    />
                    <button
                        onClick={() => this.addItem(this.state.newItem)}>
                        AddToDo
                        </button>
                    <div>
                        <ul>
                            {this.state.list.map(item => {
                                return (
                                    <li key={item.id}>
                                        <input
                                            type="checkbox"
                                            name="idDone"
                                            checked={item.isDone}
                                        />
                                        {item.value}
                                        <button onClick={() => this.deleteItem(item.id)}>
                                            Delete
                                           </button>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>


        );

    }

}

export default CrudOps;