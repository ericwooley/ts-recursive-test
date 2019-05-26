export declare const testRecFun: <T extends Object>(parent: T) => {
    result: T;
    deeper: <U extends Object>(child: U) => {
        result: T & U;
        deeper: <U extends Object>(child: U) => {
            result: T & U & U;
            deeper: <U extends Object>(child: U) => {
                result: T & U & U & U;
                deeper: <U extends Object>(child: U) => {
                    result: T & U & U & U & U;
                    deeper: <U extends Object>(child: U) => {
                        result: T & U & U & U & U & U;
                        deeper: <U extends Object>(child: U) => {
                            result: T & U & U & U & U & U & U;
                            deeper: <U extends Object>(child: U) => {
                                result: T & U & U & U & U & U & U & U;
                                deeper: <U extends Object>(child: U) => {
                                    result: T & U & U & U & U & U & U & U & U;
                                    deeper: <U extends Object>(child: U) => {
                                        result: T & U & U & U & U & U & U & U & U & U;
                                        deeper: <U extends Object>(child: U) => {
                                            result: T & U & U & U & U & U & U & U & U & U & U;
                                            deeper: <U extends Object>(child: U) => any;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=index.d.ts.map