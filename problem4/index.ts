// Implementation A: Iterative approach
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Implementation B: Mathematical formula approach
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

// Implementation B opt: Using mod approach
function sum_to_n_b_opt(n: number): number {
    // Handling negative numbers
    if (n < 0) return 0;

    // The sum of numbers from 1 to n is equivalent to the sum of
    // (1 + n) repeated n/2 times, plus n if n is odd
    const pairs = Math.floor(n / 2);
    const sum = pairs * (n + 1);

    // If n is odd, add the middle number
    return sum + (n % 2 === 1 ? Math.ceil(n / 2) : 0);
}

// Implementation C: Recursive approach
function sum_to_n_c(n: number): number {
    // Base case
    if (n <= 1) {
        return n;
    }
    // Recursive case
    return n + sum_to_n_c(n - 1);
}