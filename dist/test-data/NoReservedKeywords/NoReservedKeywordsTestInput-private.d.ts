declare module private {
}
declare module SamplePrivate1 {
}
declare module SamplePrivate2 {
}
declare class SamplePrivate3 {
    private private;
}
declare class SamplePrivate4 {
    private var;
    private: any;
}
declare class SamplePrivate5 {
    private(): void;
}
interface SamplePrivate6 {
    private: any;
}
declare function methodPrivate(private: any): void;
declare var private: any;
