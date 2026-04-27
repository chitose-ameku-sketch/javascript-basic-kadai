// ① 今日の日付情報を丸ごと取得
const today = new Date();

// ② 年・月・日をそれぞれ取り出す
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので+1する
const date = today.getDate();

// ③ 組み合わせてコンソールに出力
console.log(year + "年" + month + "月" + date + "日");

