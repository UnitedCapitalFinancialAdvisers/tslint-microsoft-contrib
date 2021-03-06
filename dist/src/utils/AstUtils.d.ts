import * as ts from 'typescript';
export declare module AstUtils {
    function getLanguageVariant(node: ts.SourceFile): ts.LanguageVariant;
    function getFunctionName(node: ts.CallExpression | ts.NewExpression): string;
    function getFunctionTarget(expression: ts.CallExpression): string;
    function isJQuery(functionTarget: string): boolean;
    function hasModifier(modifiers: ts.ModifiersArray, modifierKind: number): boolean;
    function dumpTypeInfo(expression: ts.Expression, languageServices: ts.LanguageService, typeChecker: ts.TypeChecker): void;
    function isPrivate(node: ts.Node): boolean;
    function isProtected(node: ts.Node): boolean;
    function isPublic(node: ts.Node): boolean;
    function isStatic(node: ts.Node): boolean;
    function isLet(node: ts.Node): boolean;
    function isExported(node: ts.Node): boolean;
    function isAssignmentOperator(token: ts.SyntaxKind): boolean;
    function isBindingLiteralExpression(node: ts.Node): node is (ts.ArrayLiteralExpression | ts.ObjectLiteralExpression);
    function findParentBlock(child: ts.Node): ts.Node;
    function isSameIdentifer(source: ts.Node, target: ts.Node): boolean;
    function getDeclaredMethodNames(node: ts.ClassDeclaration): string[];
    function isDeclarationFunctionType(node: ts.PropertyDeclaration | ts.VariableDeclaration | ts.ParameterDeclaration): boolean;
    function isUndefined(node: ts.Expression): boolean;
    function isConstant(node: ts.Expression): boolean;
    function isConstantExpression(node: ts.Expression): boolean;
}
