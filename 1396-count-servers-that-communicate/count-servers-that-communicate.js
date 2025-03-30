/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    const m = grid.length
    const n = grid[0].length

    var totalCount = 0
    var rowCount = new Array(m).fill(0)
    var colCount = new Array(n).fill(0)

    for (i = 0; i < m; i++){
        for (j = 0; j < n; j++){
            if(grid[i][j] === 1){
                rowCount[i]++
                colCount[j]++
            }        
        }       
    }

    for (i = 0; i < m; i++){
        for (j = 0; j < n; j++){
            if(grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)){
                totalCount++
            }        
        }       
    }

    return totalCount;
};