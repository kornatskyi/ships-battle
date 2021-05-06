


export default class Ship {
    constructor(length = undefined, coordinates =[{n: undefined, l: undefined}]) {
        //Min length 1 max length 4
        this.length = length;
        //Coordinates in format {n: <number>, l: <letter>}
        this.coordinates = coordinates;
        //Indicate if ship is palesed on the field
        this.isPlaced = false;
        this.color = "rgb(211, 211, 211)";
        this.state = {
            color:"rgb(211, 211, 211)"
        }
        
    }
}