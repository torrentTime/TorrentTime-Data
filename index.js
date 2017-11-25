import _ from 'lodash';

export class TorrentTimeData{
    dataHandler = {};
    peers = [];
    torrents = [];

    peerFiles = [];

    constructor(dataHandler){
        this.dataHandler = dataHandler;
        this.open();
    }


    getPeers(){
        return this.peers;
    }

    addPeer(peer){
        this.peers.push(peer);
    }

    removePeer(peer){
        _.remove(this.peers, (r)=> r.id = peer.id)
    }




    setPeers(peers){
        this.peers = peers;
    }

    getTorrents(){
        return this.torrents;
    }

    addTorrent(torrent){
        this.torrents.push(torrent);
    }

    removeTorrent(torrent){
        _.remove(this.torrents, (r)=> r.id = torrent.id)
    }

    setTorrents(torrents){
        this.torrents = torrents;
    }




    getPeerFiles(){
        return this.peerFiles;
    }

    addPeerFiles(torrent){
        this.peerFiles.push(peerFiles);
    }

    removePeerFiles(peerFiles){
        _.remove(this.peerFiles, (r)=> r.id = peerFiles.id)
    }

    setPeerFiles(peerFiles){
        this.peerFiles = peerFiles;
    }




    toJSON(){
        return {
            peers: this.peers,
            torrents: this.torrents,
            peerFile: this.peerFile
        }
    }

    save(){
        this.dataHandler.save(this.toJSON())
    }

    open(){
        const json = this.dataHandler.getJson();

        this.setPeers(json.peers);
        this.setTorrents(json.torrents);
        this.setPeerFiles(json.peerFiles);

    }

}