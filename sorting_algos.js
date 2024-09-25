function insertion_sort(xs) {
    function insert(x, xs) {
        return is_null(xs)
            ? list(x)
            : x <= head(xs)
            ? pair(x, xs)
            : pair(head(xs), insert(x, tail(xs)));
    }
    return is_null(xs)
        ? null
        : insert(head(xs), insertion_sort(tail(xs)));
}
// Best: N, Worst: N^2, Average: N^2

function selection_sort(xs) {
    function select(xs) {
        return accumulate((x, y) => x < y ? x : y, head(xs), tail(xs));
    }
    if (is_null(xs)) {
        return xs;
    } else {
        const x = select(xs);
        return pair(x, selection_sort(remove(x, xs)));
    }
}
// Best: N^2, Worst: N^2, Average: N^2

function merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const mid = middle(length(xs));
        const first_half = take(xs, mid);
        const second_half = drop(xs, mid);
        return merge(merge_sort(first_half), 
                     merge_sort(second_half));
    }
}
// Best: NlogN, Worst: NlogN, Average: NlogN

function merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        const x = head(xs);
        const y = head(ys);
        return x < y
            ? pair(x, merge(tail(xs), ys))
            : pair(y, merge(xs, tail(ys)));
    }
}

function middle(n) {
    return math_floor(n / 2);
}

function take(xs, n) {
    return n === 0
        ? null
        : pair(head(xs), take(tail(xs), n - 1));
}

function drop(xs, n) {
    return n === 0
        ? xs
        : drop(tail(xs), n - 1);
}

















