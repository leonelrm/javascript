function diff_cal(n) {
    if(n<=19) {
        return (19 - n);
    }else {
        return ((n-19)*3);
    }
}
console.log(diff_cal (5));