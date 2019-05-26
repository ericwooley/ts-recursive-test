## Repo to demonstrate typescript bug.

the function in `pkg/src/index.ts` allows you correctly infer types while in the pkg folder.

once built, the test-dep function imports the compiled version, and has issues with inference.

both `pkg/src/index.ts` and `test-dep/index.ts` use the function the same way, the way the typescript emitter keeps doesn't change the generic based on scope, all intermediate information is lost, because only the final U and the first T are used.

```
//...
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
//...                                
```
