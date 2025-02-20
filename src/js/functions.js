export async function getData(){
    const data = await fetch('../data.json');
    const response = await data.json();
    return response;
}

export function modifyContent(
    data, 
    currentId,
    planetImage,
    planetName,
    description,
    distance,
    travelTime
){
    const planetData = data[currentId];    
    planetImage.src = planetData.image;
    planetImage.alt = planetData.name;
    planetName.textContent = planetData.name.toUpperCase();
    description.textContent = planetData.description;
    distance.textContent = planetData.distance.toUpperCase();
    travelTime.textContent = planetData.travel.toUpperCase();
}