const SuppressWarnings = require("suppress-warnings");
const runner = require("ts-node");

SuppressWarnings([() => true]);
runner.register({
    project: __dirname + "/../tsconfig.test.json",
    compiler: "ttypescript",
});

const program = require("./features/is/test_is_object_union.ts");
for (const value of Object.values(program))
    if (typeof value === "function") value();
