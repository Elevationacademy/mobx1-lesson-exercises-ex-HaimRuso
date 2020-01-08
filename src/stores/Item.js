import { observable } from 'mobx'

export class Item {
    @observable name
    @observable completed = false
    @observable location = "Super Sale"
    constructor(name) {
        this.name = name
    }
}