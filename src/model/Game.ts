
export default class Game {
    name: string;
    label: string
    image: string;
    description: string;
    entryType: string

    constructor(name: string, label: string, image: string, description: string, entryType: string) {
        this.name = name;
        this.label = label;
        this.image = image;
        this.description = description;
        this.entryType = entryType;
    }
}