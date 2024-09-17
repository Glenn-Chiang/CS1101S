function remove_duplicates(lst) {
    return accumulate(
        (x, res) => pair(x, filter(y => y !== x, res)),
        null,
        lst);
}

function subsets(lst) {
    if (is_null(lst)) {
        return list(null);
    } else {
        // Subsets without head
        const setsA = subsets(tail(lst));
        
        // Subsets with head
        const setsB = map(set => pair(head(lst), set), setsA);
        
        return append(setsA, setsB);
    }
}

function permutations(s) {
    return is_null(s)
        ? list(null)
        : accumulate(append, null, 
            map(x => map(p => pair(x, p), 
                         permutations(remove(x, s))), 
                s));
}

