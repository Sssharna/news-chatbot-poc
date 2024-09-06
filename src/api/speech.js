// Text-to-Speech Function
export function speakText(text) {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      console.error('Speech Synthesis not supported in this browser.');
    }
  }
  
  // Speech-to-Text Function
  export function listenForSpeech() {
    return new Promise((resolve, reject) => {
      if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
  
        recognition.onresult = (event) => {
          resolve(event.results[0][0].transcript);
        };
  
        recognition.onerror = (event) => {
          reject(event.error);
        };
  
        recognition.onend = () => {
          recognition.stop();
        };
  
        recognition.start();
      } else {
        reject('Speech Recognition not supported in this browser.');
      }
    });
  }
  