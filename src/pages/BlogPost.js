const regex = /[^a-zA-Z0-9-]/ig;

class BlogPost{
    constructor(name, date, pagePath, contentPath, previewText, previewImage){
        this.getName = function(){ return name; };
        this.getDate = function(){ return date; };
        this.getPagePath = function(){ return pagePath; };
        this.getContentPath = function(){ return contentPath; };
        this.getPreviewText = function (){ return previewText; };
        this.getPreviewImage = function (){ return previewImage; };
    }
}

const BLOG_DIR = '/blog-posts/';
const BLOG_NAMES = [
    'C7 Corvette - 1 Year Review - Track and Daily Duty!',
    'Shots from Monterey Car Week',
    'I Spent 8 Years Building My Dream Game',
    'Left Turn Legend is Here!',
    'Grand Opening!',
    'How Speedrunning My Own Game Taught Me a Lesson About Floats',
    'Celebrating 2 Years of Left Turn Legend!',
    'Creating OVER 300 Concepts for Dodge\'s Return to NASCAR',
    'Game Modding: NASCAR in Street Legal Racing: Redline',
    'Minigame Madness!',
    'Welcome to My New Website!',
    'The Street King is Now Available on iOS!',
    'One Year of Progress!',
    'Devlog #5 for Left Turn Legend - Marketing Madness!',
    "Devlog #3 for Left Turn Legend - Three's a Crowd!",
    'Devlog #2 for Left Turn Legend',
    'Introducing My Next Project - Left Turn Legend',
    "The '80s Update is Here!!!",
    'Online Multiplayer, Discord Server, and Patreon Page are Here!',
    'Multiplayer, Privacy, and the Future of The Street King',
    'Tuners Update',
    'Weather Effects Coming Soon!',
    'A New Car is Here!',
    'Another Work in Progress',
    'New Cars are Coming Soon!!!',
    'Modeling a new Car!',
    'The Street King has been Published!',
];
const BLOG_PREVIEWS = BLOG_NAMES.map(name => 
    {
        const strippedName = name.toLowerCase().replaceAll(" ","-").replaceAll(regex,"");
        return new BlogPost(
            name, 
            require('raw-loader!../blog-posts/'+strippedName+'/date.html').default,
            '/blog/'+strippedName, 
            strippedName+'/post.html',
            require('raw-loader!../blog-posts/'+strippedName+'/preview.html').default,
            '/media/blog/'+strippedName+'/thumb.jpg',
        )
    }
);

function GetBlogs(){
    return BLOG_PREVIEWS;
}

export default GetBlogs;