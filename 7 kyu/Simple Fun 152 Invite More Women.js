/*King Arthur and his knights are having a New Years party. Last year Lancelot was jealous 
of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.
To prevent this from happening again, Arthur wants to make sure that there are at least 
as many women as men at this year's party. He gave you a list of integers of all the party goers.
Arthur needs you to return true if he needs to invite more women or false if he is all set.*/

function inviteMoreWomen(L) {
    let male = 0;
    let famale = 0;
    for(let i = 0; i < L.length; i++){
    if(L[i] == 1){male++;}
      else {famale++}
    }
    return male > famale;
}

