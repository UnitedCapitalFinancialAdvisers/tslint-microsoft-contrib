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

    }
};

