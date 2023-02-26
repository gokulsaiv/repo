
var truth=true;
var data1;

    








let list=document.getElementById("list");
let btn=document.getElementById("btn-search").addEventListener("click",function(){
    let query=document.getElementById("input").value;

    let url="https://www.googleapis.com/youtube/v3/search?key=AIzaSyD8vu1pfQVVK6HneGbWKn2fH7c4FgqAEdc&type=video&part=snippet&maxResults=15&q="+query;
    //let url2="https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDAFs-Gpt15gxolW5Co2bYQ6nyxLL_iwxw&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics";
    fetch(url).then(function(response){
       return response.json(); 
    }).then(function(data){
        for (let i=0;i<15;i++){
        createCard(data.items[i].snippet);
        }
        truth=!truth;
        
        
        
        
    }); 
    
})
//dark mode
let toggle=document.getElementById('toggle').addEventListener('click',function (){
    console.log(document.getElementById('body').classList.contains('body2'));
  if(!document.getElementById('body').classList.contains('body1')){
    document.getElementById('body').classList.add('body1');
    console.log(document.getElementById('body').classList);

  }  
  else{
    document.getElementById('body').classList.remove('body1');
  }
})
//create function
//let truth=true;
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
    title.innerHTML=data.title;
    description.innerHTML=data.description;
    title.className="title";

    author.innerHTML=data.channelTitle;
    
   
    img.setAttribute('src',data.thumbnails.medium.url);
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




