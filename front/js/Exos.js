/* 
    Faire un fonction qui prend un objet en entré et qui renvoi un objet avec toute ces vleurs doublé
    L'objet d'entré prendra toujours des Number dans ses clé
    function double(obj);
    (ici l'objet d'entré change pas)
*/ 

/*
    faire une fonction qui renvoie true si l'array contien que des Number sinon flase
    function isArrayOfNumber(arr);
*/

/* 
    faire une fonction qui trie dans l'ordre décroisant tout les number d'un array
    l'array d'entré contien que des Number
    function sortArrayDesc(arr);
    ici la fonction retourne rien et l'array d'entré change 
*/

///////////EXO1////////////////////
        function Objet(objets){
   
        var objets = {
            individu1: 20, 
            individu2:30, 
            individu3:40,
            
              
               }; 
               for(let [prop,value] of Object.entries(objets)){
                   console.log(value*2);
               }
                   
            }
            console.log(Objet());
            
//////////EXO2///////////////////       
    function Objets2(tableau){
        var tab =[1,"moineau,",2,"hirondelle",3,"cerf",4,"veau"];
    
        if (tab.length=='number'){
            console.log(true);
        }
        else (console.log(false));
    }
    Objets2();
//////////EXO3/////////////////

    function sortArrayDesc (){
        var tableau = [1,3,6,9,13,2,4,8,12];

        for(i=0;i<tableau.length;i++) {
            var result = tableau.reverse();
        }
        return result;
        
    }
    
    console.log(sortArrayDesc());
