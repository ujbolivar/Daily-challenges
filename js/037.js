function overTheRoad(address, n){
    //Declaring the roads in the exercise
    
    let roadA = [];
    let roadB = [];
    
    // function to fill the road arrays with houses
    
    const createRoad = (n) => {
        for (let i = 1; i <= n; i++) {
            roadA.push(i);
            roadB.unshift(i);
        };
    };
    
    //creating the houses on the roads
    
    createRoad(n);
    
    console.log(roadA);
    console.log(roadB);
    
    let answer

    for (let i = 1; i < address; i++) {
        if (i === address) {
            answer = roadB.toString().charAt(i)
        }
    }
    return answer;
}

console.log(overTheRoad(1, 3))