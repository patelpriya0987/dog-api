
let dogList = document.getElementById('dogList');
const getList = () => {

    fetch('https://dog.ceo/api/breeds/list/all').then(res => {
        return res.json();
    }).then( data => {
            // console.log("data", data.message);

            const breedList = data.message;

            console.log("breedList", breedList);

            for(let breed in breedList){
                if(breedList[breed].length == 0){
                    // console.log(breed);
                    dogList.innerHTML += `<li>${breed}</li>`
                }else{
                    dogsub = "<ol>";
                    for(let subBreed in breedList[breed]){
                        dogsub += `<li class="text-primary">${breedList[breed][subBreed]}</li>`
                    }
                    dogsub += "</ol>";

                    dogList.innerHTML += `<li>${breed} ${dogsub}</li>`

                }

        }
    }
    ).catch(err => {
        console.log(err);
    });

}

getList();