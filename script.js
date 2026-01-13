// script.js

/* --- 1. Utility: Overlay --- */
function openDetail(html) {
    const overlay = document.getElementById('detail-overlay');
    const body = document.getElementById('detail-body');
    if(overlay && body) {
        body.innerHTML = html;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
function closeDetail() {
    const overlay = document.getElementById('detail-overlay');
    if(overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/* --- 2. Home Rendering --- */
function renderHome() {
    // 1) YouTube Videos
    const ytContainer = document.getElementById('youtube-gallery');
    if (ytContainer && typeof youtubeVideos !== 'undefined') {
        ytContainer.innerHTML = '';
        youtubeVideos.forEach(v => {
            ytContainer.innerHTML += `
                <div class="video-wrapper">
                    <iframe src="${v.embedUrl}" title="${v.title}" allowfullscreen></iframe>
                </div>`;
        });
    }

    // 2) Latest News (With Images)
    const newsContainer = document.getElementById('home-news');
    if (newsContainer && typeof newsData !== 'undefined') {
        newsContainer.innerHTML = '';
        newsData.slice(0, 3).forEach(item => {
            // 이미지 없으면 기본 플레이스홀더 처리 가능
            const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" alt="${item.title}">` : '';
            // Data encoded for click
            const dataStr = encodeURIComponent(JSON.stringify(item));

            newsContainer.innerHTML += `
                <div class="news-card" onclick="showNewsDetail('${dataStr}')">
                    ${imgHtml}
                    <div class="news-body">
                        <span class="news-date">${item.date}</span>
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                        <div class="read-more">Read More <i class="fas fa-arrow-right"></i></div>
                    </div>
                </div>`;
        });
    }
}

/* --- 3. News Logic --- */
function renderNewsPage() {
    const container = document.getElementById('news-grid-full');
    if(!container) return;

    container.innerHTML = '';
    newsData.forEach(item => {
        const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb">` : '';
        const dataStr = encodeURIComponent(JSON.stringify(item));

        container.innerHTML += `
            <div class="news-card" onclick="showNewsDetail('${dataStr}')">
                ${imgHtml}
                <div class="news-body">
                    <span class="news-date">${item.date}</span>
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                    <div class="read-more">Read More <i class="fas fa-arrow-right"></i></div>
                </div>
            </div>`;
    });
}

function showNewsDetail(dataStr) {
    const item = JSON.parse(decodeURIComponent(dataStr));
    const imgHtml = item.image ? `<img src="${item.image}" class="detail-hero-img">` : '';

    const html = `
        ${imgHtml}
        <h1 style="font-size:2.5rem; margin-bottom:10px;">${item.title}</h1>
        <p style="color:var(--primary); font-weight:700; margin-bottom:30px;">${item.date}</p>
        <div style="font-size:1.1rem; line-height:1.8; color:#444;">
            ${item.detailContent || item.content}
        </div>
    `;
    openDetail(html);
}

/* --- 4. Research Rendering (Areas + Projects) --- */
function renderResearchPage() {
    // 1) Research Areas (Big Cards)
    const areaContainer = document.getElementById('research-areas');
    if (areaContainer && typeof researchAreas !== 'undefined') {
        areaContainer.innerHTML = '';
        researchAreas.forEach(area => {
            const dataStr = encodeURIComponent(JSON.stringify(area));
            areaContainer.innerHTML += `
                <div class="area-card" onclick="showAreaDetail('${dataStr}')">
                    <img src="${area.thumbnail}" class="area-img" alt="${area.title}">
                    <div class="area-content">
                        <h3>${area.title}</h3>
                        <p>${area.desc}</p>
                    </div>
                </div>`;
        });
    }

    // 2) Projects List
    const ongoingList = document.getElementById('ongoing-list');
    const completedList = document.getElementById('completed-list');

    if (ongoingList && completedList && typeof researchData !== 'undefined') {
        ongoingList.innerHTML = '';
        completedList.innerHTML = '';

        researchData.forEach(proj => {
            const dataStr = encodeURIComponent(JSON.stringify(proj));
            const statusClass = proj.status === 'Ongoing' ? 'ongoing' : 'completed';

            const html = `
                <div class="project-card ${statusClass}" onclick="showProjectDetail('${dataStr}')">
                    <div class="proj-info">
                        <h4>${proj.title}</h4>
                        <div class="proj-meta">
                            <span class="proj-status ${statusClass}">${proj.status}</span>
                            <span>${proj.agency} | ${proj.period}</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-right" style="color:#cbd5e1;"></i>
                </div>`;

            if (proj.status === 'Ongoing') ongoingList.innerHTML += html;
            else completedList.innerHTML += html;
        });
    }
}

function showAreaDetail(dataStr) {
    const area = JSON.parse(decodeURIComponent(dataStr));
    const html = `
        <img src="${area.thumbnail}" class="detail-hero-img">
        <h1 style="font-size:2.5rem; margin-bottom:20px;">${area.title}</h1>
        <div style="font-size:1.1rem; line-height:1.8;">${area.detail}</div>
    `;
    openDetail(html);
}

function showProjectDetail(dataStr) {
    const proj = JSON.parse(decodeURIComponent(dataStr));
    const html = `
        <span class="proj-status ${proj.status==='Ongoing'?'ongoing':'completed'}" style="font-size:1rem; padding:6px 15px;">${proj.status}</span>
        <h1 style="margin:15px 0 10px;">${proj.title}</h1>
        <p style="color:#666; margin-bottom:30px;"><strong>${proj.agency}</strong> | ${proj.period}</p>
        <div style="font-size:1.1rem; line-height:1.8; background:#f8fafc; padding:30px; border-radius:20px;">
            ${proj.description}
        </div>
    `;
    openDetail(html);
}

/* --- 5. Publications (Filters) --- */
function renderPublications() {
    const container = document.getElementById('pub-list');
    if (!container) return;

    // 초기 렌더링
    applyPubFilter();

    // 탭 클릭 이벤트
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyPubFilter();
        });
    });
}

