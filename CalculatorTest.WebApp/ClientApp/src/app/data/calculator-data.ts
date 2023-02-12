export enum OperatorType {
  add = 1,
  subtract = 2,
  equals = 3
}
export const operators: Map<string, OperatorType> = new Map<string, OperatorType>([
  ['+', OperatorType.add],
  ['-', OperatorType.subtract],
  ['=', OperatorType.equals]
]);
export const numbers: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0
];
export interface IPostCalculatorOperation {
  start: number;
  amount: number;
}
export interface IPostCalculatorFeedback {
  success: boolean;
  newVal: number;
  feedback: string;
}
