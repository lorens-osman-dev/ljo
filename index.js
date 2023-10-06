import chalk from 'chalk';

// one time log message function 
var flag = [];
export const ljo = function (id, message,color="#13826D" ,backgroundColor="#15221E") {
  if (!flag[id]) {
    console.log(chalk.hex(color).bgHex(backgroundColor)(message));
    flag[id] = true;
  }
}
