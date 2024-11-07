function runlength_encode(L) {
    if (is_null(L) || is_null(tail(L))) {
        return L;
    }
    
    const len = length(L);
    let res = list([head(L), 1]);
    
    let i = 0;
    
    for (let j = 1; j < len; j = j + 1) {
        if (list_ref(L, j) === list_ref(L, i)) {
            head(res)[1] = head(res)[1] + 1;
        } else {
            res = pair([list_ref(L, j), 1], res);
            i = j;
        }
    }
    
    return reverse(map(x => tail(x) === 1 ? head(x) : x, res));
}
