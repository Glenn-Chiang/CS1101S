function flatten_list(lol) {
    return accumulate(append, null, lol);
}

function flatten_tree(tree) {
    return accumulate(
        (subtree, res) => 
            is_list(subtree) 
                ? append(flatten_tree(subtree), res)
                : append(list(subtree), res),
        null,
        tree);
}

function tree_sum(tree) {
    return is_null(tree)
        ? 0
        : (is_list(head(tree))
            ? tree_sum(head(tree))
            : head(tree))
          + tree_sum(tail(tree));
}

function accumulate_tree(f, op, initial, tree) {
    return accumulate(
        (subtree, res) => 
            is_list(subtree) 
                ? accumulate_tree(f, op, res, subtree)
                : op(f(subtree), res),
        initial, tree);
}
// The binary function op must be commutative and associative

function tree_sum(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0, tree);
}

function flatten_tree(tree) {
    return accumulate_tree(list, append, null, tree);
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);
