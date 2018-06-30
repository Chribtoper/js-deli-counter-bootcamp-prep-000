var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine[0]}`, katzDeliLine.pop(0);
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(){
  
}

