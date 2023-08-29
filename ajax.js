fetch('https://www.beyondklasses.com:8443/api/getnooflikesforfile').then((data)=> {
    // console.log(data);
    return data.json();
}).then((completedata)=>{
    // console.log(completedata);
    let data1="";
    completedata.map((values) => {
        data1 += `<div class="card">
       <a href= " ${values.kid_profile_path}" target="_blank" > <img src="${values.filename}"alt="Art" class="images"</a>
        <p class="Likes">${values.likes}likes</p>
        <p class="KidName">${values.kidName}</p>
        </div>`;
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
console.log(err);
})