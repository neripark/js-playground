const template = (str, ...values) => {
  // 第１引数 str は、テンプレートリテラルで渡された中身のうち、固定文字列部分のみが入ってくる。
  // ただの文字列なので、配列にしてひとまとめに受け取る作りでよい。だからstrという引数一つで良い。
  // 第２（以降）引数 values は、テンプレートリテラルで渡された中身のうち、変数部分(${var_name})が別々に入ってくる。
  // 変数は名前と中身の値がセットのため、オブジェクトで受け取らないといけない。

  console.log('--- str ---');
  str.forEach((e) => {
    console.log(e);
  });

  console.log('--- values ---');
  values.forEach((e) => {
    console.log(e);
  });
}

const tmp = "aaaaa";
const hoge = "iiiii";
const fuga = "uuuuu";

template`first: ${tmp} second: ${hoge},${fuga}.`;


// どうして第２引数のvaluesにはスプレッド演算子をつけないといけないのか？の答えがこれ。
// つけないと、単純に引数の個数が可変にならず、１つ目しか受け取れないというだけ。

// const spread = (...values) => {
//   console.log(values);
//   console.log('values.length', values.length);
//   values.forEach((e) => {
//     console.log(e);
//   })
// }

// spread(
//   1,
//   2,
//   5,
//   6
// );
