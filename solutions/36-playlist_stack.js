class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Playlist {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  
    addSong(song) {
        const newSong = new Node(song);
        if (!this.top) {
            this.top = newSong;
            this.bottom = newSong;
        } else {
            newSong.next = this.top;
            this.top = newSong;
        }
        this.length++;
    }
  
    playSong() {
        if (!this.top) {
            throw new Error("No hay canciones en la lista.");
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        let song = this.top.value;
        this.top = this.top.next;
        this.length--;
        return song;
    }
  
    getPlaylist() {
        let currentSong = this.top;
        const arrayPlaylist = [];
        while (currentSong) {
            arrayPlaylist.push(currentSong.value);
            currentSong = currentSong.next;
        }
        return arrayPlaylist;
    }
}

const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

console.log(playlist.getPlaylist()); //["Hotel California", "Stairway to Heaven", "Bohemian Rhapsody"]
console.log(playlist.playSong()); //"Hotel California"
console.log(playlist.playSong()); //"Stairway to Heaven"
console.log(playlist.playSong()); //"Bohemian Rhapsody"
console.log(playlist.playSong()); //Error: No hay canciones en la lista