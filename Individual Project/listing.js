function renderListings(filter) {

  const listingsWrapper = document.querySelector(".listings");

  const listings = getListings();

  if (filter === 'LOW_TO_HIGH') {
    listings.sort((a ,b) => a.price - b.price);
  }

  else if (filter === 'HIGH_TO_LOW') {
    listings.sort((a ,b) => b.price - a.price);
  }

  const listingsHTML = listings.map((listing) => {
    return `<div class="listing">
        <figure class="listing__img--wrapper">
            <a href="#" onclick = > <img src="${listing.url}" alt="" class="listing__img"> </a>
        </figure>
        <div class="listing__title">
            ${listing.title}
        </div>
        <div class="listing__sub-title">
            Wembley, London
        </div>
        <div class="listing__price">
            £${listing.price} / month
        </div>
    </div>`;
  })
  .join("");

  listingsWrapper.innerHTML = listingsHTML;

}

setTimeout(() => {
  renderListings();
});

// Filter price

function filterListings(event) {
    renderListings(event.target.value);
}

// Listing details

function getListings() {
  return [
    {
      id: 1,
      title: "17 Cecil Avenue",
      url: "assets/mainpage img.svg",
      price: 1500,
    },
    {
      id: 2,
      title: "18 Cecil Avenue",
      url: "assets/mainpage img.svg",
      price: 2000,
    },
    {
        id: 3,
        title: "19 Cecil Avenue",
        url: "assets/mainpage img.svg",
        price: 2500,
    },
    {
        id: 4,
        title: "20 Cecil Avenue",
        url: "assets/mainpage img.svg",
        price: 3000,
    },
    
  ];
}
