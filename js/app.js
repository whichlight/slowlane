console.log('test');
alert('welcome to the slow web');
console.log(urlSlow);
$("a").each(function(){
    console.log(this.href.slice(0,4));
    if(this.href.slice(0,4) !="http"){

     this.href =  urlSlow + this.href;
    }
    this.href = "/slow?=" + this.href});

