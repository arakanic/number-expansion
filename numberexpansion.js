// This function receives a positive integer and returns it as a string in an expanded form.
/*
For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
    return num.toString()
              .split("")
              .reverse()
              .map((n, i) => `${n + "0".repeat(i)}`)
              .filter(n => Number(n) > 0)
              .reverse()
              .join(" + ")
  }