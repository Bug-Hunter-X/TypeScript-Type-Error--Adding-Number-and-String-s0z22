# TypeScript Type Error: Adding Number and String

This example demonstrates a common type error in TypeScript that occurs when attempting to add a number and a string within a function explicitly typed to handle numbers only. The bug is that the type system does not automatically perform type coercion from string to number, resulting in an error.

## Bug

The `add` function is designed to accept two numbers and return their sum. However, if we pass a string as an argument, TypeScript throws a type error, highlighting the importance of precise type handling in TypeScript.

## Solution

The solution involves type checking or type assertion to make sure both arguments are numbers before addition, or to explicitly handle string arguments.