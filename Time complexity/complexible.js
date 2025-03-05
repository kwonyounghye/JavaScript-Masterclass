function logAtMost10(n) {
    // n과 10 중 더 작은 것을 선택함 -> 최대: 10
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
//n(1)