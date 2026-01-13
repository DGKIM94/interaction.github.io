// script.js

document.addEventListener('DOMContentLoaded', () => {
    initNews();
    renderMembers();
    renderResearch();
    initPublications();
    renderAwards();
});

/* --- 1. News Slider --- */
let currentNewsIndex = 0;
function initNews() {
    // 최근 5개만 가져오기
    const recentNews = newsData.slice(0, 5);
    const display = document.getElementById('news-display');

    function showNews(index) {
        if(recentNews.length === 0) return;
        const item = recentNews[index];
        display.innerHTML = `
            <h3>${item.title}</h3>
            <p class="news-date" style="color:#666; font-size:0.9rem; margin-bottom:10px;">${item.date}</p>
            <p>${item.content}</p>
        `;
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentNewsIndex = (currentNewsIndex - 1 + recentNews.length) % recentNews.length;
        showNews(currentNewsIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentNewsIndex = (currentNewsIndex + 1) % recentNews.length;
        showNews(currentNewsIndex);
    });

    // 초기 로드
    showNews(0);
}

/* --- 2. Members --- */
function renderMembers() {
    const containers = {
        prof: document.getElementById('member-prof'),
        student: document.getElementById('member-student'),
        alumni: document.getElementById('member-alumni')
    };

    memberData.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <div class="member-name">${member.name}</div>
            <div class="member-role">${member.desc}</div>
            <div class="member-email"><small>${member.email}</small></div>
        `;
        if(containers[member.role]) {
            containers[member.role].appendChild(card);
        }
    });
}

/* --- 3. Research Modal --- */
function renderResearch() {
    const list = document.getElementById('research-list');
    const modal = document.getElementById('research-modal');
    const closeBtn = document.querySelector('.close-btn');

    researchData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'research-item';
        div.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}">
            <div class="research-info">
                <h3>${item.title}</h3>
            </div>
        `;
        // 클릭 시 모달 열기
        div.addEventListener('click', () => {
            document.getElementById('modal-title').innerText = item.title;
            document.getElementById('modal-img').src = item.thumbnail;
            document.getElementById('modal-desc').innerText = item.description;
            modal.style.display = "block";
        });
        list.appendChild(div);
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
}

/* --- 4. Publications Filter --- */
function initPublications() {
    const container = document.getElementById('pub-list');
    const tabs = document.querySelectorAll('.tab-btn');
    const yearStartInput = document.getElementById('year-start');
    const yearEndInput = document.getElementById('year-end');
    const applyBtn = document.getElementById('apply-filter');

    let currentCategory = 'all';

    function renderPubs() {
        container.innerHTML = '';
        const startYear = parseInt(yearStartInput.value) || 0;
        const endYear = parseInt(yearEndInput.value) || 9999;

        const filtered = publicationData.filter(pub => {
            const matchCat = currentCategory === 'all' || pub.category === currentCategory;
            const matchYear = pub.year >= startYear && pub.year <= endYear;
            return matchCat && matchYear;
        });

        // 최신순 정렬
        filtered.sort((a,b) => b.year - a.year);

        if(filtered.length === 0) {
            container.innerHTML = '<p>해당 조건의 논문이 없습니다.</p>';
            return;
        }

        filtered.forEach(pub => {
            const div = document.createElement('div');
            div.className = 'pub-item';
            div.innerHTML = `
                <div class="pub-year">${pub.year}</div>
                <div class="pub-details">
                    <h4>${pub.title}</h4>
                    <p>${pub.authors}</p>
                    <p class="pub-venue">${pub.venue}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }

    // 탭 클릭 이벤트
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.getAttribute('data-cat');
            renderPubs();
        });
    });

    // 년도 필터 적용 이벤트
    applyBtn.addEventListener('click', renderPubs);

    // 초기 렌더링
    renderPubs();
}

/* --- 5. Awards --- */
function renderAwards() {
    const list = document.getElementById('award-list');
    awardData.forEach(award => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="award-date">${award.date}</span>
            <span class="award-content"><strong>${award.title}</strong> - ${award.organization}</span>
        `;
        list.appendChild(li);
    });
}
