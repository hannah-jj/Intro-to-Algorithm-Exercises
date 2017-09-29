//#11
//optimize space to store all URLs visited using Trie
//space is O(x^n) where x is the number of chars eligible to be a URL char
//n is length of allowable url
function Trie() {
    this.rootNode = {};
}

Trie.prototype.checkPresentAndAdd = function(word) {

    var currentNode = this.rootNode;
    var isNewWord = false;

    // Work downwards through the trie, adding nodes
    // as needed, and keeping track of whether we add
    // any nodes.
    for (var i = 0; i < word.length; i++) {
        var char = word[i];

        if (!currentNode.hasOwnProperty(char)) {
            isNewWord = true;
            currentNode[char] = {};
        }

        currentNode = currentNode[char];
    }

    // Explicitly mark the end of a word.
    // Otherwise, we might say a word is
    // present if it is a prefix of a different,
    // longer word that was added earlier.
    if (!currentNode.hasOwnProperty("End of Word")) {
        isNewWord = true;
        currentNode["End of Word"] = {};
    }

    return isNewWord;
}

function betterPrint(nestedWords){
	var result = JSON.stringify(nestedWords)
	console.log(result.replace(/,/g, ',\n'));
}

var trie = new Trie;
console.log(JSON.stringify(trie));

trie.checkPresentAndAdd("www.dog.com");
console.log(JSON.stringify(trie.rootNode));
trie.checkPresentAndAdd("www.dog.com/about");
console.log(JSON.stringify(trie.rootNode));
trie.checkPresentAndAdd("www.dog.com/contact");
betterPrint(trie.rootNode);




