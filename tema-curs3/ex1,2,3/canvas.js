//-----------Exercitiul 1-----------

const canvas1 = document.createElement('canvas');
canvas1.width = 300;
canvas1.height = 300;

document.getElementById('playground1').append(canvas1);
const context1 = canvas1.getContext('2d');

context1.fillStyle ='#8566AA';
context1.fillRect(100,100,100,100);

//-----------Exercitiul 2-----------

const canvas2 = document.createElement('canvas');
canvas2.width = 300;
canvas2.height = 300;

document.getElementById('playground2').append(canvas2);
const context2 = canvas2.getContext('2d');

//cod preluat din tema 2
class Shape{

    constructor(culoare, laturi){
        this.culoare=culoare;
        this.laturi=laturi;
    }

    perimetru(){
        let perimetru=0;
        for(let i=0 ; i< this.laturi.length ; i++){
            perimetru+= this.laturi[i];
        }
        return perimetru;
    }

    semiperimetru(){
        return this.perimetru()/2;
    }
        
}

class Triunghi extends Shape {
    constructor(culoare,laturi){
        super(culoare,laturi);
    }

    arie(){
        const s=this.semiperimetru();
        //calculez aria dupa formula lui Heron
        return Math.sqrt(s*((s-this.laturi[0]) * (s-this.laturi[1]) * (s-this.laturi[2]))).toFixed(2);
    }


//METODA ADAUGATA

    draw(x1,y1){ //parametrii de intrare reprezinta coordonatele de unde se va incepe desenarea

        /* Pentru a putea desena triunghiul cunoscand doar cele 3 laturi
        ma voi folosi de ~teorema lui Pitagora generalizata~
        c^2= a^2  + b^2 - 2*a*b*cos(c) */


        const a = this.laturi[0];
        const b = this.laturi[1];
        const c = this.laturi[2];
        
        const unghiC= Math.acos( (a**2 + b**2 - c**2) / (2*a*b) );

        //prima latura a triunghiului o voi trasa pe orizontala
        const x2=x1+a;
        const y2=y1;
        const x3=x1 + b*Math.cos(unghiC);
        const y3=y1 + b*Math.sin(unghiC);

        context2.beginPath();
        context2.moveTo(x1,y1);
        context2.lineTo(x2,y2);
        context2.lineTo(x3,y3);
        context2.closePath();
        context2.fillStyle = this.culoare;
        context2.fill();

    }
}

const triunghi =  new Triunghi("green", [80,120,60]);
triunghi.draw(100,100);

//-----------Exercitiul 3-----------

const canvas3 = document.createElement('canvas');
canvas3.width = 600;
canvas3.height = 600;

document.getElementById('playground3').append(canvas3);
const context3 = canvas3.getContext('2d');


class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 1;
    }

    draw() {
        context3.beginPath();
        context3.arc(this.x,this.y,this.radius,0,2 * Math.PI);
        context3.fillStyle = this.color;
        context3.fill();
        context3.closePath();
    }

    move(step) {

            this.changeDirectionIfExceededBounds();
            this.x += step * this.dx; 

            /*daca dx = 1 atunci deplasarea se face spre dreapta
            deci voi vrea ca diametrul sa se mareasca cu 2,
            in caz contrar scad din dimensiunea cercului 2*/
            this.radius += this.dx == 1 ? 2 : (-2);

            this.draw();
    }

    changeDirectionIfExceededBounds() {

        if (this.x >= canvas3.width - this.radius) {
            this.dx = -1;
            this.color="blue";
        }

        /*a doua parte a conditiei este pentru primele deplasari
        spre dreapta, sa mi se seteze si in acel caz rosu chiar
        daca culoarea initiala e alta*/
        if (this.x <= this.radius || this.dx == 1) {
            this.dx = 1;
            this.color="red";
        }
    }
}

const myCircle = new Circle(30,canvas3.height/2,30,"red");
myCircle.draw();


function animateCircle() {
    context3.clearRect(0, 0, canvas3.width, canvas3.height);
    myCircle.move(25);
}

setInterval(animateCircle, 500);