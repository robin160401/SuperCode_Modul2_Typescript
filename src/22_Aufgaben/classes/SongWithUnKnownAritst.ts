import Song from "./Song";

class SongWithUnknownArtist extends Song {
    constructor(title: string){
        super(title, "unknown");
    }

    public setArtist(name: string): void {
        this._artist = name;
    }
}

export default SongWithUnknownArtist;