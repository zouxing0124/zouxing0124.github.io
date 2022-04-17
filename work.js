function chooseBrand(){
  var x = document.getElementById('demo');
  x.style.color = "red";
  x.style.fontSize = "25px";
  var brandDetails =[
    {name:"YSL",
    price:"350yuan",
    status:"in stock"},
     {name:"MAC",
     price:"200yuan",
     status:"out of stock"},
     {name:"Dior",
     price:"300yuan",
     status:"in stock"},
     {name:"Chanel",
     price:"380yuan",
     status:"in stock"},
     {name:"Perfect Diary",
     price:"150yuan",
     status:"out of stock"},
  ];
  alert("The following information is about each brand of lipstick.");
  for (var brand of brandDetails){
    if (brand.status === "in stock"){
      alert("One lipstick of " + brand.name + " costs " + brand.price + ".")
    }
    else{
      alert("Sorry, the lipstick of " + brand.name + " is out of stock.")
    }
  };
}
