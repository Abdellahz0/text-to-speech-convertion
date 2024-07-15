let speech=new SpeechSynthesisUtterance();

let voices= [];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();

    speech.voice=voices[0];
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};
    

const playbtn= document.querySelector("button");

function convertion(){
    
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
}


document.addEventListener("DOMContentLoaded",()=>{
    playbtn.addEventListener("click",()=>{
        convertion();
    });
    voiceSelect.addEventListener("change",()=>{
        speech.voice=voices[voiceSelect.value];
    })
});
