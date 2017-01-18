function solve(input) {
    switch(input) {
        case "upvote":
            this.upvotes += 1;
            break;
        case "downvote":
            this.downvotes += 1;
            break;
        case "score":
            return score(this);
    }

    function score(obj) {
        let modifier = 0;
        let totalVotes = obj.downvotes + obj.upvotes;
        let score = obj.upvotes - obj.downvotes;

        if (totalVotes > 50) {
            modifier = Math.ceil(Math.max(obj.upvotes, obj.downvotes) * 0.25);
        }

        let rating = '';
        if (totalVotes >= 10) {
            if (score < 0) {
                rating = 'unpopular';
            } else if ((obj.upvotes / totalVotes) > 0.66) {
                rating = 'hot';
            } else if (obj.upvotes > 100) {
                rating = 'controversial';
            } else {
                rating = 'new';
            }
        } else {
            rating = 'new';
        }

        return [obj.upvotes + modifier,
            obj.downvotes + modifier,
            score,
            rating];
    }
}

let post = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
};


//solve.call(post, 'upvote');
console.log(solve.call(post, 'score'));

/*solve.call(post, 'upvotes');
solve.call(post, 'downvotes');
console.log(solve.call(post, 'score'));

for (let i = 0 ;i < 50; i++) {
    solve.call(post, 'downvotes');
}

console.log(solve.call(post, 'score'));*/