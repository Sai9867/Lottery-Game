const picknumberbtn = document.getElementById("picknumberbtn");
const lotterysheet = document.getElementById("lotterysheet")
const tick = new Audio("tap.wav");
const win = new Audio("win.wav");
const gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Smartwatch",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];

picknumberbtn.addEventListener("click",function(){
  for(let i = 1; i <= 50; i++) {
    document.getElementById(i).classList.remove("highlight");
  }
  displaybtn.textContent = "please wait...";

  let secondcount = 0;
  const interval = setInterval(function(){
    tick.pause();
    tick.currentTime = 0; 
    tick.play();
    secondcount = secondcount + 1;
     const randombox = Math.floor(Math.random() * 50) + 1;
     for(let i = 1; i <= 50; i++) {
      if(i === randombox){
        document.getElementById(i).classList.add("highlightbox");

      }
      else{
        document.getElementById(i).classList.remove("highlightbox");
      }
    }
    
    
     if(secondcount === 5){
      win.play();
      
      const displaybtn = document.getElementById("displaybtn");
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      displaybtn.textContent = `You picked number ${randomNumber} and won a ${gifts[randomNumber - 1]}`;
        document.getElementById(randombox).classList.remove("highlightbox");
       document.getElementById(randomNumber).classList.add("highlight");
       clearInterval(interval);
     }
  }, 1000)


 

})


gifts.forEach(function(value,index){
  const boxemelement = `<div class="box" id="${index + 1}">${index + 1} .${value}</div>`;
  console.log(boxemelement);
  lotterysheet.insertAdjacentHTML("beforeend", boxemelement);

})