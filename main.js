/**
 * Created by Agnieszka on 21.02.2017.
 */
console.log("main loaded");
let login =(username,password)=>{
    if(username!=='admin' || password!=='radical'){
        console.log('incorect login');
    }
};
login('admin', 'idunno');