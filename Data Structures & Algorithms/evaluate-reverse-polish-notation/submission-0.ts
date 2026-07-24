class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        for (let i = 0; i < tokens.length; i++) {
            // switch method:
            // switch (tokens[i]) {
            //     case "+": {
            //         let num2 = stack.pop();
            //         let num1 = stack.pop();
            //         stack.push(num1 + num2);
            //         break;
            //     }

            //     case "-": {
            //         let num2 = stack.pop();
            //         let num1 = stack.pop();
            //         stack.push(num1 - num2);
            //         break;
            //     }
            //     case "*": {
            //         let num2 = stack.pop();
            //         let num1 = stack.pop();
            //         stack.push(num1 * num2);
            //         break;
            //     }
            //     case "/": {
            //         let num2 = stack.pop();
            //         let num1 = stack.pop();
            //         stack.push(Math.trunc(num1 / num2));
            //         break;
            //     }
            //     default:
            //         stack.push(Number(tokens[i]));
            // }
            // if method:
            if (Number.isNaN(Number(tokens[i]))) {
                let num2 = stack.pop();
                let num1 = stack.pop();
                if (tokens[i] === "+") {
                    stack.push(num1 + num2);
                }
                if (tokens[i] === "-") {
                    stack.push(num1 - num2);
                }
                if (tokens[i] === "*") {
                    stack.push(num1 * num2);
                }
                if (tokens[i] === "/") {
                    stack.push(Math.trunc(num1 / num2));
                }
            } else stack.push(Number(tokens[i]));
        }
        return stack[stack.length - 1];
    }
}
