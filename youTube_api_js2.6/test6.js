var truth = true;
var cardcount = 0;
var cardId = 1;
let videoData;
var pointer=0;




let list = document.getElementById("list");
let btn = document
  .getElementById("btn-search")
  .addEventListener("click", function () {
    let query = document.getElementById("input").value;
    var ids = "";
    let url =
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBq4vrvXGQP5e-C_ouBSMtRow-1qtpbRJg&type=video&part=snippet&maxResults=15&q=` +
      query;

    // fetch(url)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     let i;
    //     for (i = 0; i < 15; i++) {
    //       createCard(data.items[i].snippet, data.items[i].id.videoId);
    //       //console.log(data.items[i].snippet);
          
          
    //     }
    //     //console.log(i);
    //     videoData=data
    //     truth = false;
    //     cardcount = 15;
    //     pointer=0;
    //   });
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=function(){
        let Rdata=JSON.parse(this.responseText);
        console.log(Rdata);
        let i;
        for (i = 0; i < 15; i++) {
          createCard(Rdata.items[i].snippet, Rdata.items[i].id.videoId);
          //console.log(data.items[i].snippet);
          
          
        }
        //console.log(i);
        //videoData=data
        truth = false;
        cardcount = 15;
        pointer=0;
    }
    xhr.send();
  });
  
//dark mode
let toggle = document
  .getElementById("toggle")
  .addEventListener("click", function () {
    if (!document.getElementById("body").classList.contains("body1")) {
      document.getElementById("body").classList.add("body1");
    } else {
      document.getElementById("body").classList.remove("body1");
    }
  });
//create function
//let truth=true;
let container = document.getElementById("container");

function createCard(data, dataId) {
  if (truth == false) {
    if (cardcount === 15) {
      let cardlist = document.querySelectorAll(".card");
      cardlist.forEach((ele) => {
        ele.remove();
      });
      cardcount = 0;
      cardId = 1;
    }
    createNewCard(data, dataId);
  } else {
    createNewCard(data, dataId);
  }
}

function createNewCard(data, dataId) {
  let k = currentloginid(dataId);
  k.then((value) => {
    
    views.innerHTML = viewCount(value);
  });

  let cardNum = document.createElement("p");
  let card = document.createElement("div");
  let components = document.createElement("div");
  let link = document.createElement("a");
  let img = document.createElement("img");
  let title = document.createElement("h4");
  let author = document.createElement("p");
  let views = document.createElement("p");
  let published = document.createElement("p");
  let description = document.createElement("p");

  
  cardNum.innerHTML = `${cardId++}`;

  card.className = "card";

  components.className = "components";
  title.innerHTML = data.title;
  description.innerHTML = data.description;
  published.innerHTML = data.publishTime.substring(0, 4);
  title.className = "title";

  author.innerHTML = data.channelTitle;

  img.setAttribute("src", data.thumbnails.medium.url);
  img.className = "card-img";
  link.setAttribute("href", "https://i.ytimg.com/vi/hKB-YGF14SY/mqdefault.jpg");

  link.append(img);
  components.append(title, author, views, description, published, cardNum);

  card.append(link, components);
  container.appendChild(card);
}

function viewCount(num) {
  let count = Number(num);

  if (count > 1000000) return `${(count / 1000000).toFixed(1)}M`;
  else {
    return `${(count / 1000).toFixed(1)}K`;
  }
}
function videoVeiwcount(id) {
  let urlId = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyBq4vrvXGQP5e-C_ouBSMtRow-1qtpbRJg&part=statistics`;

  let k = fetch(urlId).then(function (response) {
    //console.log(response.text());
    return response.json();
  });

  k.then(function (data) {
    //viewCount(data.items[0].statistics.viewCount);
    vCount = data.items[0].statistics.viewCount;
  });
 
}
const currentloginid = async (id) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyBq4vrvXGQP5e-C_ouBSMtRow-1qtpbRJg&part=statistics`
  );

  const data = await response.json();

  return data.items[0].statistics.viewCount;
};
document.addEventListener("click", function () {
  //window.scrollBy(0, window.innerHeight);
});

let next=document.getElementById('next').addEventListener('click',function(){
    //console.log(pointer);
    //console.log(query);
    let query = document.getElementById("input").value;
    //let pointer=16;
    var ids = "";
    let url =
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBq4vrvXGQP5e-C_ouBSMtRow-1qtpbRJg&type=video&part=snippet&maxResults=45&q=" +
      query;

    // fetch(url)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     for (let i = pointer+15; i < pointer+30; i++) {
    //       createCard(data.items[i].snippet, data.items[i].id.videoId);
    //     }
    //     truth = false;
    //     cardcount = 15;
    //     pointer=pointer+15;
    //     console.log(`this is ${pointer}`)
    //   });
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=function(){
        let Rdata=JSON.parse(this.responseText);
        //console.log(Rdata);
        for (let i = pointer+15; i < pointer+30; i++) {
                  createCard(Rdata.items[i].snippet, Rdata.items[i].id.videoId);
                }
                truth = false;
                cardcount = 15;
                pointer=pointer+15;
                console.log(`this is ${pointer}`)
        
        

        
    }
    xhr.send();


})
let previous=document.getElementById('previous').addEventListener('click',function(){
    //console.log(pointer);
    
    let query = document.getElementById("input").value;
    
    
     var ids =pointer;
     console.log(ids);
    let url =
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBq4vrvXGQP5e-C_ouBSMtRow-1qtpbRJg&type=video&part=snippet&maxResults=45&q=" +
      query;

    // fetch(url)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     //console.log(data);
        // for(let i=ids-15;i<ids;i++){
        //     createCard(data.items[i].snippet, data.items[i].id.videoId);
        // }
        
        
        
        
    //   });
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=function(){
        let Rdata=JSON.parse(this.responseText);
        console.log(Rdata);
        for(let i=ids-15;i<ids;i++){
            createCard(Rdata.items[i].snippet, Rdata.items[i].id.videoId);
        }
        

        
    }
    xhr.send();
    
      pointer=pointer-15;
      console.log(`this is ${pointer}`)
})
//AIzaSyA7czYe075wnp3HGBgQlk6knPkQZmyoYb4