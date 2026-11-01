const dogButton = document.querySelector("#dogButton");
const dogImage = document.querySelector("#dogImage");
const loadingMessage = document.querySelector("#loadingMessage");
const errorMessage = document.querySelector("#errorMessage");


dogButton.addEventListener("click",function(){
    dogImage.removeAttribute("src");
    errorMessage.textContent = "";
    loadingMessage.textContent = "Loading dog image...";

    //Endpoint of the Dog API to get a random dog image
    const url = "https://dog.ceo/api/breeds/image/random";

    // sending request to the dog API to get a random dog image
    fetch(url)

    //after receiving response from the server, we are checking if the response is ok or not , the request got successfull or not.
    .then(function(response){
        if(!response.ok){
            throw new Error("Server response failed");
        }
        // converting the raw response to a jason file
        return response.json();
    })

    // json request complete hone ke baad jo hamara actual API data hai , vo yha milega
    .then(function(data){
        // api ka response console me print krva rhe h 
        console.log(data);
        // api response me jo dog image ka url hai , usko dog image ke src me save kr rhe h taaki image show ho sake
        dogImage.src = data.message;
        //imahe successfully mil gyi 
        loadingMessage.textContent ="";
    })
    // this is for ki agar hamri image load nahi ho paayi to error ko catch me use krke usko console me print krva skte h 
    .catch(function(error){
        console.log(error);
// user ko ham yha error message show krva rhe h , that the image is unable to load and the should should try again later
        errorMessage.textContent = "Unable to load dog image , please try again later.";
    })
    // request successfull ho yaaa fail ho jaaaye 
    // hamara finally block hamesha execute hoga , isme ham loading message ko empty kr rhe h taaaki user ko loading message naa dikhe and copnsole pr print hojaaaye ki request complete hogyi h bhle hi vo successfull hui ho yaa nhi hui hooo
    .finally(function(){
        loadingMessage.textContent="";
        console.log("request completed");
    });
});