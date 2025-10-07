//cw1
class KontoBankowe
{
    #saldo=0;
    deposit(amount) {
        this.#saldo+=amount;
    }
    withdraw(amount)
    {
        this.#saldo-=amount;
    }
    get Saldo()
    {
        return this.#saldo;
    }

}
const kontobankowe=new KontoBankowe();
kontobankowe.deposit(200);
kontobankowe.withdraw(100);
console.log(kontobankowe.Saldo);
//cw2
class Wypisywanie{
    static wypisz(imie,nazwisko)
    {
        if(!nazwisko)
        {
            return "Mam na imie "+imie;
        }
        else{
            return "Nazywam sie "+imie+" "+nazwisko;
        }
    }
}
console.log(Wypisywanie.wypisz("Szymon","Zarychta"));
console.log(Wypisywanie.wypisz("Szymon"));
//cw3
class Osoba{
     constructor(){
        this.oceny=[];
    }
    powitanie(name){
        return "Witaj "+name;
    }
   srednia()
   {
    let suma=0;
    for(let i=0;i<this.oceny.length;i++)
    {
        suma+=this.oceny[i];
    }
    return suma/this.oceny.length;
   }
}
class Uczen extends Osoba{
    constructor(name)
    {
        super();
        this.name=name;
    }
}
const Uczen1=new Uczen("Szymon");
console.log(Uczen1.powitanie(Uczen1.name));
Uczen1.oceny.push(10);
Uczen1.oceny.push(80);
Uczen1.oceny.push(30);
console.log(Uczen1.srednia());
//cw4
    class SrodekTransportu{
    constructor(nazwa,predkosc,kolor)
    {
        this.nazwa=nazwa;
        this.predkosc=predkosc;
        this.kolor=kolor;
    }
    start(){
        throw new Error("Powinno nadpisać się klasę!");
    };
    }
    class Samolot extends SrodekTransportu{
        constructor(nazwa,predkosc,kolor)
        {
            super(nazwa,predkosc,kolor);
        }
        start()
        {
            console.log('Model: '+this.nazwa)
        }
    }
    class Auto extends SrodekTransportu{
        constructor(nazwa,predkosc,kolor)
        {
            super(nazwa,predkosc,kolor);
        }
        start()
        {
            console.log('Model: '+this.nazwa+" predkosc pojazdu: "+this.predkosc+"km/h ")
        }
    }
    class Lodz extends SrodekTransportu{
         constructor(nazwa,predkosc,kolor)
        {
            super(nazwa,predkosc,kolor);
        }
         start()
        {
            console.log('Model: '+this.nazwa+" predkosc pojazdu: "+this.predkosc+"km/h "+" kolor pojazdu: "+this.kolor);
        }
    }
    const Samolot1=new Samolot("Boeing202","800","Niebieski");
    Samolot1.start();
    const Auto1=new Auto("Mercedes","100","Czarny");
    Auto1.start();
    const Lodz1=new Lodz("JetSki","80","Czerwony");
    Lodz1.start();
    //cw 5
class Psowate{
    dajGlos()
    {
        console.log("");
    }
}
class Szczeniak extends Psowate
{
   dajGlos()
   {
    console.log("Klasa Szczeniak");
   }
    
}
 class Pies extends Psowate{
     dajGlos()
   {
    console.log("Klasa Pies");
   }
 }
 class Wilk extends Psowate{
    dajGlos()
    {
        console.log("Klasa Wilk");
    }
 }
 const Szczeniak1=new Szczeniak();
 const Pies1=new Pies();
 const Wilk1=new Wilk();
 Szczeniak1.dajGlos();
 Pies1.dajGlos();
 Wilk1.dajGlos();
 //cw 6
 /*Stwórz klasę abstrakcyjną artysta, która zawiera
metody: tworzDzielo() oraz kontempluj().
Następnie utwórz klasy rzeźbiarz, malarz,
pisarz.
*/
class Artysta{
    constructor(imie,nazwaDziela,narzedzia)
    {
        this.imie=imie;
        this.nazwaDziela=nazwaDziela;
        this.narzedzia=narzedzia;
    }
    tworzDzielo()
    {
        throw new Error("Nadpisz klase");
    }
    kontempluj()
    {
        throw new Error("Nadpisz klase");
    }
}
class rzezbiarz extends Artysta{
    constructor(imie,nazwaDziela,narzedzia)
    {
        super(imie,nazwaDziela,narzedzia);
    }
    tworzDzielo()
    {
        console.log("Autor: "+this.imie+" Nazwa rzezby: "+this.nazwaDziela+" Wykorzystal: "+this.narzedzia);
    }
    kontempluj()
    {
       console.log("Autor: "+this.imie+" Wyrzezbil: "+this.nazwaDziela);
    }
}
class malarz extends Artysta{
    constructor(imie,nazwaDziela,narzedzia)
    {
        super(imie,nazwaDziela,narzedzia);
    }
    tworzDzielo()
    {
        console.log("Autor: "+this.imie+" Nazwa obrazu: "+this.nazwaDziela+" Wykorzystal: "+this.narzedzia);
    }
    kontempluj()
    {
       console.log("Autor: "+this.imie+" Wamalowal: "+this.nazwaDziela);
    }
}
class pisarz extends Artysta{
    constructor(imie,nazwaDziela,narzedzia)
    {
        super(imie,nazwaDziela,narzedzia);
    }
    tworzDzielo()
    {
        console.log("Autor: "+this.imie+" Nazwa ksiazki: "+this.nazwaDziela+"  Wykorzystal: "+this.narzedzia);
    }
    kontempluj()
    {
       console.log("Autor: "+this.imie+" Napisal: "+this.nazwaDziela);
    }
}
const rzezbiarz1=new rzezbiarz("Jan","Rzymianka","Młot i dłuto");
const malarz1=new malarz("Ignacy","Latarnia Morska","Farby olejne");
const pisarz1=new pisarz("Kamil","Kuchnie swiata","Pioro");
rzezbiarz1.tworzDzielo();
rzezbiarz1.kontempluj();

malarz1.tworzDzielo();      
malarz1.kontempluj();   

pisarz1.tworzDzielo();      
pisarz1.kontempluj(); 
//cw7
class rejestracja{
    constructor(nick,password)
    {
        this.nick=nick;
        this.password=password;
    }
    sprawdzHaslo()
    {
        const haslo = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return haslo.test(this.password);
    }

}
const form=document.getElementById("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nick=document.getElementById("nick").value;
    const password=document.getElementById("password").value;
    const user= new rejestracja(nick,password);
    if(user.sprawdzHaslo())
    {
       console.log( "Hasło jest wystarczajaca silne");
    }
    else{
       console.log( "Hasło  nie jest wystarczajaca silne");
    }
})
//cw 8
class Kalkulator {
    static dodawanie(a, b) {
        return a + b;
    }

    static odejmowanie(a, b) {
        return a - b;
    }

    static mnozenie(a, b) {
        return a * b;
    }

    static dzielenie(a, b) {
        if (b === 0) {
            return "Nie dziel przez 0!";
        }
        return a / b;
    }
}


console.log(Kalkulator.dodawanie(80, 55));     
console.log(Kalkulator.odejmowanie(21, 7));  
console.log(Kalkulator.mnozenie(8, 9));     
console.log(Kalkulator.dzielenie(20, 4));   
console.log(Kalkulator.dzielenie(5, 0));    

