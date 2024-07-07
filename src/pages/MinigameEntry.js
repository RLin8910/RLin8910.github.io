const regex = /[^a-zA-Z0-9-]/ig;
const PATH_PREFIX = "https://html.itch.zone/html/";
const PATH_SUFFIX = "/index.html";

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

// dictionary of names of games to ids
const MINIGAMES = {
    'The Boomer': "6877400",
    'Neom': "6693689",
    'No Beaches': "5842170",
    'Bonk': "5842211",
    'Stupi Square and Sussy Circle': "5842256",
    'Fish and Crips': "5842339",
    'Click': "5842361",
}
const MINIGAME_PREVIEWS = Object.entries(MINIGAMES).map(([name, gameId]) => 
    {
        const gamePath = PATH_PREFIX + gameId + PATH_SUFFIX;
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