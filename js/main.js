const cevrilecek = document.querySelector(".from-text"),
ceviri = document.querySelector(".to-text"),
degistir = document.querySelector(".exchange"),
selectBtn = document.querySelectorAll("select"),
ikonlar = document.querySelectorAll(".row i");
ceviriBtn = document.querySelector("button"),

selectBtn.forEach((tag, id) => {
    for (let country_code in ulkeler) {
        let selected = id == 0 ? country_code == "tr" ? "selected" : "" : country_code == "en" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${ulkeler[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

degistir.addEventListener("click", () => {
    let tempText = cevrilecek.value,
    tempLang = selectBtn[0].value;
    cevrilecek.value = ceviri.value;
    ceviri.value = tempText;
    selectBtn[0].value = selectBtn[1].value;
    selectBtn[1].value = tempLang;
});

cevrilecek.addEventListener("keyup", () => {
    if(!cevrilecek.value) {
        ceviri.value = "";
		ceviri.setAttribute("placeholder", "Çeviri");
    }
});

ceviriBtn.addEventListener("click", () => {
    let text = cevrilecek.value.trim(),
    cevrilecek_dil = selectBtn[0].value,
    cevrilen_dil = selectBtn[1].value;
    if(!text) return;
	var sc='cevrilecek_dil='+cevrilecek_dil+'&cevrilen_dil='+cevrilen_dil+'&text='+text;
	$.ajax({type: 'POST',
	   url: 'metin-cevir.php',
	   data:sc,
	   success: function(ajaxCevap) {
		   ceviri.setAttribute("placeholder", "Çevriliyor...");
		   $("textarea#cevirme_sonucu").val(ajaxCevap);
		  
		}
	 });
    
    
});

ikonlar.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(!cevrilecek.value || !ceviri.value) return;
		let utterance;
		if(target.id == "from") {
			utterance = new SpeechSynthesisUtterance(cevrilecek.value);
			utterance.lang = selectBtn[0].value;
		} else {
			utterance = new SpeechSynthesisUtterance(ceviri.value);
			utterance.lang = selectBtn[1].value;
		}
		speechSynthesis.speak(utterance);
        
    });
});