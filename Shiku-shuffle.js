Array.prototype.shuffle = function () {
    var i = this.length, j, temp;
    while (--i>0) {
        j=Math.floor(Math.random() * (i+1));
        temp=this[j];
        array[j]=this[i];
        array [i] = temp;
    } 
  return this;
};
    var array = ['A','B','C','D','E','F','G','H'];
    var result = array.shuffle();
    console.log(result);