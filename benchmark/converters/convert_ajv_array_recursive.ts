import ajv from "fast-json-stringify";
import TSON from "../../src";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

export const convert_ajv_array_recursive = () => {
    try {
        const app: TSON.IJsonApplication = TSON.application<
            [ArrayRecursive],
            "ajv"
        >();
        return ajv(app.schemas[0] as any, {
            // mode: "standalone",
            schema: {
                components: app.components,
            } as any,
        }) as any;
    } catch {
        return null;
    }
};
