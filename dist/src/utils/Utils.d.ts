export declare module Utils {
    function exists<T>(list: ReadonlyArray<T>, predicate: (t: T) => boolean): boolean;
    function contains<T>(list: ReadonlyArray<T>, element: T): boolean;
    function removeAll<T>(source: ReadonlyArray<T>, elementsToRemove: ReadonlyArray<T>): T[];
    function remove<T>(source: ReadonlyArray<T>, elementToRemove: T): T[];
    function trimTo(source: string, maxLength: number): string;
}
