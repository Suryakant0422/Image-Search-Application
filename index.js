 const input = document.getElementById('input');
 const subcontainer =document.getElementById('subcontainer');
//  console.log(input, subcontainer);
var para = document.getElementById('para');
async function searchImage(){

const searchResult = input.value;
console.log(searchResult);

const response = await fetch(`https://app.zenserp.com/api/v2/search?apikey=9304ac40-9eeb-11ed-8bf3-5f54f55f1b96&q=${searchResult}&tbm=isch`)
    // console.log(response);
    const data = await response.json()
    // console.log(data);

    subcontainer.innerHTML="";
    const array = data.image_results;
    // console.log(array);
    if(searchResult=="" ){
        para.innerHTML ="Please search for images...";
        para.style.color ="red";
    }
    else{

    array.map((ele)=>{
        para.innerHTML =`
            Your Search for "${searchResult}" returned ${ele.sourceUrl.length} results :
        `
        para.style.color ="black";
        var innercontainer = document.createElement("div")
        innercontainer.innerHTML = `<img src="${ele.sourceUrl}" alt="">`

        subcontainer.appendChild(innercontainer);
     
    })
}

}

