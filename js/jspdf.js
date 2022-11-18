// 引入套件所提供的物件
const pdf = new jsPDF();
const download = document.querySelector(".download");
download.addEventListener("click", () => {
    // 將 canvas 存為圖片
    const image = canvas.toDataURL("image/png");
    
    // 設定背景在 PDF 中的位置及大小
    const width = pdf.internal.pageSize.width;
    const height = pdf.internal.pageSize.height;
    pdf.addImage(image, "png", 0, 0, width, height);
    // 將檔案取名並下載
    pdf.save("download.pdf");
    downloadOK();
});

// 下載成功畫面
function downloadOK(){
    document.querySelector(".container").style.display = "none";
    document.querySelector(".downloadOk").style.display = "flex";
}