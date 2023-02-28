'use strict';
export class Handle{
     handle(){
        let resData;
        let url='https://dummyjson.com/products';
        let res=fetch(url).then(function(response){
            return response.json();
        })
        return res;
    }
    createproduct(data){
        let ele=document.getElementById('container');
        for (let i = 0; i < 20; i++) {
           let li=document.createElement('li');
           console.log(data.products[i].title);
           li.innerHTML=`Title:${data.products[i].title}\u00A0\u00A0  Brand:${data.products[i].brand}\u00A0\u00A0 Price:${data.products[i].price} `
           ele.append(li);
            
        }
    }
}


