function stream_tail(stream) {
    return tail(stream)();
}

function enum_stream(low, hi) {
    return low > hi
        ? null
        : pair(low,
               () => enum_stream(low + 1, hi));
}

function stream_ref(s, n) {
    return n === 0
        ? head(s)
        : stream_ref(stream_tail(s), n - 1);
}

function stream_map(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
               () => stream_map(f, stream_tail(s)));
}

function stream_filter(pred, s) {
    return is_null(s)
        ? null
        : pred(head(s))
        ? pair(head(s), 
            () => stream_filter(pred, stream_tail(s)))
        : stream_filter(pred, stream_tail(s));
}

function integers_from(n) {
    return pair(n, () => integers_from(n + 1));
}

// Make a list of the first n elements in the stream
function eval_stream(s, n) {
    return n === 0
        ? null
        : pair(head(s), eval_stream(stream_tail(s), n - 1));
}

function fibgen(a, b) {
    return pair(a, () => fibgen(b, a + b));
}

function more(a, b) {
    return (a > b) 
        ? more(1, b + 1)
        : pair(a, () => more(a + 1, b));
}














