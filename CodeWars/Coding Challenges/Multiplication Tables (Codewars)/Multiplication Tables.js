function multiplicationTable(row, col) {
  var multTable = [];

  for (var i = 1; i <= row; i++) {
    var rowArr = [];
    for (var k = 1; k <= col; k++) {
      rowArr.push(i * k);
    }
    multTable.push(rowArr);
  }

  console.log(multTable);

}

multiplicationTable(2, 2) //should return [[1,2],[2,4]])
//multiplicationTable(3, 3) //should return [[1,2,3],[2,4,6],[3,6,9]])
//multiplicationTable(3, 4) //should return [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
//multiplicationTable(4, 4) //should return [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
//multiplicationTable(2, 5) //should return [[1,2,3,4,5],[2,4,6,8,10]])
