function isPalindrome(str) {
    
    let cleanStack = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanStack.push(char);
        }
    }
    
    
    let reversedStack = [];
    let tempStack = [...cleanStack]; 
    while (tempStack.length > 0) {
        reversedStack.push(tempStack.pop());
    }
    
    
    while (cleanStack.length > 0 && reversedStack.length > 0) {
        if (cleanStack.pop() !== reversedStack.pop()) {
            return false;
        }
    }
    
    return true;
}
