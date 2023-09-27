// Code your solution in this file!


function distanceFromHqInBlocks(location){


if (location > 42){

    return location - 42;
}
else if (location < 42)
{
    
    return 42 - location;
}
   
}

function distanceFromHqInFeet(location){

 distanceFromHqInBlocks(location);

return distanceFromHqInBlocks(location) *  264;


}

function distanceTravelledInFeet(start,destination){

    // distanceFromHqInFeet(start);
    // distanceFromHqInFeet(destination);

    if ( distanceFromHqInFeet(start) >  distanceFromHqInFeet(destination)){

        return distanceFromHqInFeet(start) - distanceFromHqInFeet(destination) ;
    }
    else  {

         return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
    }

}

function calculatesFarePrice(start,destination){



    //given same starting and ending positions
    if (distanceTravelledInFeet(start,destination)<400){

        return 0

    }

    else if((distanceTravelledInFeet(start,destination)>400) && (distanceTravelledInFeet(start,destination)<2000)){


        return (distanceTravelledInFeet(start,destination) - 400) * .02

    }
    else if((distanceTravelledInFeet(start,destination)>2000 && distanceTravelledInFeet(start,destination)<2500 )){


        return 25;

    }
    else if((distanceTravelledInFeet(start,destination)>2500)){


        return 'cannot travel that far';

    }
    

 
  
}