#!/usr/bin/node
const args = process.argv.slice(2);
const size = parseInt(args[0], 10);
if (!isNaN(size) && size > 0) {
    for (let i = 0; i < size; i++) {
        console.log("#".repeat(size));
    }
}
