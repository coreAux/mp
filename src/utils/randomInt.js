const randomInt = (l, h) => {
  // console.log("l: ", l)
  // console.log("h: ", h)
  const randomNumber = Math.round(Math.random() * (h - l)) + l

  // console.log("randomnumber: ", randomNumber)
  return randomNumber
}

export default randomInt
