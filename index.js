function template(str){
  console.log(str);
}

const tmp = "hogehoge";
template`test string${tmp}`;



console.log('finished!');
