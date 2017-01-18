function orderRectangles(rectangles) {
    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: function() {
                return rect.width * rect.height;
            },
            compareTo: function(other) {
                let result = other.area() - rect.area();
                return result || other.width - rect.width;
            }
        };

        return rect;
    }

    let result = [];

    for (let [width, height] of rectangles) {
        let currentRect = createRect(width, height);
        result.push(currentRect);
    }

    result.sort((a, b) => a.compareTo(b));
    return result;
}

console.log(orderRectangles([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]));
