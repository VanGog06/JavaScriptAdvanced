(function() {
    let Suits = {SPADES: '♠', HEARTS: '♥', DIAMONDS: '♦', CLUBS: '♣'};
    let Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error('Wrong card suit: ' + suit);
            }

            this._suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!Faces.includes(face)) {
                throw new Error('Wrong card face: ' + face);
            }

            this._face = face;
        }

        toString() {
            return this.face + this.suit;
        }
    }

    return { Suits, Card };
})();