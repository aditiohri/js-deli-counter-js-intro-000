function takeANumber(deliLine, name) {
deliLine.push(name);
return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
console.log(`Currently serving ${deliLine[0]}.`);
deliLine.shift;
if (deliLine.length = -1) {
  return `There is nobody waiting to be served!`
}
}

function currentLine() {

}
