function takeANumber(deliLine, name) {
deliLine.push(name);
return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(katzDeli) {
console.log(`Currently serving ${katzDeli[0]}.`);
katzDeli.shift;
if (katzDeli.length = 0) {
  return `There is nobody waiting to be served!`
}
}

function currentLine() {

}
