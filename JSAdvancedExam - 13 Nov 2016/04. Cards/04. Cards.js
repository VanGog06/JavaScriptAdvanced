function cardDeckBuilder(selector) {
    let container = $(selector);

    String.prototype.toUnicode = function(){
        var result = "";
        for(var i = 0; i < this.length; i++){
            result += "\\u" + ("000" + this[i].charCodeAt(0).toString(16)).substr(-4);
        }
        return result;
    };

    return {
        addCard: function(face, suit) {
            let unicodeSuit = '';

            switch (suit) {
                case 'C':
                    unicodeSuit = '\u2663';
                    break;
                case 'D':
                    unicodeSuit = '\u2666';
                    break;
                case 'H':
                    unicodeSuit = '\u2665';
                    break;
                case 'S':
                    unicodeSuit = '\u2660';
                    break;
            }

            let div = $('<div>').addClass('card').text(face + ' ' + unicodeSuit);

            let that = this;

            div.click(function() {
                let cards = $('.card').toArray();
                cards = cards.reverse();
                container.empty();
                /*for (let card of cards) {
                    container.append(card);
                }*/

                for (let card of cards) {
                    let split = card.textContent.split(' ');
                    let newSuit = '';

                    switch (split[1]) {
                        case '\u2663':
                            newSuit = 'C';
                            break;
                        case '\u2666':
                            newSuit = 'D';
                            break;
                        case '\u2665':
                            newSuit = 'H';
                            break;
                        case '\u2660':
                            newSuit = 'S';
                            break;
                    }

                    that.addCard(split[0], newSuit);
                }
            });

            container.append(div);
        }
    }
}