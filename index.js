const template = (str, ...value) => {
  // 第１引数 str は文字列が入った配列。だから必ず一つで良い。
  // 第２引数はオブジェクト。変数は名前と中身の値がセットのため。

  console.log('--- str ---');
  str.forEach((e) => {
    console.log(e);
  });

  console.log('--- value ---');
  value.forEach((e) => {
    console.log(e);
  });
}

const tmp = "aaaaa";
const hoge = "iiiii";
const fuga = "uuuuu";

template`first: ${tmp} second: ${hoge},${fuga}.`;


// どうしてスプレッド演算子をつけないといけないのか？の答えがこれ。
// つけないと、単純に引数の個数が可変にならず、１つ目しか受け取れないというだけ。

// const spread = (...value) => {
//   console.log(value);
//   console.log('value.length', value.length);
//   value.forEach((e) => {
//     console.log(e);
//   })
// }

// spread(
//   1,
//   2,
//   5,
//   6
// );