function applyPubFilter() {
    const activeTab = document.querySelector('.tab-btn.active');
    const category = activeTab ? activeTab.dataset.cat : 'all';

    const startYear = parseInt(document.getElementById('year-start').value) || 0;
    const endYear = parseInt(document.getElementById('year-end').value) || 9999;

    const container = document.getElementById('pub-list');
    container.innerHTML = '';

    const filtered = publicationData.filter(pub => {
        const catMatch = category === 'all' || pub.category === category;
        const yearMatch = pub.year >= startYear && pub.year <= endYear;
        return catMatch && yearMatch;
    });

    if(filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#999; margin-top:30px;">No publications found.</p>';
        return;
    }

    filtered.forEach(pub => {
        // Link logic
        const linkHtml = pub.link ? `<a href="${pub.link}" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : '';

        container.innerHTML += `
            <div class="pub-item">
                <div class="pub-year">${pub.year}</div>
                <div class="pub-content">
                    <h3>${pub.title}</h3>
                    <div class="pub-authors">${pub.authors}</div>
                    <div class="pub-venue">${pub.venue}</div>
                </div>
                ${linkHtml}
            </div>`;
    });
}

/* --- 3. 맴버 (Member) 렌더링 --- */
function renderMembers() {
    // 각 섹션 컨테이너 가져오기
    const profList = document.getElementById('prof-list');
    const phdList = document.getElementById('phd-list');
    const msList = document.getElementById('ms-list');
    const alumniList = document.getElementById('alumni-list');

    // members.html이 아니면 실행 중단
    if (!profList) return;

    if (typeof memberData === 'undefined') return;

    memberData.forEach((m, index) => {
        // 1. Alumni 처리
        if (m.role === 'alumni') {
            if (alumniList) {
                alumniList.innerHTML += `
                    <div class="alumni-item">
                        <strong>${m.name}</strong>
                        <span>${m.desc}</span>
                    </div>`;
            }
        }
        // 2. 교수님 처리
        else if (m.role === 'prof') {
            profList.innerHTML += createMemberCard(m, index);
        }
        // 3. 학생 처리
        else {
            if (m.desc.includes('Ph.D') || m.desc.includes('Direct') || m.desc.includes('Post')) {
                phdList.innerHTML += createMemberCard(m, index);
            } else if (m.desc.includes('Master') || m.desc.includes('M.S')) {
                msList.innerHTML += createMemberCard(m, index);
            }
        }
    });
}

function createMemberCard(m, idx) {
    const dataStr = encodeURIComponent(JSON.stringify(m));
    return `<div class="member-card" onclick="showMemberDetail('${dataStr}')">
        <img src="${m.image}" onerror="this.src='images/member_placeholder.png'">
        <span class="role-text">${m.desc.split(',')[0]}</span>
        <h3>${m.name}</h3>
    </div>`;
}
// showMemberDetail은 JSON 파싱해서 오버레이 띄우는 함수 (위의 News/Research와 동일 방식)

function renderAwardsPage() {
    const list = document.getElementById('award-list');
    if(!list) return;
    awardData.forEach(a => {
        list.innerHTML += `
            <div class="pub-item award-item-style">
                <div class="pub-year">${a.date}</div>
                <div>
                    <h3 style="margin:0 0 5px;">${a.title}</h3>
                    <div style="color:#666;">${a.organization}</div>
                </div>
            </div>`;
    });
}
