var elInput = document.querySelector(".wrapper__input");
var elSelect = document.querySelector(".wrapper__select");
var elBtn = document.querySelector(".wrapper__btn");
var elresult = document.querySelector(".result");

elBtn = addEventListener('submit', function(r) {
 
  r.preventDefault();

  var elInputValue = Number(elInput.value);
  var elSelectValue = elSelect.value;

  var currency_conversion = elInputValue * elSelectValue;

  if(elInputValue > 0){
    elresult.textContent = (`${elInputValue}$ = ${currency_conversion}`);
    elresult.style.color = "black";
    if(10841 == elSelectValue){
      elresult.textContent =  (`${elInputValue}$ = ${currency_conversion}: Sum`);
    }else if(08833 == elSelectValue){
      elresult.textContent =  (`${elInputValue}$ = ${currency_conversion}: Evro`);
    }else if(802953 == elSelectValue){
      elresult.textContent =  (`${elInputValue}$ = ${currency_conversion}: Rubl`);
    }else{
      elresult.textContent = false;
    };    
  }else if(elInputValue < 0){
    elresult.textContent =  "Iltimos 0 dan katta raqam kiritning";
    elresult.style.color = "orange";
  }else if(elInputValue == ""){
    elresult.textContent = "Qiymat topilmadi! pul miqdorini kiriting";
    elresult.style.color = "red";
  }else if(elInputValue != Number){
    elresult.textContent = "Bu raqam emas! iltimos pul miqdorini raqamlarda kiriting";
    elresult.style.color = "red";
  }else{
    elresult.textContent = "Qaytadan urinib ko'ring";
  }
});