"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('noOctalLiteralRule', function () {
    var ruleName = 'no-octal-literal';
    it('should not fail on similar but acceptable strings', function () {
        var script = 'test-data/NoOctalLiteral/NoOctalLiteralTestInput-passing.ts';
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should fail on 3 digit octal literals', function () {
        var script = "\n/**\n * The following code should have errors:\n */\nfunction demoScriptFail() {\n    var a = \"Sample text \\251\";\n    var b = \"Sample text \\254 more text\";\n    var c = 'Sample text \\351';\n    var d = 'Sample text \\354 more text';\n}";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": "Octal literals should not be used: \\251",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "startPosition": { "character": 26, "line": 6 }
            },
            {
                "failure": "Octal literals should not be used: \\254",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "startPosition": { "character": 26, "line": 7 }
            },
            {
                "failure": "Octal literals should not be used: \\351",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "startPosition": { "character": 26, "line": 8 }
            },
            {
                "failure": "Octal literals should not be used: \\354",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "startPosition": { "character": 26, "line": 9 }
            }
        ]);
    });
    it('should produce violations - batch1', function () {
        var inputFile = "\n/**\n * The following code should have errors:\n */\nfunction demoScriptFail1() {\n    return \"Sample text \\251\";\n    return \"Sample text \\254 more text\";\n    return \"Sample text \\23\";\n    return \"Sample text \\7\";\n    return \"Sample text \\x0025\";\n    return \"Sample text \\0\";\n    return \"Sample text \\\\\\0\";\n    return \"Sample text \\-0\";\n    return \"Sample text \\\\\\-0\";\n    return \"Sample text \\-035\";\n    return \"Sample text \\-235\";\n}";
        TestHelper_1.TestHelper.assertViolations(ruleName, inputFile, [
            {
                "failure": "Octal literals should not be used: \\251",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 6 }
            },
            {
                "failure": "Octal literals should not be used: \\254",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 7 }
            },
            {
                "failure": "Octal literals should not be used: \\23",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 8 }
            },
            {
                "failure": "Octal literals should not be used: \\7",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 9 }
            },
            {
                "failure": "Octal literals should not be used: \\0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 11 }
            },
            {
                "failure": "Octal literals should not be used: \\0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 27, "line": 12 }
            },
            {
                "failure": "Octal literals should not be used: \\-0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 13 }
            },
            {
                "failure": "Octal literals should not be used: \\-0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 27, "line": 14 }
            },
            {
                "failure": "Octal literals should not be used: \\-035",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 15 }
            },
            {
                "failure": "Octal literals should not be used: \\-235",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 16 }
            }
        ]);
    });
    it('should produce violations - batch2', function () {
        var inputFile = "\n/**\n * The following code should have errors:\n */\nfunction demoScriptFail2() {\n    return 'Sample text \\351';\n    return 'Sample text \\354 more text';\n    return 'Sample text \\33';\n    return 'Sample text \\6';\n    return 'Sample text \\125';\n    return 'Sample text \\0';\n    return 'Sample text \\-0';\n    return 'Sample text \\\\\\0';\n    return 'Sample text \\\\\\-0';\n    return 'Sample text \\-035';\n    return 'Sample text \\-235';\n}";
        TestHelper_1.TestHelper.assertViolations(ruleName, inputFile, [
            {
                "failure": "Octal literals should not be used: \\351",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 6 }
            },
            {
                "failure": "Octal literals should not be used: \\354",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 7 }
            },
            {
                "failure": "Octal literals should not be used: \\33",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 8 }
            },
            {
                "failure": "Octal literals should not be used: \\6",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 9 }
            },
            {
                "failure": "Octal literals should not be used: \\125",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 10 }
            },
            {
                "failure": "Octal literals should not be used: \\0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 11 }
            },
            {
                "failure": "Octal literals should not be used: \\-0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 12 }
            },
            {
                "failure": "Octal literals should not be used: \\0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 27, "line": 13 }
            },
            {
                "failure": "Octal literals should not be used: \\-0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 27, "line": 14 }
            },
            {
                "failure": "Octal literals should not be used: \\-035",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 15 }
            },
            {
                "failure": "Octal literals should not be used: \\-235",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 16 }
            }
        ]);
    });
    it('should produce violations - batch3', function () {
        var inputFile = "\n/**\n * The following code should have errors:\n */\nfunction demoScriptFail3() {\n    return `Sample text \\351`;\n    return `Sample text \\354 more text`;\n    return `Sample text \\33`;\n    return `Sample text \\6`;\n    return `Sample text \\125`;\n    return `Sample text \\0`;\n    return `Sample text \\-0`;\n    return `Sample text \\\\\\0`;\n    return `Sample text \\\\\\-0`;\n    return `Sample text \\-035`;\n    return `Sample text \\-235`;\n}";
        TestHelper_1.TestHelper.assertViolations(ruleName, inputFile, [
            {
                "failure": "Octal literals should not be used: \\351",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 6 }
            },
            {
                "failure": "Octal literals should not be used: \\354",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 7 }
            },
            {
                "failure": "Octal literals should not be used: \\33",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 8 }
            },
            {
                "failure": "Octal literals should not be used: \\6",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 9 }
            },
            {
                "failure": "Octal literals should not be used: \\125",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 10 }
            },
            {
                "failure": "Octal literals should not be used: \\0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 11 }
            },
            {
                "failure": "Octal literals should not be used: \\-0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 12 }
            },
            {
                "failure": "Octal literals should not be used: \\0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 27, "line": 13 }
            },
            {
                "failure": "Octal literals should not be used: \\-0",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 27, "line": 14 }
            },
            {
                "failure": "Octal literals should not be used: \\-035",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 15 }
            },
            {
                "failure": "Octal literals should not be used: \\-235",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 16 }
            }
        ]);
    });
    it('should produce violations - batch4', function () {
        var inputFile = "\n/**\n * The following code should have errors:\n */\nfunction demoScriptFail4() {\n    return 'Sample text \\354 \\n more text';\n    return 'Sample text \\354 \\t more text';\n    return 'Sample text \\354 \\u2028 more text';\n    return 'Sample text \\354 \\u2029 more text';\n    return `Sample text \\354\nmore text`;\n}";
        TestHelper_1.TestHelper.assertViolations(ruleName, inputFile, [
            {
                "failure": "Octal literals should not be used: \\354",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 6 }
            },
            {
                "failure": "Octal literals should not be used: \\354",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 7 }
            },
            {
                "failure": "Octal literals should not be used: \\354",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 8 }
            },
            {
                "failure": "Octal literals should not be used: \\354",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 9 }
            },
            {
                "failure": "Octal literals should not be used: \\354",
                "name": "file.ts",
                "ruleName": "no-octal-literal",
                "ruleSeverity": "ERROR",
                "startPosition": { "character": 25, "line": 10 }
            }
        ]);
    });
});
//# sourceMappingURL=NoOctalLiteralTests.js.map