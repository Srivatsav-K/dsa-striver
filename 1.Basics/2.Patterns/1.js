/*
  Square pattern (N=3)
    * * *
    * * *
    * * *
  
  Rows : outer loop
  Columns : inner loop
*/

/**
 *
 * @param {number} n
 */
function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

printPattern(2);
