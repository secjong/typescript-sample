enum Language { 
	Korean = "KOR", 
	English = "ENG", 
	Russian = "RUS", 
	Spanish = "SPA" 
} 

let rus = Language.Russian; 
console.log(rus); // RUS
let eng = Language["English"]; 
console.log(eng); // ENG