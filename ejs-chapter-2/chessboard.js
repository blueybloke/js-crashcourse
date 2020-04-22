let size = 8
let output = ''
for (let line = 0; line < size; line++) {
    for (let square = 0; square < size; square++) {
        if ((line + square) % 2 == 0) {
            output += '#'
        } else {
            output += ' '
        }
    }
    output += '\n'
}

console.log(output)