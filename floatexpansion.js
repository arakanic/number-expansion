function expandedForm(num) {
    let [int, dec] = num.toString().split(".")
    return int.split("")
                .reverse()
                  .map((n, i) => `${n + "0".repeat(i)}`)
                    .filter(n => Number(n) > 0)
                      .reverse()
                        .concat(dec.split("")
                                    .map((n, i) => n == 0 ? n : `${n}/1${"0".repeat(i + 1)}`)
                                      .filter(n => n != 0))
                          .join(" + ")
  }

expandedForm(1.24); // should return '1 + 2/10 + 4/100'
expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
expandedForm(0.04); // should return '4/100'
expandedForm(807.304); // Should return '800 + 7 + 3/10 + 4/1000'
