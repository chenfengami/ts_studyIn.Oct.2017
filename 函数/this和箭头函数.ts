
//this和箭头函数
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);


//因为此时的this是在对象字面量里面使用的，因此this.suits[pickedSuit]的类型依旧为any


function f(this: void) {
    //确保 this 在单独的函数体里面是不能用的。
}

//改造，让类型重用变得清晰一点
interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck_: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    //现在ts知道createCardPicker期望在某个Deck对象上调用。也就是说this是Deck类型的，而非any。
    createCardPicker: function (this: Deck) {
        return () => {
            //...
        }
    }
}



//this参数在回调函数里

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickBad(this: Handler, e: Event) {
        //oops, used this here. using this callback would crash at runtime.
        // now this type is Handler But Handler's this is void would crash!;
        this.info = e.message;
    }
}

let h = new Handler();
uiElement.addClickListener(h.onClickBad); //error!
//指定了this类型后，你显式声明onClickBad必须在Handler的实例上调用。 然后TypeScript会检测到 addClickListener要求函数带有this: void。 改变 this类型来修复这个错误：

class Handler_ {
    info: string;
    onClickGood(this: void, e: Event) {
        // can't use this here because it's of type void!
        console.log('clicked!');
    }
}
/*因为onClickGood指定了this类型为void，因此传递addClickListener是合法的。 
当然了，这也意味着不能使用 this.info. 如果你两者都想要，你不得不使用箭头函数了：
*/

class Handler__ {
    info: string;
    onClickGood = (e: Event) => { this.info = e.message }
}
//