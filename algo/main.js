function twoSum(array, target) {
    const numIndices = {};

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i];
        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }
        numIndices[array[i]] = i;
    }

    return null;
}

// Exemple utilisation comme dans le DS
const array = [3, 2, 4];
const target = 6;
console.log(twoSum(array, target));
