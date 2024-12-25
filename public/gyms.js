const gyms = [
    { name: "FitHub Gym", image: "/assets/gyms photos/gym1.jpg", location: "Amman", rating: 4 },
    { name: "BodyBuild Gym", image: "/assets/gyms photos/gym2.jpg", location: "Zarqa", rating: 5 },
    { name: "PowerFlex Gym", image: "/assets/gyms photos/gym3.jpg", location: "Irbid", rating: 3 },
    { name: "Strength Zone", image: "/assets/gyms photos/gym4.jpg", location: "Amman", rating: 4 },
    { name: "Peak Performance Gym", image: "/assets/gyms photos/gym5.jpg", location: "Zarqa", rating: 5 },
    { name: "ProFit Gym", image: "/assets/gyms photos/gym6.jpg", location: "Irbid", rating: 4 },
    { name: "Powerhouse Gym", image: "/assets/gyms photos/gym7.jpg", location: "Amman", rating: 3 },
    { name: "MaxFit Gym", image: "/assets/gyms photos/gym8.jpg", location: "Zarqa", rating: 2 },
    { name: "Muscle Forge", image: "/assets/gyms photos/gym9.jpg", location: "Irbid", rating: 5 },
    { name: "IronWorks Gym", image: "/assets/gyms photos/gym10.jpg", location: "Amman", rating: 4 }
];

// Function to display gyms on the page
function displayGyms(gyms) {
    const gymList = document.getElementById('gymList');
    gymList.innerHTML = '';

    gyms.forEach(gym => {
        const gymCard = `
            <div class="col-md-4">
                <div class="gym-card">
                    <img src="${gym.image}" alt="${gym.name}">
                    <div class="gym-card-body">
                        <h5 class="gym-card-title">${gym.name}</h5>
                        <div class="d-flex justify-content-between">
                            <div class="text-muted">${gym.location}</div>
                            <div class="rating">${'★'.repeat(gym.rating)}${'☆'.repeat(5 - gym.rating)}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        gymList.innerHTML += gymCard;
    });
}


function filterGyms() {
    let filteredGyms = [...gyms];
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const locationFilter = document.getElementById('locationFilter').value;
    const ratingFilter = document.getElementById('ratingFilter').value;

    if (searchInput) {
        filteredGyms = filteredGyms.filter(gym => gym.name.toLowerCase().includes(searchInput));
    }

    if (locationFilter) {
        filteredGyms = filteredGyms.filter(gym => gym.location === locationFilter);
    }

    if (ratingFilter === 'desc') {
        filteredGyms = filteredGyms.sort((a, b) => b.rating - a.rating);
    } else if (ratingFilter === 'asc') {
        filteredGyms = filteredGyms.sort((a, b) => a.rating - b.rating);
    }
    
    displayGyms(filteredGyms);
}

// Event listeners for search and filters
document.getElementById('searchInput').addEventListener('input', filterGyms);
document.getElementById('locationFilter').addEventListener('change', filterGyms);
document.getElementById('ratingFilter').addEventListener('change', filterGyms);

// Initial display of gyms
displayGyms(gyms);
