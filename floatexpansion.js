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