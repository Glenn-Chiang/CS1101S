function zip_list_of_streams(streams) {
    function helper(ss, streams) {
        return is_null(ss)
            ? helper(map(s => stream_tail(s), streams), 
                     map(s => stream_tail(s), streams))
            : pair(head(head(ss)), 
                () => helper(tail(ss), streams));
    }
    return helper(streams, streams);
}

function repeating_digits(n) {
    function helper(x) {
        return pair(x, () => helper(x * 10 + n));
    }
    return helper(n);
}

const rep_1 = repeating_digits(1); // 1, 11, 111...
const rep_2 = repeating_digits(2); // 2, 22, 222...
const rep_3 = repeating_digits(3); // 3, 33, 333...
const streams = list(rep_1, rep_2, rep_3);
eval_stream(zip_list_of_streams(streams), 10); // 1, 2, 3, 11, 22, 33...

function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
                () => add_streams(stream_tail(s1), 
                                  stream_tail(s2)));
}

function partial_sums(s) {
    return pair(head(s), 
        () => add_streams(stream_tail(s), partial_sums(s)));
}

const integers = integers_from(1); // 1, 2, 3, 4, 5...
eval_stream(partial_sums(integers), 10); // 1, 3, 6, 10, 15...
