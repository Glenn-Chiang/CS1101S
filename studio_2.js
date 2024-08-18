function biggie_size(combo) {
    return combo + 4;
}

function unbiggie_size(combo) {
    return combo - 4;
}

function is_biggie_sized(combo) {
    return combo > 4;
}

function combo_price(combo) {
    return is_biggie_sized(combo) 
        ? unbiggie_size(combo) * 1.17 + 0.5
        : combo * 1.17;
}

function empty_order() {
    return 0;
}

function add_to_order(order, combo) {
    return order * 10 + combo;
}

function last_combo(order) {
    return order % 10;
}

function other_combos(order) {
    return (order - last_combo(order)) / 10;
}