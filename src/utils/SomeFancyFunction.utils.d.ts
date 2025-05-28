// src/utils/SomeFancyFunction.utils.d.ts

/**
 * Adds two numbers.
 * @param value1 The first number.
 * @param value2 The second number.
 * @returns The sum of value1 and value2.
 */
export declare const addNumbers: (value1: number, value2: number) => number;

/**
 * Given two numbers, returns the one that is closer to zero.
 * If both numbers have the same absolute distance from zero, the positive number is returned.
 * If both numbers are identical, that number is returned.
 * @param value1 The first number.
 * @param value2 The second number.
 * @returns The number closer to zero.
 */
export declare const getNumberCloseToZero: (
  value1: number,
  value2: number,
) => number;

/*
// This is a commented out section from the original .mjs file, preserved here.
// We are not providing a type definition for getNumberCloseToZeroFromTheList
// as it's not fully implemented and its signature is unclear in the .mjs file.
// If it were to be typed, it might look something like this:
// export declare const getNumberCloseToZeroFromTheList: (...values: number[]) => number | undefined;
*/
