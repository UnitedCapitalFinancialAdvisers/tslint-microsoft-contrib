/**
 * These rule settings are a broad, general recommendation for a good default configuration.
 * This file is exported in the npm/nuget package as ./tslint.json.
 */
module.exports = {
    "rules": {

        /**
         * Security Rules. The following rules should be turned on because they find security issues
         * or are recommended in the Microsoft Secure Development Lifecycle (SDL)
         */
        "insecure-random": true,
        "no-banned-terms": true,
        "no-cookies": true,
        "no-delete-expression": true,
        "no-disable-auto-sanitization": true,
        "no-document-domain": true,
        "no-document-write": true,
        "no-eval": true,
        "no-exec-script": true,
        "no-function-constructor-with-string-args": true,
        "no-http-string": [true, "http://www.example.com/?.*", "http://www.examples.com/?.*"],
        "no-inner-html": true,
        "no-octal-literal": true,
        "no-reserved-keywords": true,
        "no-string-based-set-immediate": true,
        "no-string-based-set-interval": true,
        "no-string-based-set-timeout": true,
        "non-literal-require": true,
        "possible-timing-attack": true,
        "react-anchor-blank-noopener": true,
        "react-iframe-missing-sandbox": true,
        "react-no-dangerous-html": true,

        /**
         * Common Bugs and Correctness. The following rules should be turned on because they find
         * common bug patterns in the code or enforce type safety.
         */
%correctness_rules%

        /**
         * Code Clarity. The following rules should be turned on because they make the code
         * generally more clear to the reader.
         */
%clarity_rules%

        /**
         * Accessibility. The following rules should be turned on to guarantee the best user
         * experience for keyboard and screen reader users.
         */
%accessibilityy_rules%

        /**
         * Whitespace related rules. The only recommended whitespace strategy is to pick a single format and
         * be consistent.
         */
%whitespace_rules%

        /**
         * Controversial/Configurable rules.
         */
%configurable_rules%

        /**
         * Deprecated rules.  The following rules are deprecated for various reasons.
         */
%deprecated_rules%
    }
};

