const regex = /[^a-zA-Z0-9-]/ig;

class MinigamePage{
    constructor(name, pagePath, contentPath, gamePath, previewText, previewImage){
        this.getName = function(){ return name; };
        this.getPagePath = function(){ return pagePath; };
        this.getGamePath = function(){ return gamePath; };
        this.getContentPath = function(){ return contentPath; };
        this.getPreviewText = function (){ return previewText; };
        this.getPreviewImage = function (){ return previewImage; };
    }
}

// dictionary of names of games to directories
const MINIGAMES = {
    'No Beaches': "https://v6p9d9t4.ssl.hwcdn.net/html/5841499/index.html",
}
const MINIGAME_PREVIEWS = Object.entries(MINIGAMES).map(([name, gamePath]) => 
    {
        const strippedName = name.toLowerCase().replaceAll(" ","-").replaceAll(regex,"");
        return new MinigamePage(
            name, 
            '/minigames/'+strippedName, 
            strippedName+'/post.html',
            gamePath,
            require('raw-loader!../minigames/'+strippedName+'/preview.html').default,
            '/media/minigames/'+strippedName+'/thumb.jpg',
        )
    }
);

function GetMinigames(){
    return MINIGAME_PREVIEWS;
}

export default GetMinigames;