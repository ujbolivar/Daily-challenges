/*

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.



*/

function solution(nums){
    if (!nums) {
      return []
    }else{
      return nums.sort((a, b) => a - b)}
   }

console.log(solution([6, 3, 77, 88, 64, 23, 75, 1, 78]))