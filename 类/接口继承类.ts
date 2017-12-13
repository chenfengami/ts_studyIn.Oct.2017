class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {

}

class Image implements SelectableControl {
    select() { }
}

class Location {

}