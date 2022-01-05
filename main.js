function count(){
    let text = document.getElementById("myText").value
    let length = text.length
    // let res = [];
    //       let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
    //       str.map((s) => {
    //         let trimStr = s.trim();
    //         if (trimStr.length > 0) {
    //           res.push(trimStr);
    //         }
    //       });
    //      document.querySelector("#show").innerText = res.length;
          
    document.getElementById("result").innerHTML = "Chuỗi có <span style='color:red; font-size:20px;'> " + length + 
     "</span> ký tự | <span style='color:red; font-size:20px;'>"
}
function xoa_dau(){
  let text = document.getElementById("myText").value
  text = text.replace("Microsoft", "W3Schools");
}
function viet_hoa(){
  let text = document.getElementById("myText").value
  text = text.replace("Microsoft", "W3Schools");
}
function viet_thuong(){
  let text = document.getElementById("myText").value
  text = text.replace("Microsoft", "W3Schools");
}
function xoa_khoang_trang(){
  let text = document.getElementById("myText").value
  text = text.replace("Microsoft", "W3Schools");
}
function tao_tai_khoan(){
  let text = document.getElementById("myText").value
 debugger
    if (text != "")
    {
        text = text.replace( "A", "A");
        text = text.replace( "a", "a");
        text = text.replace( "Ă", "A");
        text = text.replace( "ă", "a");
        text = text.replace( "Â", "A");
        text = text.replace( "â", "a");
        text = text.replace( "E", "E");
        text = text.replace( "e", "e");
        text = text.replace( "Ê", "E");
        text = text.replace( "ê", "e");
        text = text.replace( "I", "I");
        text = text.replace( "i", "i");
        text = text.replace( "O", "O");
        text = text.replace( "o", "o");
        text = text.replace( "Ô", "O");
        text = text.replace( "ô", "o");
        text = text.replace( "Ơ", "O");
        text = text.replace( "ơ", "o");
        text = text.replace( "U", "U");
        text = text.replace( "u", "u");
        text = text.replace( "Ư", "U");
        text = text.replace( "ư", "u");
        text = text.replace( "Y", "Y");
        text = text.replace( "y", "y");

        // Dấu Huyền
        text = text.replace( "À", "A");
        text = text.replace( "à", "a");
        text = text.replace( "Ằ", "A");
        text = text.replace( "ằ", "a");
        text = text.replace( "Ầ", "A");
        text = text.replace( "ầ", "a");
        text = text.replace( "È", "E");
        text = text.replace( "è", "e");
        text = text.replace( "Ề", "E");
        text = text.replace( "ề", "e");
        text = text.replace( "Ì", "I");
        text = text.replace( "ì", "i");
        text = text.replace( "Ò", "O");
        text = text.replace( "ò", "o");
        text = text.replace( "Ồ", "O");
        text = text.replace( "ồ", "o");
        text = text.replace( "Ờ", "O");
        text = text.replace( "ờ", "o");
        text = text.replace( "Ù", "U");
        text = text.replace( "ù", "u");
        text = text.replace( "Ừ", "U");
        text = text.replace( "ừ", "u");
        text = text.replace( "Ỳ", "Y");
        text = text.replace( "ỳ", "y");

        // Dấu Sắc
        text = text.replace( "Á", "A");
        text = text.replace( "á", "a");
        text = text.replace( "Ắ", "A");
        text = text.replace( "ắ", "a");
        text = text.replace( "Ấ", "A");
        text = text.replace( "ấ", "a");
        text = text.replace( "É", "E");
        text = text.replace( "é", "e");
        text = text.replace( "Ế", "E");
        text = text.replace( "ế", "e");
        text = text.replace( "Í", "I");
        text = text.replace( "í", "i");
        text = text.replace( "Ó", "O");
        text = text.replace( "ó", "o");
        text = text.replace( "Ố", "O");
        text = text.replace( "ố", "o");
        text = text.replace( "Ớ", "O");
        text = text.replace( "ớ", "o");
        text = text.replace( "Ú", "U");
        text = text.replace( "ú", "u");
        text = text.replace( "Ứ", "U");
        text = text.replace( "ứ", "u");
        text = text.replace( "Ý", "Y");
        text = text.replace( "ý", "y");

        // Dấu Hỏi
        text = text.replace( "Ả", "A");
        text = text.replace( "ả", "a");
        text = text.replace( "Ẳ", "A");
        text = text.replace( "ẳ", "a");
        text = text.replace( "Ẩ", "A");
        text = text.replace( "ẩ", "a");
        text = text.replace( "Ẻ", "E");
        text = text.replace( "ẻ", "e");
        text = text.replace( "Ể", "E");
        text = text.replace( "ể", "e");
        text = text.replace( "Ỉ", "I");
        text = text.replace( "ỉ", "i");
        text = text.replace( "Ỏ", "O");
        text = text.replace( "ỏ", "o");
        text = text.replace( "Ổ", "O");
        text = text.replace( "ổ", "o");
        text = text.replace( "Ở", "O");
        text = text.replace( "ở", "o");
        text = text.replace( "Ủ", "U");
        text = text.replace( "ủ", "u");
        text = text.replace( "Ử", "U");
        text = text.replace( "ử", "u");
        text = text.replace( "Ỷ", "Y");
        text = text.replace( "ỷ", "y");

        // Dấu Ngã	
        text = text.replace( "Ã", "A");
        text = text.replace( "ã", "a");
        text = text.replace( "Ẵ", "A");
        text = text.replace( "ẵ", "a");
        text = text.replace( "Ẫ", "A");
        text = text.replace( "ẫ", "a");
        text = text.replace( "Ẽ", "E");
        text = text.replace( "ẽ", "e");
        text = text.replace( "Ễ", "E");
        text = text.replace( "ễ", "e");
        text = text.replace( "Ĩ", "I");
        text = text.replace( "ĩ", "i");
        text = text.replace( "Õ", "O");
        text = text.replace( "õ", "o");
        text = text.replace( "Ỗ", "O");
        text = text.replace( "ỗ", "o");
        text = text.replace( "Ỡ", "O");
        text = text.replace( "ỡ", "o");
        text = text.replace( "Ũ", "U");
        text = text.replace( "ũ", "u");
        text = text.replace( "Ữ", "U");
        text = text.replace( "ữ", "u");
        text = text.replace( "Ỹ", "Y");
        text = text.replace( "ỹ", "y");

        // Dẫu Nặng
        text = text.replace( "Ạ", "A");
        text = text.replace( "ạ", "a");
        text = text.replace( "Ặ", "A");
        text = text.replace( "ặ", "a");
        text = text.replace( "Ậ", "A");
        text = text.replace( "ậ", "a");
        text = text.replace( "Ẹ", "E");
        text = text.replace( "ẹ", "e");
        text = text.replace( "Ệ", "E");
        text = text.replace( "ệ", "e");
        text = text.replace( "Ị", "I");
        text = text.replace( "ị", "i");
        text = text.replace( "Ọ", "O");
        text = text.replace( "ọ", "o");
        text = text.replace( "Ộ", "O");
        text = text.replace( "ộ", "o");
        text = text.replace( "Ợ", "O");
        text = text.replace( "ợ", "o");
        text = text.replace( "Ụ", "U");
        text = text.replace( "ụ", "u");
        text = text.replace( "Ự", "U");
        text = text.replace( "ự", "u");
        text = text.replace( "Ỵ", "Y");
        text = text.replace( "ỵ", "y");

        text = text.replace( "Đ", "D");
        text = text.replace( "đ", "d");

        text = text.replace( "/", "");
        text = text.replace( "\\", "");
        text = text.replace( "#", "");
        text = text.replace( ".", "");
        text = text.replace( "%", "");
        text = text.replace( "&", "");
        text = text.replace( "^", "");
        text = text.replace( "*", "");
        text = text.replace( "@", "");
        text = text.replace( "!", "");
        text = text.replace( "~", "");
        text = text.replace( "$", "");
        text = text.replace( "^", "");
        text = text.replace( "`", "");
        text = text.replace( ";", "");
        text = text.replace( ":", "");
        text = text.replace( "=", "");
        text = text.replace( "'", "");
        text = text.replace( ".", "");
        text = text.replace( "_", "");
        //lọc khoảng trắng
        text = text.replace(/ /g, '');
    }
    document.getElementById("myText").value = text;
    this.copy();
}




function copy(){
   /* Get the text field */
   var copyText = document.getElementById("myText");

   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /* For mobile devices */
 
   /* Copy the text inside the text field */
   navigator.clipboard.writeText(copyText.value);
   
   /* Alert the copied text */
   alert("Copied");

}
function xoa_text(){
  document.getElementById("myText").value =""
}
