function classify(value, type) {

  if (type === "solid") {
    if (value <= 5) return "low";
    if (value <= 20) return "medium";
    return "high";
  }

  if (type === "particle") {
    if (value <= 20) return "fine";
    if (value <= 80) return "medium";
    return "coarse";
  }

}
