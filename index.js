module.exports = function (name,lastname,age){
    this.name= name;
    this.lastname = lastname;
    this.age = age;
    this.fullInfo = function(){
        return this.name + ' '+ this.lastname+ ' '+this.age;
    }
    this.displayName = function(){
        return console.log('name '+this.name);
    }
}

