function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const t=document.getElementById('page-'+id);
  if(t){t.classList.add('active');window.scrollTo({top:0,behavior:'smooth'})}
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active',a.dataset.p===id));
  document.querySelectorAll('.mob-nav a').forEach(a=>a.classList.toggle('active',a.dataset.m===id));
}
function toggleMob(){document.getElementById('mn').classList.toggle('open')}
function closeMob(){document.getElementById('mn').classList.remove('open')}
go('home');

function openModal(num) {
    document.getElementById('fcModal' + num).style.display = 'flex';
}

function closeModal(num) {
    document.getElementById('fcModal' + num).style.display = 'none';
}

window.onclick = function(event) {
    let modal = event.target;
    if (modal.classList.contains('modal')) {
        modal.style.display = 'none';
    }
}

// Generate facility cards and modals dynamically from JSON file
function createFacilities() {
    const cardContainer = document.getElementById('facilities-container');
    const modalContainer = document.getElementById('modal-container');
    if (!cardContainer || !modalContainer) return;
    
    fetch('data/facilities.json')
        .then(response => response.json())
        .then(facilitiesData => {
            // Generate cards
            facilitiesData.forEach((data, index) => {
                const cardNum = index + 1;
                const card = document.createElement('div');
                card.className = 'fc';
                card.setAttribute('onclick', `openModal(${cardNum})`);
                card.innerHTML = `
                    <div class="fc-img f${cardNum}">
                        <img src="images/tccstfi.png" alt="${data.title}">
                    </div>
                    <div class="fc-b">
                        <div class="fc-t">${data.title}</div>
                        <div class="fc-d">${data.cardDesc}</div>
                        <div class="fc-badge">${data.badge}</div>
                    </div>
                `;
                cardContainer.appendChild(card);
            });
            
            // Generate modals
            facilitiesData.forEach((data, index) => {
                const modalNum = index + 1;
                const modal = document.createElement('div');
                modal.id = 'fcModal' + modalNum;
                modal.className = 'modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-btn" onclick="closeModal(${modalNum})"></span>
                        <img src="${data.img}" class="modal-img">
                        <h2>${data.title}</h2>
                        <p>${data.modalDesc}</p>
                    </div>
                `;
                modalContainer.appendChild(modal);
            });
        })
        .catch(error => console.error('Error loading facilities data:', error));
}

// Create facility cards and modals when page loads
document.addEventListener('DOMContentLoaded', () => {
    createFacilities();
    createNews();
    createCourses();
});

// Load and render news from JSON
function createNews() {
    const newsContainer = document.getElementById('news-container');
    const upcomingContainer = document.getElementById('upcoming-news-container');
    if (!newsContainer || !upcomingContainer) return;
    
    fetch('data/news.json')
        .then(response => response.json())
        .then(newsData => {
            // Create HTML for news item
            const createNewsItem = (item) => `
                <div class="ni">
                    <div class="nd">
                        <div class="nd-d">${item.day}</div>
                        <div class="nd-m">${item.month}</div>
                    </div>
                    <div>
                        <span class="ntag">${item.tag}</span>
                        <div class="nhead">${item.title}</div>
                        <div class="nsnip">${item.snip}</div>
                    </div>
                </div>
            `;
            
            // Render latest news (doubled for seamless carousel)
            newsContainer.innerHTML = [...newsData.latest, ...newsData.latest].map(createNewsItem).join('');
            
            // Render upcoming news (doubled for seamless carousel)
            upcomingContainer.innerHTML = [...newsData.upcoming, ...newsData.upcoming].map(createNewsItem).join('');
        })
        .catch(error => console.error('Error loading news data:', error));
}

// Load and render courses from JSON
function createCourses() {
    const coursesContainer = document.getElementById('courses-container');
    const coursesModalContainer = document.getElementById('courses-modal-container');
    if (!coursesContainer || !coursesModalContainer) return;
    
    fetch('data/courses.json')
        .then(response => response.json())
        .then(coursesData => {
            // Generate course cards
            coursesData.forEach((course) => {
                const courseCard = document.createElement('div');
                courseCard.className = 'cc';
                courseCard.innerHTML = `
                    <div class="cc-bar ${course.bar}"></div>
                    <div class="cc-head">
                        <div class="cc-ico i${course.id}">${course.icon}</div>
                        <div>
                            <div class="cc-name">${course.name}</div>
                            <div class="cc-lvl">${course.level}</div>
                        </div>
                    </div>
                    <p class="cc-desc">${course.cardDesc}</p>
                    <div class="cc-slbl">Programs Offered</div>
                    <div class="cc-tags">
                        ${course.programs.map(prog => `<span class="cc-tag">${prog}</span>`).join('')}
                    </div>
                    <div class="cc-foot">
                        <span class="cc-dur">${course.duration}</span>
                        <span class="cc-u">${course.units}</span>
                    </div>
                    <button class="cc-btn" onclick="openCourseModal(${course.id})">View Details →</button>
                `;
                coursesContainer.appendChild(courseCard);
            });
            
            // Generate course modals
            coursesData.forEach((course) => {
                const modal = document.createElement('div');
                modal.id = 'courseModal' + course.id;
                modal.className = 'modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-btn" onclick="closeCourseModal(${course.id})"></span>
                        <img src="${course.img}" class="modal-img">
                        <h2>${course.name}</h2>
                        <p>${course.modalDesc}</p>
                        <div style="margin-top:1.5rem">
                            <strong>Programs:</strong>
                            <ul style="margin-left:1.5rem;margin-top:0.5rem">
                                ${course.programs.map(prog => `<li>${prog}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                coursesModalContainer.appendChild(modal);
            });
        })
        .catch(error => console.error('Error loading courses data:', error));
}

// Course modal functions
function openCourseModal(courseId) {
    document.getElementById('courseModal' + courseId).style.display = 'flex';
}

function closeCourseModal(courseId) {
    document.getElementById('courseModal' + courseId).style.display = 'none';
}