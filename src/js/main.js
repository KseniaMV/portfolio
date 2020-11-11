
showlink();
changeContent();

function showlink(){
    let navigationCircle = document.querySelectorAll(".navigation-circle");
        navigationCircle.forEach(circle =>{
            circle.addEventListener("click", (e)=>{
                let targetItem = e.target.nextElementSibling;
                    targetItem.classList.add("show-link");
            })
        }); 
};

function changeContent(){
    let links = document.querySelectorAll(".navigation-link");
        links.forEach(link => {
            link.addEventListener("click", (e)=>{
                let targetLink = e.target;
                let pageId = targetLink.id;
                let downLoadPage = new DownloadPage(pageId);
                let content = downLoadPage.getPageHTML();
                    content.then((content)=>replaceContent(content))
                    .then(()=>changeTheme(pageId));
                    hideLinks();
            })
            
        });
}

function replaceContent(content){
    let main = document.querySelector(".main");
    main.innerHTML = content;

}


function hideLinks(){
    let links = document.querySelectorAll(".navigation-link");
        links.forEach(link =>{
            if(link.classList.contains("show-link")){
                link.classList.remove("show-link");
            }

        })
}

function changeTheme(pageName){
    let name = document.querySelector(".title-name");
    let profession = document.querySelector(".title-profession");
    let nav = document.querySelectorAll(".navigation-item");
    switch (pageName) {
        case "home":
 
            break;
        
        case "about":
            name.classList.add("title--dark-theme");
            profession.classList.add("title--dark-theme");
            nav.forEach(item=> {

            });
            break;
        case "portfolio":
                
            break;
        case "contacts":
                
            break;
        default:
            break;
    }
};


    /*let navigationLink = document.querySelectorAll(".navigation-link");
    navigationLink.forEach(link => {
        link.addEventListener("click",(e)=>{
            let pageName = e.target.id;
            let downLoadPage = new DownloadPage(pageName);
            let content = downLoadPage.getPageHTML();
                content.then((content) => changeContent(content))
                .then(()=>changeTheme(pageName));
            link.classList.add("hide-link");  
            if(link.classList.contains("showLink--light-theme")){
                link.classList.remove("showLink--light-theme");
            }
            if(link.classList.contains("showLink--dark-theme")){
                link.classList.remove("showLink--dark-theme");
            }
        })
    });*/