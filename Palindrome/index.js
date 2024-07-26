// * Making a function that cheak giving string is palindrome or not
function palindrome(str) {
    str = str.toLowerCase();
    var ispalindrome = "";
    for (var i = str.length - 1; i >= 0; i--) {
        ispalindrome = ispalindrome + str[i];
    }
    console.log(ispalindrome);
    if (str === ispalindrome) {
        console.log("Yes the Given String is Palindrome");
    }
    else {
        console.log("No the Provided is string is not Palindrome");
    }
}
palindrome("Level");
