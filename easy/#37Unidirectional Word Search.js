class Solution {
    solve(board, word) {
        return this.helper(board, word) || this.helper(this.transpose(board), word)
    }

    helper(matrix, word) {
        return matrix.some(row => row.join("").includes(word))
    }

    transpose(matrix) {
        let mat = [...matrix]

        for (var i = 0; i < mat.length; i++) {
            for (var j = 0; j < i; j++) {
                const tmp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = tmp;
            }
        }

        return mat
    }
}
