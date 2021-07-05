function overTheRoad(address, n){
    //Declaring the roads in the exercise
    
    let roadA = [];
    let roadB = [];
    
    // function to fill the road arrays with houses
    
    const fillRoad = (n) => {
        for (let i = 1; i <= n; i++) {
            roadA.push(i);
            roadB.unshift(i);
        };
    };
    
    //creating the houses on the roads
    
    fillRoad(n);
    
    console.log(roadA);
    console.log(roadB);
    
    // Here we create the algorithm that will find the house we need.
    
    let answer
    
    for (let i = 0; i < address; i++) {
        if (i === address) {
            answer = roadB.toString().charAt(i)
        }
    }
    return answer;
}

console.log(overTheRoad(1, 3)) // should yield the right answer!