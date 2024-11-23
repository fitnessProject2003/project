const gyms = [
    { name: "FitHub Gym", image: "https://via.placeholder.com/300x200", location: "Amman", rating: 4 },
    { name: "BodyBuild Gym", image: "https://via.placeholder.com/300x200", location: "Zarqa", rating: 5 },
    { name: "PowerFlex Gym", image: "https://via.placeholder.com/300x200", location: "Irbid", rating: 3 },
    { name: "Strength Zone", image: "https://via.placeholder.com/300x200", location: "Amman", rating: 4 },
    { name: "Peak Performance Gym", image: "https://via.placeholder.com/300x200", location: "Zarqa", rating: 5 },
    { name: "ProFit Gym", image: "https://via.placeholder.com/300x200", location: "Irbid", rating: 4 },
    { name: "Powerhouse Gym", image: "https://via.placeholder.com/300x200", location: "Amman", rating: 3 },
    { name: "MaxFit Gym", image: "https://via.placeholder.com/300x200", location: "Zarqa", rating: 2 },
    { name: "Muscle Forge", image: "https://via.placeholder.com/300x200", location: "Irbid", rating: 5 },
    { name: "IronWorks Gym", image: "https://via.placeholder.com/300x200", location: "Amman", rating: 4 }
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

// Function to filter gyms by search input and filters
function filterGyms() {
    let filteredGyms = [...gyms];
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const locationFilter = document.getElementById('locationFilter').value;
    const ratingFilter = document.getElementById('ratingFilter').value;

    // Filter by search input (gym name)
    if (searchInput) {
        filteredGyms = filteredGyms.filter(gym => gym.name.toLowerCase().includes(searchInput));
    }

    // Filter by location
    if (locationFilter) {
        filteredGyms = filteredGyms.filter(gym => gym.location === locationFilter);
    }

    // Sort by rating
    if (ratingFilter === 'desc') {
        filteredGyms = filteredGyms.sort((a, b) => b.rating - a.rating);
    } else if (ratingFilter === 'asc') {
        filteredGyms = filteredGyms.sort((a, b) => a.rating - b.rating);
    }

    // Display filtered gyms
    displayGyms(filteredGyms);
}

// Event listeners for search and filters
document.getElementById('searchInput').addEventListener('input', filterGyms);
document.getElementById('locationFilter').addEventListener('change', filterGyms);
document.getElementById('ratingFilter').addEventListener('change', filterGyms);

// Initial display of gyms
displayGyms(gyms);
