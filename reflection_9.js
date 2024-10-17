// Q1 
function f(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    
}
f(20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);

// Q2
function stash_numbers(n) {
    function stash(x) {
        if (x > n) {
            return 0;
        }
        x + stash(x + 1);
    }
    stash(1);
}
stash_numbers(20);

// Q3
const x = 1;
{
    const x = 2;
    {
        const x = 3;
        {
            const x = 4;
            {
                const x = 5;
            }
        }
    }
}

// Q4
(x => x => x => x => x => x)(1)(2)(3)(4)(5);

// Q5
function branch(n) {
    return n === 0
        ? true
        : branch(n - 1) || false;
}
branch(20);














