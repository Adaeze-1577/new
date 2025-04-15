function mergeAndSort(array1, array2, sortOrder) {
    // Merge the arrays
    const mergedArray = [...array1, ...array2];
    
    // Sort based on requested order
    if (sortOrder === 'ascending') {
        return mergedArray.sort((a, b) => a - b);
    } else if (sortOrder === 'descending') {
        return mergedArray.sort((a, b) => a - b).reverse();
    } else {
        return 'wrong sort';
    }
}

// Alternative implementation using a single sort
function mergeAndSortAlt(array1, array2, sortOrder) {
    const merged = array1.concat(array2);
    
    switch (sortOrder) {
        case 'ascending':
            return merged.sort((a, b) => a - b);
        case 'descending':
            return merged.sort((a, b) => b - a);
        default:
            return 'wrong sort';
    }
}


const arr1 = [3, 5, 1];
const arr2 = [6, 2, 4];

console.log(mergeAndSort(arr1, arr2, 'ascending'));   
console.log(mergeAndSort(arr1, arr2, 'descending'));  
console.log(mergeAndSort(arr1, arr2, 'alphabetical')); 
