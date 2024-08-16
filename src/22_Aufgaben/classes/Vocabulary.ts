class Vocabulary {
    private _words: string[] = [];
    protected _language: string;

    constructor(language: string = "english"){
        this._language = language;
    }

    addWord(word: string){
        if(word.length >= 1 && (!(this._words.includes(word)))){
            this._words.push(word);
        }
    }

    displayAll(){
        console.log(this._language);
        console.log(this._words);
    }
}

export default Vocabulary;