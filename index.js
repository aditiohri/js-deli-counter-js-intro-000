function takeANumber(deliLine, name) {
deliLine.push(name);
return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
return `There is nobody waiting to be served!`
}
else { return `Currently serving ${line.shift()}.`;

}

function currentLine() {

}
