class textCounter{
    constructor(el){
        el.innerHTML = `
        <div class="container">
        <div class="counter"></div>
        <textarea name="message"></textarea>
        </div>
        `
        
        let timerId = setInterval(this.check, 1000);
        this.counter = el.querySelector(`.counter`);
        this.root = el;
        this.text = el.querySelector(`textarea`);
    }

    check = () =>{
        let counter_ = this.text.textLength;
        this.counter.innerHTML = counter_;
    }


}
for(let i = 0; i < 10; i++){
    const e1 = document.createElement('div');
    document.body.appendChild(e1);
    const c1 = new textCounter(e1);    

}
    