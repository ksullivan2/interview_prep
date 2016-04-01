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
				prettyPrint(queensList)
				return queensList

			} 

			findPlaceForQueen(startIndex+1, copyQueens(queensList))
			
		}
	}
	
	return false;
}


var count = 1;

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

	console.log(count)
	for (var i = 0; i < board.length; i++) {
		console.log(board[i].toString())
	}

	count++
		
}
	

	
findPlaceForQueen(0, copyQueens(QUEENS_LIST))