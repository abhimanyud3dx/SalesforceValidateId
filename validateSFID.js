(function(w) {
    var keyCode = new Object();
    keyCode['00000'] = 'A';
    keyCode['00001'] = 'B';
    keyCode['00010'] = 'C';
    keyCode['00011'] = 'D';
    keyCode['00100'] = 'E';
    keyCode['00101'] = 'F';
    keyCode['00110'] = 'G';
    keyCode['00111'] = 'H';
    keyCode['01000'] = 'I';
    keyCode['01001'] = 'J';
    keyCode['01010'] = 'K';
    keyCode['01011'] = 'L';
    keyCode['01100'] = 'M';
    keyCode['01101'] = 'N';
    keyCode['01110'] = 'O';
    keyCode['01111'] = 'P';
    keyCode['10000'] = 'Q';
    keyCode['10001'] = 'R';
    keyCode['10010'] = 'S';
    keyCode['10011'] = 'T';
    keyCode['10100'] = 'U';
    keyCode['10101'] = 'V';
    keyCode['10110'] = 'W';
    keyCode['10111'] = 'X';
    keyCode['11000'] = 'Y';
    keyCode['11001'] = 'Z';
    keyCode['11010'] = '0';
    keyCode['11011'] = '1';
    keyCode['11100'] = '2';
    keyCode['11101'] = '3';
    keyCode['11110'] = '4';
    keyCode['11111'] = '5';

    function validateId(str) {
        if (str.length != 18) {
            return false;
        }
        var checksum = str.substring(15, 18);
        var res = convertToBinary(str.substring(0, 5).split('').reverse().join(''));
        var res1 = convertToBinary(str.substring(5, 10).split('').reverse().join(''));
        var res2 = convertToBinary(str.substring(10, 15).split('').reverse().join(''));
        var code = keyCode[res] + keyCode[res1] + keyCode[res2];
        return code == checksum;
    }

    function convertToBinary(keyPiece) {
        var a = keyPiece.split('');
        for (var i = 0; i < a.length; i++) {
            a[i] = isUpperCase(a[i]);
        }
        return a.join('');
    }

    function isUpperCase(character) {
        if (character == character.toLowerCase()) {
            return '0';
        }
        return '1';
    }

    w.SF_ID = {
        "isValid": validateId
    };;

})(window);
