export class Todo {

    public id: number;
    public text: string;
    public completed: boolean;
    public editing: boolean;

    constructor( text: string ) {
        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.id = Math.random();
    }

}