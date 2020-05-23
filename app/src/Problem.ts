
export type Operation = "+" | "-" | "×" | "÷"


export function ProblemGenerator(operation: Operation): Problem {
    const num1 = Math.floor((Math.random() * 10) + 1);
    const num2 = Math.floor((Math.random() * 10) + 1);
    return new Problem(num1, num2, operation);
}

export class Problem {
    readonly firstOperand: number;
    readonly secondOperand: number;
    readonly expressionEquals: string;
    readonly result: number;

    constructor(firstOperand: number, secondOperand: number, operation: Operation) {
        this.firstOperand = firstOperand
        this.secondOperand = secondOperand;
        this.expressionEquals = `${firstOperand}+${secondOperand}=`;
        this.result = this.compute(firstOperand, secondOperand, operation)
    }

    private compute = (num1: number, num2: number, op: Operation) => {
        var result: number;
        switch (op) {
            case "+": {
                result = num1 + num2
                break
            }
            case "-": {
                result = num1 - num2
                break
            }
            case "×": {
                result = num1 * num2
                break
            }
            case "÷": {
                result = num1 / num2 // make sure to handle div by zero
                break
            }
        }
        return result
    }
}
