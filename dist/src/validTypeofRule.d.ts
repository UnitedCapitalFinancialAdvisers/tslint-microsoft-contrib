import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    static FAILURE_STRING: string;
    static VALID_TERMS: string[];
    private static isWarningShown;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
