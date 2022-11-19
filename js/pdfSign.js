document.getElementById('submit').addEventListener('click', () => {
    if (canvasNum == 0){ 
        alert("請置入簽名後再完成簽署"); 
    }else{
        loadingPen();
        document.querySelector('.pdfSign-under').style.display = "none";
        document.getElementById('submit').style.display = "none";
        document.querySelector('.download').style.display = "block"; //下載按鈕
        document.getElementById('backToIndex').style.display = "block"; //回首頁按鈕
    }
})

////////////////////////////////////////////////////////////////////////////
// 下方添加canvas用
const sign = document.querySelector(".signImg"); //簽名檔
let canvasNum = 0;

// 若 localStorage 有資料才放入
if (localStorage.getItem("img")) {
    sign.src = localStorage.getItem("img");
}

// img加入canvas
function addImg(imgURL){
    fabric.Image.fromURL(imgURL, function (image) {
        // 設定簽名出現的位置及大小，後續可調整
        image.top = 200;
        image.scaleX = 0.5;
        image.scaleY = 0.5;
        canvas.add(image);
    });
}

//text加入canvas
function addText(mytext){
    let text = new fabric.Text(mytext, {
        top: 200,scaleX: 0.5, scaleY: 0.5,
    });
    canvas.add(text);
}

//圖片在被按下去後可以放在 PDF 上
sign.addEventListener("click", () => {
    if (!sign.src) return;
    canvasNum += 1;
    addImg(sign.src);
});

//勾選
const check = document.querySelector(".check");
const checkIconURL = 'image/check-1.png'
check.addEventListener("click", () =>{
    addImg(checkIconURL);
});


//date
const date = document.querySelector(".date");
date.addEventListener("click", () => {
    let today = getTodayDate();
    addText(today);
});

function getTodayDate() {
    var fullDate = new Date();
    var yyyy = fullDate.getFullYear();
    var MM = (fullDate.getMonth() + 1) >= 10 ? (fullDate.getMonth() + 1) : ("0" + (fullDate.getMonth() + 1));
    var dd = fullDate.getDate() < 10 ? ("0"+fullDate.getDate()) : fullDate.getDate();
    var today = yyyy + "/" + MM + "/" + dd;
    return today;
}

// 插入文字
const useText = document.querySelector(".useText");
useText.addEventListener("click", () => {
    let mytext = document.getElementById("myText").value;
    addText(mytext);
})

////////////////////////////////////////////////////////////////////////////