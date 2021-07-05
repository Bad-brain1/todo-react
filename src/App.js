import React, {Component} from 'react';
import List from "./component/List";
import Input from "./component/Input";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {id: 0, text: 'test'}
            ]
        };
    }

    deleteList = (id) => {
        const index = this.state.list.map(l => l.id).indexOf(id);
        this.setState(state=>{
            let { list } = state;
            delete list[index];
            return list;
        });
    }

    addList = (text) =>{
        this.setState(state=>{
            let { list } = state;
            list.push({
                id: list.length !== 0 ? list.length : 0,
                text: text
            })
            return list;
        })
    }

    render() {
        const {list} = this.state;
        console.info(list)
        return (
            <div className="container">
                <h1> ToDo List</h1>
                <p>length {list.length}</p>
                {list.map(list =>
                    <List deleteList={() => this.deleteList(list.id)} key={list.id} list={list}></List>
                )}
                <Input addList={this.addList}></Input>
            </div>
        );
    }
}

export default App;
