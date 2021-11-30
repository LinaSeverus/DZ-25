'use strict';

function counter(initialNum = 0) {

    let statistic = {
        increase: 0,
        decrease: 0,
        get: 0
    }

    const funcs = {

        increase(num2) {
            statistic.increase++;
            return initialNum += num2;
        },
        decrease(num2) {
            statistic.decrease++;
            return initialNum -= num2;
        },
        get() {
            statistic.get++;
            return initialNum;
        },
        getStatistic() {
            return statistic;
        }
    }
    return funcs;
}

let generalCounter = counter();

generalCounter.decrease(10);
generalCounter.increase(40);
generalCounter.increase(100);
console.log(generalCounter.get());

console.log(generalCounter.getStatistic());