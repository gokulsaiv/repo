'use strict';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Handle } from './feature';



const search_btn=document.getElementById('btn').addEventListener('click',function(){
    
    const obj=new Handle();
    let data=obj.handle()
    data.then(function(res){
        obj.createproduct(res);
    })

});