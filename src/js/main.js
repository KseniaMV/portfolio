
let navigationLink = document.querySelectorAll(".navigation-link");
    navigationLink.forEach(link => {
        link.addEventListener("click",(e)=>{
            let pageName = e.target.id;
            let downLoadPage = new DownloadPage(pageName);
            let content = downLoadPage.getPageHTML();
            content.then((content) => changeContent(content))
            .then(()=>changeTheme(pageName));
        })
    });

    function changeContent(content){
        let main = document.querySelector(".main");
        main.innerHTML = content;

    }

    function changeTheme(pageName){
        let name = document.querySelector(".title-name");
        let profession = document.querySelector(".title-profession");
        let nav = document.querySelectorAll(".navigation-item");
        switch (pageName) {
            case "home":
 
                break;
        
            case "about":
                name.classList.toggle("title--dark-theme");
                profession.classList.toggle("title--dark-theme");
                nav.forEach(item=> {
                    item.classList.toggle("item--light-theme");
                    item.classList.toggle("item--dark-theme");
                    
                });
                break;
            case "portfolio":
                
                break;
            case "contacts":
                
                break;
            default:
                break;
        }
    }

