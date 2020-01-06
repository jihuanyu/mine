//力扣  寻找两个有序数组的中位数
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2]; //全部
    let arr1 = arr.filter(item => item < 0); //负数
    arr1 = arr1.sort().reverse();
    let arr2 = arr.filter(item => item >= 0);
    arr2 = arr2.sort(function(a, b) {
        return a - b;
    });
    let arr3 = [...arr1, ...arr2];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3.length % 2 == 0) {
            var a = arr3.length / 2;
            var mid = (arr3[a] + arr3[a - 1]) / 2;
            console.log(mid);
            return mid;
        } else if (arr3.length == 1) {
            return arr3[0];
        } else {
            var b = (arr3.length - 1) / 2;
            var mid = arr3[Math.abs(b)];
            console.log(mid);
            return mid;
        }
    }
};