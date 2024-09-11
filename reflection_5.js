function flatten_list(lol) {
    return accumulate((lst, res) => append(lst, res), 
                      null, lol);
}

function tree_sum(tree) {
    return is_null(tree)
        ? 0
        : (is_list(head(tree))
            ? tree_sum(head(tree))
            : head(tree))
          + tree_sum(tail(tree));
}

function tree_sum(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0, tree);
}

function accumulate_tree(f, op, initial, tree) {
    return accumulate(
        (subtree, res) => 
            is_list(subtree) 
                ? accumulate_tree(f, op, res, subtree)
                : op(f(subtree), res),
        initial, tree);
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);