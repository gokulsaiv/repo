//title with link on youtube, preview, description, author, published date, count of views
let container=document.getElementById("container");
function createCard(data){
    let card=document.createElement('div');
    let components=document.createElement('div');
    let link=document.createElement('a');
    let img=document.createElement('img');
    let title=document.createElement('h4');
    let author=document.createElement('p');
    let views=document.createElement('p');
    let published=document.createElement('p');
    let description=document.createElement('p');
    
    
    //console.log( viewCount("23903"));
    views.innerHTML=viewCount("2390233");

    card.className="card";
    components.className="components";
    title.innerHTML="javaScript tutorial";
    description.innerHTML="In this javascript ajax tutorial in hindi, I have explained everything you need to know about ajax and asynchronous programming in javascript. These javascript tutorials in hindi will talk more about this feature in subsequent videos.";
    title.className="title";

    author.innerHTML="harry";
    
   
    img.setAttribute('src','https://i.ytimg.com/vi/hKB-YGF14SY/mqdefault.jpg');
    link.setAttribute('href','https://i.ytimg.com/vi/hKB-YGF14SY/mqdefault.jpg');
    

    link.append(img);
    components.append(title,author,views,description);
    //card.append(link,title,author);
    //container.append(card,title,author,views,);
    card.append(link,components);
    container.appendChild(card);
    

    


    
}
function viewCount(num){
    let count=Number(num);
    if(count>1000000)return `${(count/1000000).toFixed(1)}M`;
    else{
        return `${(count/1000).toFixed(1)}K`;
    }
    

}
createCard();
createCard();
createCard();
function toggle(){
    console.log("CLICL");
    let mode=document.getElementById("toogle");
    if(!mode.classList.contains('body')){
        document.getElementById("body").classList.add('body');
    }
}
module.exports= function test(){
    console.log("u r good bitch");
}












