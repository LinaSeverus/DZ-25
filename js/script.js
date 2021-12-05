'use strict';

function counter(initialNum = 0) {

    const statistic = {
        increase: 0,
        decrease: 0,
        get: 0,
        getStatistic: 0
    }

    return {

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
            statistic.getStatistic++;
            return statistic;
        },
        zeroing() {
            initialNum = 0;
            statistic.increase = 0;
            statistic.decrease = 0;
            statistic.get = 0;
            statistic.getStatistic = 0;

        }
    }

}


const generalCounter = counter();

generalCounter.decrease(10);
generalCounter.increase(40);
generalCounter.increase(100);
console.log(generalCounter.get());

console.log(generalCounter.getStatistic());

generalCounter.zeroing();

console.log(generalCounter.get());
console.log(generalCounter.getStatistic());


