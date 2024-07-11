
let dogList = document.getElementById('dogList');
let dogimg = document.getElementById('dog-img');
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
                    dogList.innerHTML += `<li style="cursor:pointer" onclick="return dogImage('${breed}')">${breed}</li>`
                }else{
                    dogsub = "<ol>";
                    for(let subBreed in breedList[breed]){
                        dogsub += `<li class="text-primary" style="cursor:pointer" onclick="return dogImage('${breed}')">${breedList[breed][subBreed]}</li>`
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

const dogImage = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        let dogImage = data.message;
        dogimg.innerHTML = "";
        dogImage.forEach((img) => {
            dogimg.innerHTML += `
            <div class="col-3 p-3">
                <div style="width: 400px; height: 400px;">
                  <img id="" src="${img}" alt="img" class="w-100 h-100 object-fit-cover">
                </div>
              </div>`;            
        })

    }).catch(err => {
        console.log(err);
    });
}
