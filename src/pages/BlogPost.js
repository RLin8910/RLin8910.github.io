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