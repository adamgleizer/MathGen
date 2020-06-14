
export type Operation = "+" | "-" | "×" | "÷" | "- nonNegative"

export type compoundNumber = {
    whole: number,
    remainder: number | null
}


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
    readonly result: compoundNumber;

    constructor(firstOperand: number, secondOperand: number, operation: Operation) {
        this.firstOperand = firstOperand
        this.secondOperand = secondOperand;
        var printedOperation : Operation = operation === "- nonNegative" ? "-" : operation

        this.expressionEquals = `${firstOperand}${printedOperation}${secondOperand}=`;
        this.result = this.compute(firstOperand, secondOperand, operation)
    }

    equals(other: Problem) {
        if (other.expressionEquals === this.expressionEquals && other.firstOperand === this.firstOperand
                                                             && other.secondOperand === this.secondOperand) {
            return true;
        }
        return false;
    }

    private compute = (num1: number, num2: number, op: Operation) => {
        var result: compoundNumber;
        switch (op) {
            case "+": {
                result = {whole: num1 + num2, remainder: null}
                break
            }
            case "-" : {
                result = {whole: num1 - num2, remainder: null}
                break
            }
            case "- nonNegative" : {
                result = {whole: num1 - num2, remainder: null}
                break
            }
            case "×": {
                result = {whole: num1 * num2, remainder: null}
                break
            }
            case "÷": {
                result = {whole: ~~(num1 / num2), remainder: num1 % num2}
                break
            }
        }
        return result
    }
}