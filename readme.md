# To Run The Program
Use the following command: ts-node validateFingerprintTypes.ts

# Valid Fingerprint Types

Problem Statement:
 Given a string used to know the types of fingerprint data that needs to be collected in a certain kind of enrolment system, write a method to validate the string based on the following rules:
 
1. Each finger type should be represented with the keys shown in the Appendix at the bottom of this note (The keys should be separated by commas).
   
3. For every finger type from the right hand present in the string, its left hand finger equivalent  must also be present (E.g. If a right thumb is present, a left thumb should also be present. If a right index is present, a left index should also be present, etc).
   
4. An empty string is also valid.

Example
Input
fingerprintTypes = “1,2,6,7”
Output
true

Input
fingerprintTypes = “1,2,3,9”
Output
false
Input
fingerprintTypes = “”
Output
true

Input
fingerprintTypes = “6,7,8”
Output
false

Input
fingerprintTypes = “2,3,4,5,7,8,9,10”
Output
true

Input
fingerprintTypes = “left thumb and right thumb”
Output
false

Input
fingerprintTypes = “1,2,9,10”
Output
false

Input
fingerprintTypes = “1,6”
Output
true



Appendix
Fingerprint Keys

1 - Right Thumb

2 - Right Index

3 - Right Middle

4 - Right Ring

5 - Right Little

6 - Left Thumb

7 - Left Index

8 - Left Middle

9 - Left Ring

10 - Left Little


