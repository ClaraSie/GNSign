// switch btn
const signSwitch = document.querySelector('.sign-switch');
signSwitch.addEventListener('click', function(e){
    let btnId = e.target.id;
    const writeSign = document.getElementById('writeSign');
    const imgSign = document.getElementById('imgSign');
    if (btnId == 'writeSign'){
        writeSign.setAttribute('class', 'switchBtn btn-primary-gradient');
        imgSign.setAttribute('class', 'switchBtn btn-white');
        document.querySelector('.sign-container1').style.display = 'flex';
        document.querySelector('.sign-container2').style.display = 'none';
    }else if (btnId == 'imgSign'){
        writeSign.setAttribute('class', 'switchBtn btn-white');
        imgSign.setAttribute('class', 'switchBtn btn-primary-gradient');
        document.querySelector('.sign-container1').style.display = 'none';
        document.querySelector('.sign-container2').style.display = 'block';
    }
})

//color list
$('.color-list').click(function(e) {
    const nowColor = e.target.className;
    if (e.target.className == 'color-list d-flex') return;

    const list = document.querySelectorAll('.color-list li');
    list.forEach(function(item){
        item.classList.remove('active');
    })

    e.target.classList.add('active');
    if (nowColor == 'color-list-black'){
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#000000";
    }else if (nowColor == 'color-list-blue'){
        ctx.fillStyle = "#0014C7";
        ctx.strokeStyle = "#0014C7";
    }else if (nowColor == 'color-list-red'){
        ctx.fillStyle = "#CA0000";
        ctx.strokeStyle = "#CA0000";
    }
})

// 上傳簽名檔
const imgUpload = document.getElementById('fileUpload');
imgUpload.addEventListener("change", (e) => {
    if (e.target.files[0] === undefined) return;

    // 透過 input 所選取的檔案
    const file = e.target.files[0];

    // 產生fileReader物件
    const fileReader = new FileReader();

    // 將資料做處理
    fileReader.readAsDataURL(file);

    // 綁入事件監聽
    fileReader.addEventListener("load", () => {

    // 獲取readAsArrayBuffer產生的結果，並用來渲染PDF
    const showImage = document.querySelector(".show-img");
    const imgUrl = fileReader.result;
    showImage.src = imgUrl;
    document.querySelector('.file-upload').style.display = "none";
    });
});

const clearBtn = document.querySelector(".clear");
const saveBtn = document.querySelector(".save");
clearBtn.addEventListener("click", reset);
saveBtn.addEventListener("click", function(){
    saveImage();
    location.href = "pdfSign.html"; //進入下一頁
});

// 透過 localStorage 將資料保存下來
function saveImage() {
    const writeSign = document.getElementById('writeSign');
    let newImg = "";
    if (writeSign.classList.contains('btn-primary-gradient')){
        newImg = canvas.toDataURL("image/png"); //存手寫簽名
    }else{
        newImg = document.querySelector(".show-img").src; //存匯入的簽名檔
    }

    localStorage.setItem('img', newImg);
}