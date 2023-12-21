console.log("iterators");

function fruitIteration(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                done: true
            }
        }
    }
}

const a = ['banana', 'grapes', 'mango'];
console.log('array is : ',a);
let val = fruitIteration(a);
console.log(val.next().value);
console.log(val.next().value);
console.log(val.next().value);
// console.log(val.next().value);