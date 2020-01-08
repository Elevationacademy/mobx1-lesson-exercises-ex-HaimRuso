import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    @observable list = [];
    @observable length;
    
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    @action addItem = (name) => {
        this.list.push(new Item(name))
    }
    @action editItem = (name, location) => {
        let item =this.list.find(i=> i.name===name)
        item.location=location
    }
    deleteItem = (name) => {
        for(let item in this.list){
            if(this.list[item].name===name){
                this.list.splice(item,1)
            }
        }
    } 
}

