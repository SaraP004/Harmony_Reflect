export const getImageByHour = () => {
    const currentHour = new Date().getHours();
  
    let imageName;
    if (currentHour >= 5 && currentHour < 12) {
      imageName = 'morning.png'; 
    } else if (currentHour >= 12 && currentHour < 18) {
      imageName = 'afternoon.png'; 
    } else {
      imageName = 'night.png'; 
    }
  
    return `/img/Hours/${imageName}`;
    
  };