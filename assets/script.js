
const lookUp = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"," ","!","'","\"","#","$","%","&","{","}","*","+","-",",",".","/","~"]

function encryptText () {
    //alert("eBtn");
    var encryptOut ='';
    var plaintext = document.getElementById("clearTxt").value
    for(let i = 0; i < plaintext.length; i++){
      for(let x =0;x<lookUp.length; x++){
        if (plaintext[i]===lookUp[x]){
            encryptOut += lookUp[x+1]
        }
      }
        
    }  
    
    document.getElementById("encrytTxt").value = encryptOut;
    document.getElementById("clearTxt").value = null;
}
function decryptText () {
    var plainOut ="";
    var encrtext = document.getElementById("encrytTxt").value
    for(let i = 0; i < encrtext.length; i++){
        for(let x =0;x<lookUp.length; x++){
          if (encrtext[i]===lookUp[x]){
              plainOut += lookUp[x-1]
          }
        }
          
      }
  
    document.getElementById("clearTxt").value = plainOut;
    document.getElementById("encrytTxt").value = null;
    
}

function copyToClip() {
    // Get the text field
    //alert('btn')
    var copyText = document.getElementById("encrytTxt");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }








document.getElementById("eBtn").addEventListener("click", encryptText);
document.getElementById("dBtn").addEventListener("click", decryptText);
document.getElementById("cpybtn").addEventListener("click", copyToClip);

