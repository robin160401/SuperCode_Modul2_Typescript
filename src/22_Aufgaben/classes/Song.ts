class Song {
private _title: string;
protected _artist: string;
public _durationInSeconds?: number;

constructor(title: string, aritst: string){
    this._title = title;
    this._artist = aritst;
}
}

export default Song;