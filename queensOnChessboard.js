//print all ways of arranging 8 queens on 8x8 chessboard so that none share same row, column, or diagonal

function queen() {
	this.row = null;
	this.col = null;
}

const QUEENS_LIST = []
for (var i = 0; i < 8; i++) {
	QUEENS_LIST.push(new queen)
}

function copyQueens(queensList) {
	var copiedQueensList = []
	for (var i = 0; i < queensList.length; i++) {
		copiedQueensList.push(queensList[i])
	}

	return copiedQueensList
}


function isValidPlacement(row, col, indexOfCurrentQueen, queensList) {
	for (var i = 0; i < indexOfCurrentQueen; i++) {
		if (queensList[i].col === col ||
			Math.abs(queensList[i].row - row) === Math.abs(queensList[i].col - col)){
			return false;
		}
	}
	return true;
}

function findPlaceForQueen(startIndex, queensList){
	var permutations = []


	for (var col = 0; col < 8; col++) {
		if (isValidPlacement(startIndex, col, startIndex, queensList)){
			queensList[startIndex].row = startIndex;
			queensList[startIndex].col = col;

			//base case: we found a valid permutation
			if (startIndex === queensList.length - 1){
				return queensList

			} else {
				var finishedList = findPlaceForQueen(startIndex+1, copyQueens(queensList))
				if (finishedList != false){
					if (startIndex !== 0){
						return finishedList
					} else {
						permutations.push(finishedList)
						prettyPrint(finishedList)
					}
				}
				// console.log(row, col, "trying next row/col")
			}
			
		}
	}
	

	if (startIndex !== 0){
		return false
	} else {
		return permutations
	}
}



function prettyPrint(queensList){
	var board = []
	for (var i = 0; i < 8; i++) {
		board.push([])
		for (var j = 0; j < 8; j++) {
			board[i].push("_")
		}
	}

	for (var i = 0; i < queensList.length; i++) {
		board[queensList[i].row][queensList[i].col] = "Q"
	}

	for (var i = 0; i < board.length; i++) {
		console.log(board[i].toString())
	}
		console.log()
}
	
function equivalentQueensList(list1, list2) {
	var somethingMatched = false

	for (var i = 0; i < list1.length; i++) {
		for (var j = 0; j < list2.length; j++) {
			if (list1[i].row === list2[j].row && list1[i].col === list2[j].col){
				somethingMatched = true;
				break;
			}
		}
		if (!somethingMatched){return false}
		somethingMatched = false;
	}
	return true
}
	
findPlaceForQueen(0, copyQueens(QUEENS_LIST))