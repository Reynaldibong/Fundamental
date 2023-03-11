// let user= {
//     name :'udin'
// } // car buat object
// user.email = 'udin@mail.com'; //memassukan property, 
// console.log(user);

// let makanan = 'kue';
// let minuman = 'susu';
// let menu = {makanan , minuman: 'jahe'};
// console.log(menu);

// let arr = [1, 2, 3, 4]
// array.map {(val,index) => (val,index)};

//destructuring
// let arrah = ['aku', 'kamu', 'dia'];
// let [aku1, kamu2, dia3] = [...arrah];

// console.log(aku1);
// console.log(kamu2);
// console.log(dia3);

//task 1
class mahasiswa {
    constructor (nama,email,birthdate,score) {
    this.nama = nama
    this.email = email
    this.birthdate = birthdate
    this.score = score
    this.age = (Math.floor((new Date() - new Date(birthdate)) / (1000 * 3600 * 24 * 365)))
    }
}
mahasiswa1 = new mahasiswa("toni","toni@gmail.com",new Date("12/04/2000"),79)
mahasiswa2 = new mahasiswa("tono","toni@gmail.com",new Date("12/04/2001"),49)
mahasiswa3 = new mahasiswa("tini","toni@gmail.com",new Date("12/04/2002"),69)
mahasiswa4 = new mahasiswa("tino","toni@gmail.com",new Date("12/04/2003"),99)
    
        function lol(){
            
            allscore = [mahasiswa1.score,mahasiswa2.score,mahasiswa3.score,mahasiswa4.score]
            highest = Math.max(...allscore)
            lowest = Math.min(...allscore)
            result = 0
            for ( i = 0 ; i < allscore.length ; i++) {
            result = result + allscore[i]
            }
            average = result / allscore.length
            allage = [mahasiswa1.age,mahasiswa2.age,mahasiswa3.age,mahasiswa4.age]
            highestage = Math.max(...allage)
            lowestage = Math.min(...allage)
            resultage = 0
            for ( i = 0 ; i < allage.length ; i++) {
                resultage = resultage + allage[i]
                }
                averageage = resultage / allage.length
                
            
            return [highest,lowest,average,highestage,lowestage,averageage]
        }
        score = {highest : lol()[0],
                 lowest : lol()[1],
                 average : lol()[2]}
        age = {highest : lol()[3],
            lowest : lol()[4],
            average : lol()[5]}
        scoreage = {score,age}
console.log(scoreage);

