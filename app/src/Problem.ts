
export type Operation = "+" | "-" | "×" | "÷" | "- nonNegative"


export function ProblemGenerator(operation: Operation): Problem {
    var upperBound: number = 10;
    const num1 = Math.floor((Math.random() * upperBound) + 1);
    if (operation === "- nonNegative") {
        upperBound = num1;
    }
    const num2 = Math.floor((Math.random() * upperBound) + 1);
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
        var printedOperation : Operation = operation === "- nonNegative" ? "-" : operation

        this.expressionEquals = `${firstOperand}${printedOperation}${secondOperand}=`;
        this.result = this.compute(firstOperand, secondOperand, operation)
    }

    equals(other: Problem) {
        if (other.expressionEquals === this.expressionEquals && other.result === this.result) {
            return true;
        }
        return false;
    }

    private compute = (num1: number, num2: number, op: Operation) => {
        var result: number;
        switch (op) {
            case "+": {
                result = num1 + num2
                break
            }
            case "-" : {
                result = num1 - num2
                break
            }
            case "- nonNegative" : {
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