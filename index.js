function superbowlWin(array) {
    const find = array.find(element => element.result === "W")
    return ( find ? find.year : undefined)
}