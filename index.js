function takeANumber(deliLine, name) {
deliLine.push(name);
return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
return `There is nobody waiting to be served!`
}
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
if (!line.length) {
  return `The line is currently empty.`
}

}
