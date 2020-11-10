class DownloadPage{
    constructor(pagename){
        this.pageName = pagename;
    };

    getPageHTML(){
        return new Promise ((resolve, reject)=>{
            let request = new XMLHttpRequest();
            let url = "";
            if(this.pageName === "home"){
                this.returnHome();
            }else{
                url = `./src/pages/${this.pageName}.html`;
            }
            request.open("GET", url);
            request.onload = ()=>{
                if(request.status === 200){
                    resolve(request.response);
                }else{
                    reject("File not found");
                } 
            },
            request.send();
        });
    };

    returnHome(){
        window.location = "./index.html";
    };
}