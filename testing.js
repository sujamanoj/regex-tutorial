// Simple JavaScript code to test RegEx email validation

let emails = [
  "Bobi1@email.com",
  "saRah2@email-name.com",
  "$catch@email-email.com",
  "testing.js@email_mail.edu",
  "Some.One@mail.company",
];

const regex = new RegExp(
  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  "i"
);

emails.forEach((emails) => console.log(emails, regex.test(emails)));
// Test results for the above emails array should return:
//  true, true, false, false, false
