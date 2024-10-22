function linear_search(arr, val) {
    const len = array_length(arr);
    for (let i = 0; i < len; i = i + 1) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}

function make_optimized_search(A) {
    const len = array_length(A);
    // Make local copy of array
    const B = [];
    for (let i = 0; i < len; i = i + 1) {
        B[i] = A[i];
    }
    merge_sort(B);
    return binary_search(B);
}
// Runtime: O(nlogn)

function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let pointer = L;
        for (let j = 0; j < i; j = j + 1) {
            if (head(pointer) > head(tail(pointer))) {
                const temp = head(pointer);
                set_head(pointer, head(tail(pointer)));
                set_head(tail(pointer), temp);
            }
            L = tail(L);
        }
    }
}

const mem = [];

function read(i, j) {
    if (mem[i] === undefined) {
        return undefined;
    }
    return mem[i][j];
}

function write(i, j, value) {
    if (mem[i] === undefined) {
        mem[i] = [];
    }
    mem[i][j] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 5 :
        kinds_of_coins === 2 ? 10 :
        kinds_of_coins === 3 ? 20 :
        kinds_of_coins === 4 ? 50 :
        kinds_of_coins === 5 ? 100 : 0;
}

function mem_cc(n, k) {
    if (n >= 0 && k >= 0 && read(n, k) !== undefined) {
        return read(n, k);
    }
    const result = n === 0
        ? 1
        : n < 0 || k === 0
        ? 0
        : mem_cc(n, k - 1)
            + mem_cc(n - first_denomination(k),
                     k);
    if (n >= 0 && k >= 0) {
        write(n, k, result);
    }                     
    return result;
}
// Time: O(nk)
// Space: O(nk)