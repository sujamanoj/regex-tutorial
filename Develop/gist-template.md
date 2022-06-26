# Title (RegEx Tutorial)

Introductory paragraph (replace this with your text)

## Summary
Regular expressions, also known as RegEx, are sequences of characters that form a search pattern. RegEx can be used to determine if a string contains a specific search term parameter, and can be applied in many different circumstances, across multiple coding languages.

The RegEx we will be breaking down searches for an email address pattern within a string. Please review the following code snippet:


/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components
The RegEx we are dissecting today has three elements that we will investigate further.

Complete Regex for Reference: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

Element 1: Username

([a-z0-9_\.-]+)

This element will check to match the username portion of the email address. It may contain any letters, any numbers, periods, underscores, or dashes.

Example: mp[um@r12 would fail due to the special characters, howevermplumer12 would match.

Element 2: Domain

([\da-z\.-]+)

This element will check to match the domain portion of the email address. It may contain letters, numbers and dashes.

Example: domain_name would fail due to the underscore, however domain-name would match.

Element 3: Suffix

([a-z\.]{2,6})

this element checks the suffix of the email address. Think ".com"/".edu". It may contain only letters, and they must be between 2 and 6 characters long.

Example: .company would fail due to the character count, however .com would match.

For additional breakdowns of how each element in this RegEx works, please see more details explanations below.
### Anchors
Anchors encapsulate regex components to define what search pattern to find.

Example: ^xyz$ where the ^ character indicates the start of a string, and the $ character indicates the end of a string
In our example, we use two anchors. One at the beginning, and one at the end; to match the string (email address) we are searching for.
### Quantifiers
+ = Repeats the previous item one or more times (Greedy Match)

Example: a+ would return a positive match for all items where the a character occurs one or more times.

### OR Operator
{a,b} = defines a minimum a and a maximum b number of characters.

Example: {2,6} would return a positive match for items containing between 2 and 6 characters
### Character Classes
. = Any character except newline

When combined with the \ anchor, \.
[a-z] = Accepts any letter between a and z

[0-9] = Accepts any digit between 0 and 9
### Flags

### Grouping and Capturing
Example: ([a-z0-9_\.-]+) where the () group together the [a-z0-9_\.-] bracket expression with the + quantifier.

This regex matches any letter or number a-z or 0 to 9, accepts underscores, periods and dashes. Then the quantifier matches one or more of the previous tokens.
### Bracket Expressions
Bracket expressions are the syntax theory on combining character classes. Multiple character classes may be combined in a single bracket expression.

Example: [a-z0-9] where the regex would match any letter or number.
### Greedy and Lazy Match
{a, } = Lazy match, searches number a or more

{a,b} = greedy match, search BETWEEN numbers a and b
### Boundaries

### Back-references

### Look-ahead and Look-behind

## Author

A short section about the author with a link to the author's GitHub profile [GITHUB](#)
