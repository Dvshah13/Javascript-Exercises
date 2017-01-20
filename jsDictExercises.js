var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}
undefined
phonebookDict.Elizabeth
"484-584-2923"
phonebookDict["Kareem"] = "382-123-1234";
delete phonebookDict['Alice']
phonebookDict["Bob"] = '968-345-2345'
console.log(phonebookDict); or phonebookDict;


function histogram(word) {
    var dict = {};
    for (var i = 0; i < word.length; i++) {
        var key = word.charAt(i);
        if (key in dict) {
            dict[key] += 1;
        }
        else {
            dict[key] = 1;
        }
    }
    console.log(dict);
}

histogram('bananas');
