import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
        this.props.store.checkItem(e.target.value)
      }
      editItem = (e) => {
        let location = prompt("Please enter your location", "");
        this.props.store.editItem(e.target.value,location)
      }
      deleteItem = (e) => {
        this.props.store.deleteItem(e.target.value)
      }
    render() {
      let item= this.props.item
        return (
            <div className = {item.completed ? "crossed": null}>
           {<input type="checkbox" value={item.name} onClick={this.checkItem}/> } 
          {item.name}
           <button value={item.name} onClick={this.editItem}>editButton</button>
           <button value={item.name} onClick={this.deleteItem}>delete</button>
            </div>)
    }
}

export default Item