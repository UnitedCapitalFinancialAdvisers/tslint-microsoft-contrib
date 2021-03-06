import * as ts from 'typescript';
export declare module ChaiUtils {
    function isExpectInvocation(node: ts.PropertyAccessExpression | ts.CallExpression): boolean;
    function getLeftMostCallExpression(node: ts.PropertyAccessExpression | ts.CallExpression): ts.CallExpression;
    function getFirstExpectCallParameter(node: ts.CallExpression): ts.Node;
    function getFirstExpectationParameter(node: ts.CallExpression): ts.Node;
    function isEqualsInvocation(propExpression: ts.PropertyAccessExpression): boolean;
}
