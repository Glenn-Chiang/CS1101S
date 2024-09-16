function my_map(f, xs) {
    return accumulate((x, res) => pair(f(x), res), null, xs);
}

function remove_duplicates(lst) {
    return is_null(lst)     
        ? null
        : pair(head(lst), 
               remove_duplicates(filter(x => x !== head(lst), tail(lst))));
}

function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin. List of lists
        const combi_A = makeup_amount(x, tail(coins));
        
        // Combinations that do not use the head coin
        // for the remaining amount. List of lists.
        const combi_B = makeup_amount(x - head(coins), tail(coins));
        
        // Combinations that use the head coin. List of lists
        const combi_C = map(combi => pair(head(coins), combi), combi_B);
        
        return append(combi_A, combi_C);
    }
}

display_list(makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50)));
