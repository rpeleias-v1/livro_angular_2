System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var foo;
    return {
        setters:[],
        execute: function() {
            class foo {
                getHelloWorldFromModule() {
                    return "Hello World from modules";
                }
            }
            exports_1("foo", foo);
        }
    }
});
//# sourceMappingURL=module.js.map