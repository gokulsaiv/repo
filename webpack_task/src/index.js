'use strict';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Handle } from './feature';

//const fun=require('./feature');

const btn=document.getElementById('btn').addEventListener('click',function(){
    //console.log("called");
    const obj=new Handle();
    let data=obj.handle()
    data.then(function(res){
        obj.createproduct(res);
    })

});