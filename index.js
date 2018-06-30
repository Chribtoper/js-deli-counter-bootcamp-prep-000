var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line){
  if (line.length > 0){
    return 'Currently serving ' + line.shift() + '.';
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var temp = [];
  if (line.length === 0){
    return "The line is currently empty";
} else {
for (let i = 0; i < line.length; i++){
  console.log(`${i+1}. ${line[i]},`);
    }
  }
}

