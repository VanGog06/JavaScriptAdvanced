function highlight(selector) {
    let start = $(selector);
    let maxDepth = 0;
    let maxDepthElement = 1;

    function depthLookup(depth, element) {
        if (depth > maxDepth) {
            maxDepth = depth;
            maxDepthElement = element;
        }

        let children = $(element).children();
        children.each((index, element) => depthLookup(depth + 1, element));
    }

    depthLookup(1, start);
    let currentElement = $(maxDepthElement);
    currentElement.addClass('highlight');

    while(maxDepth) {
        maxDepth--;
        currentElement.addClass('highlight');
        currentElement = currentElement.parent();
    }
}

highlight('#content');