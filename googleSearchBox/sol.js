class googleSearch{
    constructor(el){
        el.innerHTML = `
        <div class="container">
            <input type="text" name="input"/>
            <ul class="list"></ul>
        </div>
        `
        this.userText = '';
        this.dict = [`Apple`, `Brown`, `And`, `Bibi`];
        this.container = el.querySelector(`.container`);
        this.input = el.querySelector(`input`);
        this.list = el.querySelector(`.list`);
        this.root = el;
        
        el.querySelector(`input`).addEventListener('input', this.check);
    }

    check = (event) =>{
        this.userText = event.target.value;
        
        //Empty the list
        if(this.list.childElementCount > 0){
            while(this.list.firstChild){
                this.list.removeChild(this.list.lastChild);
            }
        }
        //get user text
        this.userTxt = event.target.value;

        if (this.userTxt.length > 0){ //the user added text
            let temp=[];
            let numberOfChars = this.userTxt.length;

            for(let i=0; i<this.dict.length; i++ ){
                if(this.dict[i].toLowerCase().startsWith(this.userTxt.substring(0, numberOfChars).toLowerCase())){
                    let elm = document.createElement(`li`); // add ul child
                    this.list.appendChild(elm);
                    elm.innerHTML=this.dict[i];
                }

            }
            
        }else{ //no text
            this.list.innerHTML = ''; // clean the page
        }     
        
    }
        
}

    



const e1 = document.createElement('div');
document.body.appendChild(e1);
const c1 = new googleSearch(e1);  