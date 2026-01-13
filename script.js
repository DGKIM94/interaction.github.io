// script.js

/* --- 1. 유틸리티: 오버레이 제어 --- */
function openDetail(htmlContent) {
    const overlay = document.getElementById('detail-overlay');
    const body = document.getElementById('detail-body');

    // 오버레이 요소가 없는 페이지(예: News)에서 호출될 경우를 대비
    if (!overlay || !body) return;

    body.innerHTML = htmlContent;
    overlay.classList.add('active'); // CSS 슬라이드 업 애니메이션
    document.body.style.overflow = 'hidden'; // 배경 스크롤 막기
}

function closeDetail() {
    const overlay = document.getElementById('detail-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // 스크롤 복구
    }
}

// 오버레이 외부 클릭 시 닫기
document.addEventListener('click', function(event) {
    const overlay = document.getElementById('detail-overlay');
    if (event.target === overlay) {
        closeDetail();
    }
});

/* --- 2. 메인 페이지 (Home) 렌더링 --- */
function renderHome() {
    // 1) 뉴스 (최신 3개)
    const newsContainer = document.getElementById('home-news');
    if (newsContainer && typeof newsData !== 'undefined') {
        newsContainer.innerHTML = ''; // 초기화
        newsData.slice(0, 3).forEach(item => {
            newsContainer.innerHTML += `
                <div class="news-card">
                    <span class="news-date">${item.date}</span>
                    <h3 style="font-size:1.1rem; margin:10px 0; color:var(--dark);">${item.title}</h3>
                    <p style="color:#666; font-size:0.9rem; line-height:1.5;">${item.content}</p>
                </div>`;
        });
    }

    // 2) 연구 하이라이트 (Ongoing 중 상위 4개)
    const resContainer = document.getElementById('home-research');
    if (resContainer && typeof researchData !== 'undefined') {
        resContainer.innerHTML = ''; // 초기화
        // Ongoing이면서 상위 4개만 추출
        const highlights = researchData.filter(r => r.status === 'Ongoing').slice(0, 4);

        highlights.forEach((item) => {
            // 주의: 메인에서는 클릭 시 research.html로 이동하도록 유도하거나, 여기서 바로 모달을 띄울 수 있음.
            // 여기서는 깔끔하게 디자인만 보여주고 클릭 시 Research 탭으로 이동하게끔 유도 (또는 detail 띄우기)
            resContainer.innerHTML += `
                <div class="member-card" onclick="location.href='research.html'">
                    <div style="background:var(--primary); height:4px; width:100%; position:absolute; top:0; left:0;"></div>
                    <div style="padding-top:15px;">
                        <h3 style="margin-bottom:10px;">${item.title}</h3>
                        <p style="font-size:0.9rem; color:#666;">${item.description.substring(0, 80)}...</p>
                        <div style="margin-top:15px; color:var(--primary); font-size:0.85rem; font-weight:bold;">Read More &rarr;</div>
                    </div>
                </div>`;
        });
    }
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

// 멤버 카드 생성 (Index를 넘겨줌 -> 오류 방지 핵심!)
function createMemberCard(m, index) {
    return `
        <div class="member-card" onclick="showMemberDetail(${index})">
            <img src="${m.image}" onerror="this.src='images/member_placeholder.png'" alt="${m.name}">
            <span class="role-text">${m.desc.split(',')[0]}</span>
            <h3>${m.name}</h3>
            <p class="email-text">${m.email || ''}</p>
        </div>`;
}

// 멤버 상세 보기 (배열 인덱스로 데이터 찾기)
function showMemberDetail(index) {
    const m = memberData[index]; // 데이터 직접 조회

    // 상세 정보 HTML 구성
    let extraInfo = '';
    if (m.detail) {
        if(m.detail.education) extraInfo += `<div class="info-group"><h4>Education</h4><ul>${m.detail.education.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
        if(m.detail.position) extraInfo += `<div class="info-group"><h4>Positions</h4><ul>${m.detail.position.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
        if(m.detail.membership) extraInfo += `<div class="info-group"><h4>Memberships</h4><ul>${m.detail.membership.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
    } else {
        extraInfo = `<div class="info-group"><h4>Research Interests</h4><p>Haptics, Virtual Reality, HCI, Multimodal Interaction</p></div>`;
    }

    const html = `
        <div class="detail-header-center">
            <img src="${m.image}" class="detail-img-lg" onerror="this.src='images/member_placeholder.png'">
            <h1 class="detail-title">${m.name}</h1>
            <span class="detail-subtitle">${m.desc}</span>
            <p class="detail-email"><i class="fas fa-envelope"></i> ${m.email}</p>
        </div>
        <div class="detail-body">
            ${extraInfo}
        </div>
    `;
    openDetail(html);
}

/* --- 4. 연구 (Research) 렌더링 --- */
function renderResearchPage() {
    const ongoingContainer = document.getElementById('ongoing-research');
    const completedContainer = document.getElementById('completed-research');

    if (!ongoingContainer) return; // research.html이 아니면 중단

    if (typeof researchData === 'undefined') return;

    researchData.forEach((r, index) => {
        const cardHTML = createResearchItem(r, index);
        if (r.status === 'Ongoing') {
            ongoingContainer.innerHTML += cardHTML;
        } else {
            completedContainer.innerHTML += cardHTML;
        }
    });
}

function createResearchItem(r, index) {
    return `
        <div class="research-item ${r.status.toLowerCase()}" onclick="showResearchDetail(${index})">
            <div class="res-info">
                <h3>${r.title}</h3>
                <div class="res-meta">
                    <span class="agency-badge">${r.agency}</span>
                    <span class="period-text">${r.period}</span>
                </div>
            </div>
            <div class="arrow-box"><i class="fas fa-arrow-right"></i></div>
        </div>`;
}

function showResearchDetail(index) {
    const r = researchData[index];
    const statusColor = r.status === 'Ongoing' ? 'var(--primary)' : '#888';

    const html = `
        <div class="detail-header-left">
            <span class="status-badge" style="background:${statusColor}">${r.status}</span>
            <h1 class="detail-title-lg">${r.title}</h1>
        </div>
        <div class="detail-body">
            <div class="info-grid">
                <div class="info-item">
                    <label>Funding Agency</label>
                    <span>${r.agency}</span>
                </div>
                <div class="info-item">
                    <label>Period</label>
                    <span>${r.period}</span>
                </div>
            </div>
            <div class="description-box">
                <h4>Description</h4>
                <p>${r.description}</p>
            </div>
        </div>
    `;
    openDetail(html);
}

/* --- 5. 기타 페이지 (News, Awards, Publications) --- */
function renderNewsPage() {
    const container = document.getElementById('news-list-container');
    if (!container || typeof newsData === 'undefined') return;

    container.innerHTML = '';
    newsData.forEach(item => {
        container.innerHTML += `
            <div class="pub-item news-item-style">
                <div class="news-date-box">
                    <strong>${item.date}</strong>
                </div>
                <div class="news-content-box">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                </div>
            </div>`;
    });
}

function renderAwardsPage() {
    const container = document.getElementById('award-list-container');
    if (!container || typeof awardData === 'undefined') return;

    container.innerHTML = '';
    awardData.forEach(item => {
        container.innerHTML += `
            <div class="pub-item award-item-style">
                <div class="pub-year">${item.date}</div>
                <div class="pub-content">
                    <h3>${item.title}</h3>
                    <div class="pub-venue">${item.organization}</div>
                </div>
            </div>`;
    });
}

function renderPublications() {
    // 필터링 기능이 포함된 Pubs 렌더링 (기존 로직 유지)
    filterPubs('all', document.querySelector('.filter-btn'));
}

function filterPubs(category, btn) {
    if (btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    const container = document.getElementById('pub-list');
    if (!container || typeof publicationData === 'undefined') return;

    container.innerHTML = '';

    publicationData.forEach(pub => {
        if (category === 'all' || pub.category === category) {
            const linkHtml = pub.link ? `<a href="${pub.link}" target="_blank" class="pub-link"><i class="fas fa-external-link-alt"></i></a>` : '';
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
        }
    });
}
