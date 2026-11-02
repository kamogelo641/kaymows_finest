


function updateCost(){
  let sel = document.getElementById('service');
  let price = sel.value;
  document.getElementById('costDisplay').innerText = price ? `Estimated: R${price} - Available today` : "Select service";
}

document.addEventListener('DOMContentLoaded', ()=>{
  if(document.getElementById('map')){
    var map = L.map('map').setView([-25.7479, 28.2293], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([-25.7479, 28.2293]).addTo(map).bindPopup('Kaymows Finest Carwash<br>7289/22 Pretoria 0152');
  }
});


document.querySelectorAll('.accordion-header').forEach(h=>{
  h.addEventListener('click', ()=>{
    h.nextElementSibling.classList.toggle('show');
  });
});


document.querySelectorAll('.lightbox-img').forEach(img=>{
  img.addEventListener('click', ()=>{
    document.getElementById('lightbox').classList.add('active');
    document.getElementById('lightbox-img').src = img.src;
  });
});
if(document.querySelector('.close')){
  document.querySelector('.close').addEventListener('click', ()=>{
    document.getElementById('lightbox').classList.remove('active');
  });
}

// 2.2 Dynamic Content


function searchServices(){
  let q = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.service-item').forEach(i=>{
    i.style.display = i.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
}
function filterShop(){
  let q = document.getElementById('shopSearch').value.toLowerCase();
  document.querySelectorAll('.product-item').forEach(p=>{
    p.style.display = p.innerText.toLowerCase().includes(q) ? "block" : "none";
  });
}


if(document.getElementById('todayDate')){
  document.getElementById('todayDate').innerText = new Date().toDateString();
}


function validateEnquiry(){
  let email = document.getElementById('email2').value;
  let date = document.getElementById('date').value;
  let err = document.getElementById('error2');
  if(!email.includes('@')){ err.innerText="Invalid email"; return false; }
  if(!date){ err.innerText="Select date"; return false; }
  let serv = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
  window.location.href = `mailto:info@kaymowsfinest.co.za?subject=Enquiry: ${serv}&body=Date: ${date} - Cost: R${document.getElementById('service').value}`;
  err.innerText="Opening email client..."; return false;
}
function validateContact(){
  let msg = document.getElementById('message').value;
  let err = document.getElementById('error');
  if(msg.length < 10){ err.innerText="Message must be 10+ characters"; return false; }
  return true;
}