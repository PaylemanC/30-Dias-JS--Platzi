function findFamousCats(cats) {
  let famousCats = {
    catNames: [],
    maxFollowers: 0
  };

  for (let cat of cats) {
    const totalFollowers = cat.followers.reduce((sum, follower) => sum + follower, 0);
    
    if (totalFollowers === famousCats.maxFollowers) {
      famousCats.catNames.push(cat.name);
    } else if (totalFollowers > famousCats.maxFollowers) {
      famousCats.catNames = [];
      famousCats.maxFollowers = totalFollowers;
      famousCats.catNames.push(cat.name);
    }
  }
  
  return famousCats.catNames;
}


console.log(findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  }
  ,
  {
    name: "Michi",
    followers: [100, 300]
  }
]));

console.log(findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
]));