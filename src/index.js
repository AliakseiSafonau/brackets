module.exports = function check(str, bracketsConfig) {
  let result = true,
        counter = '',
        count = '',
        anotherCount = 0;

    if ((str.length + 1) % 2 === 0 || str[0] === '8') {
        result  = false
    } else {
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if (str[i] === bracketsConfig[j][0]) {
                    counter = counter + bracketsConfig[j][0];
                    count = count + j;
                    j = bracketsConfig.length;
                    anotherCount = 0;
                } else if (count.length && str[i] === bracketsConfig[Number(count[count.length - 1])][1]) {
                    if (counter[counter.length - 1] === bracketsConfig[Number(count[count.length - 1])][0]) {
                        counter = counter.slice(0, counter.length - 1);
                        count = count.slice(0, count.length - 1);
                        anotherCount = 0;
                        j = bracketsConfig.length;
                        if (counter.length === 0 && i === str.length - 1) {
                            j = bracketsConfig.length;
                            i = str.length;
                        }
                    } else {
                        result = false;
                        j = bracketsConfig.length;
                        i = str.length;
                    }
                } else {
                    anotherCount = anotherCount + 1;
                    if (anotherCount === bracketsConfig.length) {
                        result = false;
                        j = bracketsConfig.length;
                        i = str.length;
                    }
                }
            }
        }
    }
    return result;
}
