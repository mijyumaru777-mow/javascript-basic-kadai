const holidays = ["正月", "成人の日", "建国記念日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日”, "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"]
   
//配列の長さを取得
console.log(holidays.length);//出力： 16
    

//for文の場合
for (let i = 0; i < holidays.length; i++) {
    console.log(holidays[i]);
}    

//whileループでの繰り返し処理
let index = 0;
while (index < holidays.length) {
    console.log(holidays[index]);
    if (holidays[index] === "勤労感謝の日") {
        break; // "勤労感謝の日"が見つかったらループを抜ける
    }
    index++;    
}