"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('noSingleLineBlockCommentRule', function () {
    var ruleName = 'no-single-line-block-comment';
    it('should pass on multi-line block comment', function () {
        var script = "\n            /**\n            * This is a multiline comment.\n            */\n            const something = 'whatever';\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass on comment within a JSX block', function () {
        var script = "\n            import React = require('react');\n            const Thing = () =>\n                <div>\n                {/* insert some meaningful comment or ignore statement here */}\n                {/* insert some other comment with extra space */ }\n                Foo\n                </div>\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass when comment is nested inside code', function () {
        var script = "\n            const something = 1 + /* whatever */ 3;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass on tslint suppressions', function () {
        var script = "\n            /* tslint:disable:function-name */\n            const something = 'whatever';\n            /* tslint:enable:function-name */\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should fail on a trailing single line comment', function () {
        var script = "\n            const something = 'whatever'; /* my comment */\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": "Replace block comment with a single-line comment",
                "name": "file.ts",
                "ruleName": "no-single-line-block-comment",
                "startPosition": { "character": 43, "line": 2 }
            }
        ]);
    });
    it('should fail on a single long block comment', function () {
        var script = "\n            /* Single line */\n            const something = 'whatever';\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": "Replace block comment with a single-line comment",
                "name": "file.ts",
                "ruleName": "no-single-line-block-comment",
                "startPosition": { "character": 13, "line": 2 }
            }
        ]);
    });
});
//# sourceMappingURL=NoSingleLineBlockCommentRuleTests.js.map