
const parkingData = [
  { name: "Mall Parking", price: 20, distance: 0.5 },
  { name: "Metro Parking", price: 15, distance: 1.0 },
  { name: "Street Parking", price: 10, distance: 1.5 }
];

///search
function searchParking() {
  const location = document.getElementById("location").value;

  if (!location) {
    alert("Please enter location");
    return;
  }

  //cheapest
  const sorted = parkingData.sort((a, b) => a.price - b.price);

  //result
  displayResults(sorted);
}

// Display Function
function displayResults(data) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  data.forEach(slot => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${slot.name}</h3>
      <p>Distance: ${slot.distance} km</p>
      <p>Price: ₹${slot.price}/hr</p>
      <button onclick="bookSlot('${slot.name}')">Book</button>
    `;

    container.appendChild(card);
  });
}

// Booking
function bookSlot(name) {
  alert(`Booking confirmed for ${name}`);
}