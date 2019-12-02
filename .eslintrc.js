module.exports = {
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
             "experimentalObjectRestSpread": true
        },
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jquery": true,
    },
    "rules": {
        "no-compare-neg-zero": 1,               // disallow comparing against -0
        "no-console": 1,                        // disallow the use of console
        "no-dupe-args": 1,                      // disallow duplicate arguments in function definitions
        "no-dupe-keys": 1,                      // disallow duplicate keys in object literals
        "no-extra-boolean-cast": 1,             // disallow unnecessary boolean casts
        "no-extra-parens": 0,
        "no-func-assign": 1,                    // disallow reassigning function declarations
        "no-inner-declarations": 1,             // disallow variable or function declarations in nested blocks
        "no-invalid-regexp": 1,                 // disallow invalid regular expression strings in RegExp constructors
        "no-irregular-whitespace": 1,           // disallow irregular whitespace outside of strings and comments
        "no-obj-calls": 1,                      // disallow calling global object properties as functions
        "no-prototype-builtins": 1,             // disallow calling some Object.prototype methods directly on objects
        "no-regex-spaces": 1,                   // disallow multiple spaces in regular expressions
        "no-template-curly-in-string": 1,       // disallow template literal placeholder syntax in regular strings
        "no-unreachable": 1,                    // disallow unreachable code after return, throw, continue, and break statements
        "use-isnan": 1,                         // require calls to isNaN() when checking for NaN
        "accessor-pairs": 1,                    // enforce getter and setter pairs in objects
        "array-callback-return": 1,             // enforce return statements in callbacks of array methods
        "block-scoped-var": 1,                  // enforce the use of variables within the scope they are defined
        "curly": 1,                             // enforce consistent brace style for all control statements
        "default-case": 1,                      // require default cases in switch statements
        "dot-notation": 1,                      // enforce dot notation whenever possible
        "eqeqeq": 1,                            // require the use of === and !==
        "no-alert": 1,                          // disallow the use of alert, confirm, and prompt
        "no-empty-function": 1,                 // disallow empty functions
        "no-empty-pattern": 1,                  // disallow empty destructuring patterns
        "no-eq-null": 1,                        // disallow null comparisons without type-checking operators
        "no-eval": 1,                           // disallow the use of eval()
        "no-extend-native": 1,                  // disallow extending native types
        "no-implied-eval": 1,                   // disallow the use of eval()-like methods
        "no-iterator": 1,                       // disallow the use of the __iterator__ property
        "no-labels": 1,                         // disallow labeled statements
        "no-lone-blocks": 1,                    // disallow unnecessary nested blocks
        "no-loop-func": 1,                      // disallow function declarations and expressions inside loop statements
        "no-magic-numbers": 0,                  // disallow magic numbers
        "no-multi-spaces": 1,                   // disallow multiple spaces
        "no-multi-str": 0,                      // disallow multiline strings
        "no-new-func": 1,                       // disallow new operators with the Function object
        "no-new-wrappers": 1,                   // disallow new operators with the String, Number, and Boolean objects
        "no-octal": 1,                          // disallow octal literals
        "no-octal-escape": 1,                   // disallow octal escape sequences in string literals
        "no-proto": 1,                          // disallow the use of the __proto__ property
        "no-redeclare": 1,                      // disallow variable redeclaration
        "no-return-assign": 0,                  // disallow assignment operators in return statements
        "no-return-await": 1,                   // disallow unnecessary return await
        "no-script-url": 1,                     // disallow javascript: urls
        "no-unused-labels": 1,                  // disallow unused labels
        "no-useless-call": 1,                   // disallow unnecessary calls to .call() and .apply()
        "no-useless-concat": 1,                 // disallow unnecessary concatenation of literals or template literals
        "no-useless-escape": 1,                 // disallow unnecessary escape characters
        "no-useless-return": 1,                 // disallow redundant return statements
        "no-void": 1,                           // disallow void operators
        "no-with": 1,                           // disallow with statements
        "wrap-iife": 1,                         // require parentheses around immediate function invocations
        "yoda": 1,                              // require or disallow “Yoda” conditions
        "no-undef-init": 1,                     // disallow initializing variables to undefined
        "no-use-before-define": 1,              // disallow the use of variables before they are defined
        "array-bracket-spacing": 1,             // enforce consistent spacing inside array brackets
        "block-spacing": 1,                     // disallow or enforce spaces inside of blocks after opening block and before closing block
        "comma-dangle": [
            1,
            "always-multiline"
        ],
        "comma-spacing": 1,                     // enforce consistent spacing before and after commas
        "comma-style": 1,                       // enforce consistent comma style
        "computed-property-spacing": 1,         // enforce consistent spacing inside computed property brackets
        "eol-last": 1,                          // require or disallow newline at the end of files
        "func-call-spacing": 1,                 // require or disallow spacing between function identifiers and their invocations
        "func-name-matching": 1,                // require function names to match the name of the variable or property to which they are assigned
        "func-style": [
            1,
            "expression",
            { "allowArrowFunctions": true }
        ],
        "function-paren-newline": 1,            // enforce consistent line breaks inside function parentheses
        "id-blacklist": 1,                      // disallow specified identifiers
        "implicit-arrow-linebreak": 1,          // enforce the location of arrow function bodies
        "indent": [                             // enforce consistent indentatio
            1,
            4,
            { "SwitchCase": 1 }
        ],
        "key-spacing": 1,                       // enforce consistent spacing between keys and values in object literal properties
        "keyword-spacing": 1,                   // enforce consistent spacing before and after keywords
        "lines-between-class-members": 1,       // require or disallow an empty line between class members
        "max-depth": 0,                         // enforce a maximum depth that blocks can be nested
        "max-len": [1, 120],                    // enforce a maximum line length
        "max-lines": 1,                         // enforce a maximum number of lines per file
        "max-nested-callbacks": 1,              // enforce a maximum depth that callbacks can be nested
        "max-statements-per-line": [
            1,
            { "max": 2 }
        ],
        "new-cap": 0,                           // require constructor names to begin with a capital letter
        "new-parens": 1,                        // require parentheses when invoking a constructor with no arguments
        "no-bitwise": 1,                        // disallow bitwise operators
        "no-continue": 1,                       // disallow continue statements
        "no-mixed-operators": 1,                // disallow mixed binary operators
        "no-mixed-spaces-and-tabs": 1,          // disallow mixed spaces and tabs for indentation
        "no-multi-assign": 1,                   // disallow use of chained assignment expressions
        "no-multiple-empty-lines": 1,           // disallow multiple empty lines
        "no-new-object": 1,                     // disallow Object constructors
        "no-restricted-syntax": 1,              // disallow specified syntax
        "no-tabs": 1,                           // disallow all tabs
        "no-trailing-spaces": 1,                // disallow trailing whitespace at the end of lines
        "no-unneeded-ternary": 1,               // disallow ternary operators when simpler alternatives exist
        "no-whitespace-before-property": 1,     // disallow whitespace before properties
        "nonblock-statement-body-position": 1,  // enforce the location of single-line statements
        "object-curly-newline": 1,              // enforce consistent line breaks inside braces
        "object-curly-spacing": [1, "always"],  // enforce consistent spacing inside braces
        "object-property-newline": 0,           // enforce placing object properties on separate lines
        "one-var": 0,                           // enforce variables to be declared either together or separately in functions
        "one-var-declaration-per-line": 1,      // require or disallow newlines around variable declarations
        "operator-assignment": 1,               // require or disallow assignment operator shorthand where possible
        "operator-linebreak": 1,                // enforce consistent linebreak style for operators
        "padding-line-between-statements": 1,   // require or disallow padding lines between statements
        "quotes": [                             // enforce the consistent use of either backticks, double, or single quotes
            1,
            'single',
            { "allowTemplateLiterals": true }
        ],
        "semi": 1,                              // require or disallow semicolons instead of ASI
        "semi-spacing": 1,                      // enforce consistent spacing before and after semicolons
        "semi-style": 1,                        // enforce location of semicolons
        "space-before-blocks": 1,               // enforce consistent spacing before blocks
        "space-before-function-paren": [1, "never"],   // enforce consistent spacing before function definition opening parenthesis
        "space-in-parens": 1,                   // enforce consistent spacing inside parentheses
        "space-infix-ops": 1,                   // require spacing around infix operators
        "space-unary-ops": 1,                   // enforce consistent spacing before or after unary operators
        "switch-colon-spacing": 1,              // enforce spacing around colons of switch statements
        "template-tag-spacing": 1,              // require or disallow spacing between template tags and their literals
        "unicode-bom": 1,                       // require or disallow Unicode byte order mark (BOM)
        "wrap-regex": 1,                        // require parenthesis around regex literals
        "arrow-body-style": 1,                  // require braces around arrow function bodies
        "arrow-parens": 1,                      // require parentheses around arrow function arguments
        "arrow-spacing": 1,                     // enforce consistent spacing before and after the arrow in arrow functions
        "no-confusing-arrow": 1,                // disallow arrow functions where they could be confused with comparisons
        "no-const-assign": 1,                   // disallow reassigning const variables
        "no-dupe-class-members": 1,             // disallow duplicate class members
        "no-duplicate-imports": 1,              // disallow duplicate module imports
        "no-useless-rename": 1,                 // disallow renaming import, export, and destructured assignments to the same name
        "no-var": 1,                            // require let or const instead of var
        "prefer-arrow-callback": 1,             // require using arrow functions for callbacks
        "prefer-const": 1,                      // require const declarations for variables that are never reassigned after declared
        "prefer-rest-params": 1,                // require rest parameters instead of arguments
    }
}
