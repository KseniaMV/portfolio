let navList = document.querySelectorAll(".navigation-item");
    navList.forEach(item =>{
        item.addEventListener("click", (e)=>{
            if(e.target.classList.contains("item--light-theme")){
                let link = e.target.childNodes[0];
                link.classList.add("showLink--light-theme");
            }
            if(e.target.classList.contains("item--dark-theme")){
                let link = e.target.childNodes[0];
                link.classList.add("showLink--dark-theme");
            }
        })

    })


let navigationLink = document.querySelectorAll(".navigation-link");
    navigationLink.forEach(link => {
        link.addEventListener("click",(e)=>{
            let pageName = e.target.id;
            let downLoadPage = new DownloadPage(pageName);
            let content = downLoadPage.getPageHTML();
            content.then((content) => changeContent(content))
            .then(()=>changeTheme(pageName));
            if(link.classList.contains("showLink--light-theme")){
                link.classList.remove("showLink--light-theme");
            }
            if(link.classList.contains("showLink--dark-theme")){
                link.classList.remove("showLink--dark-theme");
            }
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

