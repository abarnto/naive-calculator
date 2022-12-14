export function sum(args: any[]): number;

export function substract(args: any[]): number;

export function multiply(args: any[]): number;

export type IntegerDivisionResult = {
  quotient: number;
  remainder: number;
};
export function divide(dividend: number, divider: number): IntegerDivisionResult;
