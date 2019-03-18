// 5 задача

var arr1 = [1, 10, 145, 8],
	x1 = 15;
var arr2 = [23, 674, 4, 12],
	x2 = 4;

function inArray(x, arr) {
	if (arr === undefined) {
		arr = this;
	}
	for (var  i = 0; i < arr.length; i++) {
		if (x === arr[i]) {
			return true;
		}
	}
	return false;
}
Array.prototype.inArray = inArray;

console.log(inArray(x1, arr1));
console.log(arr2.inArray(x2));