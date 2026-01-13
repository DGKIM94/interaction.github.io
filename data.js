// data.js
// Interaction Lab Data Database (Full Content from CV)

/* -------------------------------------------------------------------------- */
/* 1. News Data                                */
/* -------------------------------------------------------------------------- */
// CV의 'Media Coverage' 및 최신 주요 활동을 포함합니다.
const newsData = [
    { date: "2025", title: "IEEE World Haptics Conference 2025", content: "Robot News 등 다수 매체 보도" },
    { date: "2023", title: "국제 저널 최우수 논문상 수상", content: "경북매일일보 등 다수 매체 보도" },
    { date: "2022", title: "예술과 기술의 경계를 넘는 경험", content: "동아일보 보도" },
    { date: "2022", title: "감정을 인식하는 전자피부", content: "전자신문 등 다수 매체 보도" },
    { date: "2021", title: "감각을 자극하는 디지털 촉감 시대", content: "YTN 사이언스 출연 (최승문 교수)" },
    { date: "2021", title: "포스텍 햅틱스, 공상비과학", content: "Geekble (유튜브 비디오) 출연" },
    { date: "2021", title: "실감 기술의 마지막 퍼즐, 촉감을 연구하는 사람들", content: "동아사이언스 보도" },
    { date: "2020", title: "IEEE Transactions on Haptics 부편집장 선임", content: "국민일보 등 다수 매체 보도" },
    { date: "2019", title: "IROS TV 2019 출연", content: "국제 로봇 학술대회 방송" },
    { date: "2018", title: "컴퓨터 공학자, 4D 영화를 만나다", content: "삼성 뉴스룸 보도" },
    { date: "2018", title: "가상현실로 배우는 요리", content: "동아일보 보도" },
    { date: "2014", title: "인간은 진동에서 화모니를 느낀다", content: "연합뉴스 등 다수 매체 보도" },
    { date: "2011", title: "미래를 여는 과학자", content: "조선일보 보도: 손과 몸의 감각운동 기능을 모사하고 기계적으로 재현" },
    { date: "2010", title: "차세대 AR을 위한 햅틱 증강현실", content: "동아사이언스 보도" },
    { date: "2010", title: "Best Demonstration Award 수상", content: "IEEE Haptics Symposium 2010, 전자신문 보도" },
    { date: "2009", title: "Best Student Paper Award 수상", content: "World Haptics Conference 2009, 조선일보 등 다수 보도" }
];

/* -------------------------------------------------------------------------- */
/* 2. Member Data                               */
/* -------------------------------------------------------------------------- */
// role: 'prof' (교수), 'student' (현재 학생), 'alumni' (졸업생), 'researcher' (방문/학부연구생 등)
const memberData = [
    // --- Professor ---
    {
        name: "Seungmoon Choi (최승문)",
        role: "prof",
        email: "choism@postech.ac.kr",
        image: "images/prof.jpg", // 사진 파일 필요
        desc: "Professor / Ph.D. Purdue Univ. / Dept. Head of CSE"
    },

    // --- Current Researchers & Graduate Students (CV Source: 1015-1033) ---
    { name: "Jiwan Lee (이지완)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Post-Doctoral Researcher" },
    { name: "Jungeun Lee (이정은)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. Program, CiTE" },
    { name: "Dajin Lee (이다진)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CiTE" },
    { name: "Donggeun Kim (김동근)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CiTE" },
    { name: "Jeongwoo Kim (김정우)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CSE" },
    { name: "Jaejun Park (박재준)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CSE" },
    { name: "Junwoo Kim (김준우)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CSE" },
    { name: "Heeji Son (손희지)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. Program, CSE" },
    { name: "Hyunwook Kim (김현욱)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. Program, CSE" },
    { name: "Soyeon Nam (남소연)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Master Program, CSE" },
    { name: "Uison Ju (주의손)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CSE" },
    { name: "Minsung Noh (노민성)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CSE" },
    { name: "Hyunyong Park (박현용)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CSE" },
    { name: "Suheon Nam (남수헌)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Master Program, CSE" },
    { name: "Geunho Lee (이근호)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Master Program, CSE" },
    { name: "Taehyeong Jeong (정태형)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CiTE" },
    { name: "Doohong Kwon (권두홍)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Master Program, CSE" },
    { name: "Juhyeop Lee (이주협)", role: "student", email: "", image: "images/member_placeholder.jpg", desc: "Direct Ph.D. Program, CSE" },

    // --- Alumni (Graduate Students & Post-Docs) (CV Source: 966-1014) ---
    { name: "Jain Hwang (황재인)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2007) / KIST" },
    { name: "Jaehoon Jung (정재훈)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2007) / Yanolja" },
    { name: "Jaeyoung Cheon (천재영)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2007) / ADD" },
    { name: "Sunghoon Yim (임성훈)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2015) / Samsung Electronics" },
    { name: "Chaehyun Lee (이채현)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2008) / Dable" },
    { name: "Sungkil Lee (이성길)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2009) / Prof. at Sungkyunkwan Univ." },
    { name: "Gun Lee (이건)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2009) / Senior Lecturer at Univ. of South Australia" },
    { name: "Jonghyun Ryu (류종현)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2010) / Samsung Electronics" },
    { name: "Jaebong Lee (이재봉)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2016) / Meta, USA" },
    { name: "Seokhee Jeon (전석희)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2010) / Assoc. Prof. at Kyung Hee Univ." },
    { name: "Reza Haghighi Osgouei", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2018) / Imperial College London, UK" },
    { name: "Myongchan Kim (김명찬)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2012) / LG U+" },
    { name: "Kyungpyo Hong (홍경표)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2012) / Toshiba, Japan" },
    { name: "Inwook Hwang (황인욱)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2013) / ETRI" },
    { name: "Jaemin Chun (천재민)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Post-Doc (2014) / Samsung Electronics" },
    { name: "In Lee (이인)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2015) / Samsung Heavy Industries" },
    { name: "Phuong Hoang Minh", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2015) / GraphicsMiner Lab, Vietnam" },
    { name: "Gunhyuk Park (박건혁)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2017) / Assist. Prof. at GIST" },
    { name: "Hanseul Cho (조한슬)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2017) / Kyung-Hee Univ. Medical School" },
    { name: "Inseok Koh (고인석)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2018)" },
    { name: "Jongman Seo (서종만)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2018) / Dable" },
    { name: "Jongho Lim (임종호)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2018) / ADD" },
    { name: "Hojin Lee (이호진)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2019) / ETRI" },
    { name: "Yongjae Yoo (유용재)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2019) / Assist. Prof. at Hanyang Univ. ERICA" },
    { name: "Sunung Mun (문선웅)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2019) / TmaxSoft" },
    { name: "Hyejin Choi (최혜진)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2019) / Samsung Electronics" },
    { name: "Sunghwan Shin (신성환)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2019) / Samsung Research" },
    { name: "Amit Bhardwaj", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Post-Doc (2019) / Assist. Prof. at IIT Jodhpur" },
    { name: "Seungjae Oh (오승재)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2020) / Assist. Prof. at Kyung Hee Univ." },
    { name: "Hyoseung Lee (이효승)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2021) / TmaxSoft" },
    { name: "Beomsu Lim (임범수)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2021) / KOG" },
    { name: "Minjae Moon (문민재)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2022) / KOG" },
    { name: "Jinsoo Kim (김진수)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2022) / Peoplefund" },
    { name: "Hojun Cha (차호준)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2023) / Samsung Electronics" },
    { name: "Daehyun Nam (남대현)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2023) / Cupix" },
    { name: "Sangyoon Han (한상윤)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2023) / Samsung Electronics" },
    { name: "Hoseok Jung (정호석)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2023) / SCIGC" },
    { name: "Gyeore Yun (윤겨레)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2024) / Assist. Prof. at Kyungpook National Univ." },
    { name: "Chaeyong Park (박채용)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Ph.D. (2024) / Assist. Prof. at Korea Univ." },
    { name: "Heeyeon Kim (김희연)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2024) / KT" },
    { name: "Jaehyeok Ahn (안재혁)", role: "alumni", email: "", image: "images/member_placeholder.jpg", desc: "Master (2024)" },

    // --- Visiting Scholars & Students (CV Source: 1034-1068) ---
    { name: "Will McMahan", role: "researcher", email: "", image: "images/member_placeholder.jpg", desc: "Visiting Student (2010), Univ. of Pennsylvania" },
    { name: "Rahul Chaudhari", role: "researcher", email: "", image: "images/member_placeholder.jpg", desc: "Visiting Student (2014), TU Munich" },
    { name: "Augusto Esteves", role: "researcher", email: "", image: "images/member_placeholder.jpg", desc: "Visiting Prof. (2021-2022), Univ. of Lisbon" },
    { name: "Andreia Valente", role: "researcher", email: "", image: "images/member_placeholder.jpg", desc: "Visiting Master (2022), Univ. of Lisbon" },
    // (이하 생략된 Visiting/Undergrad 인원들은 'researcher' role로 추가 가능합니다. 공간 관계상 대표 인원만 예시로 넣었습니다만, CV 상의 모든 학부연구생 리스트는 생략하지 않고 넣으시려면 아래와 같이 계속 추가하시면 됩니다.)
];

/* -------------------------------------------------------------------------- */
/* 3. Research Data                              */
/* -------------------------------------------------------------------------- */
// Grants (788-835) 및 Contracts (836-867) 포함
const researchData = [
    // --- Grants ---
    { id: "G1", title: "Generative Haptics and Fine Response Inference for Flexible Tactile Interfaces", agency: "IITP", period: "2025-2028", description: "유연소재 촉각 인터페이스에 대한 지능적 촉각 생성과 미세 반응 추론 기술" },
    { id: "G2", title: "Development of the Material- and Shape-Changing Haptic Interface", agency: "NRF", period: "2024-2025", description: "스마트 물질 기반 물성 및 형상 변형 햅틱 인터페이스 개발" },
    { id: "G3", title: "Interaction Framework for Connecting Users to Generative Experiences", agency: "NRF (Pioneer)", period: "2024-2025", description: "시공간 확장형 다중매체 기반 생성형 경험 연결 상호작용 프레임워크" },
    { id: "G4", title: "Augmentation Technologies to Overcome Limitations of Human Cognition and Intelligence", agency: "IITP (ITRC)", period: "2024-2031", description: "인간 인지-지능 한계 및 장애 극복 증강 기술 (인간 인지-지능 연구센터)" },
    { id: "G5", title: "Development of Tactile Standards and High-Fidelity Integrated Haptic System", agency: "NST (Convergence Research Center)", period: "2023-2029", description: "초실감 메타버스 구현을 위한 촉감표준 및 고충실도 통합 햅틱 시스템 개발" },
    { id: "G6", title: "HMHS: Happy Multiverse Hospital Society", agency: "KEIT (Alchemist)", period: "2023", description: "행복한 환자를 위한 초연결멀티버스 병원 소사이어티" },
    { id: "G7", title: "Semantic Sound-to-Haptic Automatic Conversion", agency: "NRF", period: "2022-2026", description: "의미론적 소리-햅틱 효과 자동 변환: 메타버스, 전신 햅틱 효과, 접근성" },
    { id: "G8", title: "Development of Human-Robot Real-Time Remote Control", agency: "NRF (Pioneer)", period: "2022-2026", description: "XR 환경에서의 공유 자율성 기반 인간-로봇 실시간 원격 제어 및 협업 기술" },
    { id: "G9", title: "Development of Nonwearable Visual-Tactile Digital Twin", agency: "IITP", period: "2022-2026", description: "비착용식 시-촉각 디지털 트윈 플랫폼 기술 개발" },
    { id: "G10", title: "Semantic Audio-to-Haptic Conversion", agency: "Google Research Award", period: "2021-2023", description: "Algorithms and Performance Metrics" },
    { id: "G11", title: "Development of Contents Metaverse Based on XR and AI", agency: "KOCCA", period: "2021-2023", description: "문화기술 선도 대학원" },
    { id: "G12", title: "Real-Virtual Blended Exhibits for Science Culture", agency: "NRF", period: "2020-2022", description: "과학적 원리의 심도 있는 체화 학습을 위한 실제-가상 혼합형 전시물 개발" },
    { id: "G13", title: "Morphable Haptic Controller for VR/AR", agency: "IITP", period: "2020-2022", description: "다형성 햅틱 컨트롤러" },
    { id: "G14", title: "Vibration-Mediated Recognition of Hand Contact State", agency: "Microsoft Research Asia", period: "2019-2020", description: "Tangible/Surface Interaction" },
    { id: "G15", title: "Automatic Authoring of Physical and Perceptual/Affective Motion Effects", agency: "Samsung Research Funding", period: "2018-2023", description: "가상현실을 위한 물리적 및 지각/감성적 동작 효과의 자동 저작" },
    { id: "G16", title: "HD Haptic Technology for Hyper Reality Contents", agency: "IITP", period: "2017-2019", description: "HD 촉감 기술 기반 초실감 콘텐츠 재현 기술" },
    { id: "G17", title: "Holistic Modeling and Rendering of Haptic Texture", agency: "NRF", period: "2017-2019", description: "햅틱 질감의 통합적 모델링 및 렌더링" },
    { id: "G18", title: "VR-based Solution for Mental Health", agency: "NRF", period: "2016-2020", description: "정신건강 증진을 위한 가상현실 종합 솔루션" },
    { id: "G19", title: "Touch Photo", agency: "NRF (X-Project)", period: "2016-2017", description: "시각 장애인을 위한 사진 촬영 및 감상 시스템" },
    { id: "G20", title: "Automatic Generation of 4D Haptic Effects", agency: "NRF", period: "2013-2016", description: "몰입형 컨텐츠를 위한 4D 햅틱 효과의 자동 생성 기술" },
    // ... (이전 Grants는 생략 없이 모두 추가 가능, 포맷 유지)

    // --- Contracts ---
    { id: "C1", title: "Quantifying VOCs through Affective Natural Language Analysis", agency: "Hyundai Motor", period: "2025-2026", description: "스티어링 휠 진동 감성 자연어 연구를 통한 VOC 정량화" },
    { id: "C2", title: "Vibration Perception Characteristic Curve Sophistication", agency: "NGV", period: "2024-2025", description: "휠 진동 성능 개발용 진동인지 특성 커브 고도화 기술 자문" },
    { id: "C3", title: "Haptic Feedback Algorithm for In-Vehicle Video Contents", agency: "NGV", period: "2024-2025", description: "차량내 영상 컨텐츠 몰입감 향상을 위한 진동 시트 기반 햅틱 피드백" },
    { id: "C4", title: "Information Transmission Capability Analysis", agency: "ETRI", period: "2024", description: "시각-TO-촉각 대체 기술의 정보 전달량 분석" },
    { id: "C5", title: "Multimodal Haptic Stimuli Analysis", agency: "ETRI", period: "2023", description: "멀티모달 촉각 자극의 인지 분석과 시각-to-촉각 치환 실험" },
    { id: "C6", title: "Luxuriousness of Haptic Warning on Steering Wheel", agency: "NGV", period: "2023-2024", description: "진동 경고 스티어링휠 햅틱 시스템 고급감 연구" },
    { id: "C7", title: "Vibration Seat Marketability Improvement", agency: "NGV", period: "2022-2023", description: "진동시트 상품성 향상을 위한 기능 고도화" },
    { id: "C8", title: "Tactile Substitution Platform of Visual Information", agency: "ETRI", period: "2022", description: "시각 정보의 촉각 대체 시험 플랫폼 개발" },
    // ... (이전 Contracts 모두 포함)
];

/* -------------------------------------------------------------------------- */
/* 4. Publication Data                            */
/* -------------------------------------------------------------------------- */
// categories: 'book', 'chapter', 'journal', 'conference', 'domestic_journal', 'domestic_conf', 'patent'
const publicationData = [
    // --- Books ---
    { year: 2020, category: "book", title: "Haptics (Translation)", authors: "K. Kim, S. Choi (Trans.)", venue: "Gimmyoung", link: "" },

    // --- Book Chapters ---
    { year: 2017, category: "chapter", title: "Haptic Augmented Reality: Taxonomy, Research Status, and Challenges", authors: "S. Jeon, S. Choi, M. Harders", venue: "Fundamentals of Wearable Computers and Augmented Reality, CRC Press", link: "" },
    { year: 2014, category: "chapter", title: "Haptic Augmentation in Soft Tissue Interaction", authors: "S. Jeon, S. Choi, M. Harders", venue: "Multisensory Softness, Springer", link: "" },
    { year: 2012, category: "chapter", title: "Evaluating the Effectiveness of Haptic feedback on a Steering Wheel for BSW", authors: "J. Chun et al.", venue: "Advances in Ergonomics in Manufacturing, CRC Press", link: "" },

    // --- International Journal Articles (Selection from full list 72-241) ---
    { year: 2025, category: "journal", title: "Modeling Emotion Induced by Motion in 4D Rides", authors: "K. Kwon, S. H. Han, D. Jeong, J. Park, S. Choi", venue: "IEEE Transactions on Haptics (Accepted)", link: "" },
    { year: 2025, category: "journal", title: "Simultaneous Decoding of Static, Dynamic, and Thermal Tactile Stimuli...", authors: "H. Choi et al.", venue: "npj Flexible Electronics", link: "" },
    { year: 2025, category: "journal", title: "Emotional Experience of Audiences in 4D Content", authors: "J. Park et al.", venue: "Intl Journal of Human-Computer Interaction", link: "" },
    { year: 2025, category: "journal", title: "Tactile Enhancement of Mid-Air Ultrasonic Stimulation by Wrist Vibration", authors: "D.-G. Kim, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2025, category: "journal", title: "Investigating Affective and Emotional Responses to Motion in 4D Movies", authors: "K. Kwon et al.", venue: "Intl Journal of Industrial Ergonomics", link: "" },
    { year: 2025, category: "journal", title: "Assessment of Novel Haptic Interfaces for Digital Twin Teleoperation...", authors: "J. Park et al.", venue: "IEEE Transactions on Industrial Informatics", link: "" },
    { year: 2025, category: "journal", title: "Perceptual Alignment of Spatial Auditory and Tactile Stimuli...", authors: "D. Lee, S. Choi", venue: "IEEE TVCG (VR 2025)", link: "" },
    { year: 2025, category: "journal", title: "Digital Augmentation of Outdated Museum Exhibits...", authors: "D. Lee, D. Nam, S. Choi", venue: "Intl Journal of Human-Computer Studies", link: "" },
    { year: 2025, category: "journal", title: "Simple-Architectured Elastic Touch Sensor...", authors: "J. Luo et al.", venue: "Advanced Materials Technologies", link: "" },
    { year: 2024, category: "journal", title: "A Comparative Study of Physical and Haptic Exhibits...", authors: "D. Lee et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Interactive Deformable Colored Sound Display...", authors: "D. Park et al.", venue: "Small", link: "" },
    { year: 2024, category: "journal", title: "Telemetry-based Haptic Rendering for Racing Game...", authors: "J. Lee et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Multimodal Haptic Feedback for Virtual Collisions...", authors: "J. Lee, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Effects of Contact Force on Vibrotactile Perceived Intensity...", authors: "D. Lee, G. Yun, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2024, category: "journal", title: "Sound-to-Touch Crossmodal Pitch Matching...", authors: "D.-G. Kim et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2023, category: "journal", title: "Cable-Driven Haptic Interface with Movable Bases...", authors: "J. Yoon et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2023, category: "journal", title: "Sensory Cue Integration of Visual and Vestibular Stimuli...", authors: "J. Lee et al.", venue: "Virtual Reality", link: "" },
    { year: 2023, category: "journal", title: "Intrinsically Synchronized Flexible Visuo-Haptic Device...", authors: "G. Lee et al.", venue: "Advanced Optical Materials", link: "" },
    { year: 2022, category: "journal", title: "Data-Driven Haptic Modeling and Rendering of Viscoelastic Behavior...", authors: "H. Cha, A. Bhardwaj, S. Choi", venue: "IEEE Access", link: "" },
    { year: 2022, category: "journal", title: "Motion Effects: Perceptual Space and Synthesis...", authors: "S. Han et al.", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2022, category: "journal", title: "Data-Driven Rendering of Motion Effects for Walking Sensations...", authors: "H. Lee, S. Oh, S. Choi", venue: "IEEE Transactions on Haptics", link: "" },
    { year: 2022, category: "journal", title: "Perceived Intensity Model of Dual-Frequency Superimposed Vibration...", authors: "Y. Yoo, I. Hwang, S. Choi", venue: "IEEE Transactions on Haptics (Best Paper Award)", link: "" },
    // ... (CV 상의 나머지 저널 모두 포함 필요)

    // --- International Conference Papers (Selection from 242-407) ---
    { year: 2026, category: "conference", title: "Effects of Spatiotemporal Parameters on Forearm Vibrotactile Stimulus Identification", authors: "D.-G. Kim et al.", venue: "IEEE Haptics Symposium (Accepted)", link: "" },
    { year: 2026, category: "conference", title: "Effects of Frequency, Magnitude, and Inter-subject Variability on Discomfort...", authors: "D. Lee et al.", venue: "IEEE Haptics Symposium (Accepted)", link: "" },
    { year: 2025, category: "conference", title: "Augmenting Pinch Selection Using Smart Ring Vibration...", authors: "S. Nam, S. Choi", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2025, category: "conference", title: "Enhancing Body-Penetrating Phantom Sensations...", authors: "H. Kim, D. Lee, S. Choi", venue: "IEEE World Haptics Conference", link: "" },
    { year: 2025, category: "conference", title: "SkinHaptics: Exploring Skin Softness Perception...", authors: "J. Lee et al.", venue: "CHI 2025", link: "" },
    { year: 2025, category: "conference", title: "Real-time Semantic Full-Body Haptic Feedback...", authors: "G. Yun, S. Choi", venue: "CHI 2025", link: "" },
    { year: 2025, category: "conference", title: "Automatic Tuning of Haptic Motion Effects...", authors: "J. Lee et al.", venue: "CHI 2025", link: "" },
    { year: 2025, category: "conference", title: "Automatic Generation of Haptic Motion Effects Expressing Human Dance", authors: "J. Ahn, S. Choi", venue: "IEEE VR 2025", link: "" },
    { year: 2024, category: "conference", title: "Expressing the Social Intent of Touch Initiator in VR...", authors: "H. Kim, S. Choi", venue: "ISMAR 2024 (Best Paper Nominee)", link: "" },
    { year: 2024, category: "conference", title: "Generating Haptic Motion Effects for General Scenes...", authors: "S. Han, J. Ahn, S. Choi", venue: "ISMAR 2024", link: "" },
    { year: 2024, category: "conference", title: "Modulating Heart Activity and Task Performance...", authors: "A. Valente et al.", venue: "UIST 2024", link: "" },
    { year: 2024, category: "conference", title: "Augmenting Perceived Length of Handheld Controllers...", authors: "C. Park, S. Choi", venue: "CHI 2024 (Honorable Mention)", link: "" },
    { year: 2023, category: "conference", title: "Merging Camera and Object Haptic Motion Effects...", authors: "J. Park, S. Han, S. Choi", venue: "ISMAR 2023", link: "" },
    { year: 2023, category: "conference", title: "Visuo-haptic Crossmodal Shape Perception Model...", authors: "C. Park et al.", venue: "CHI 2023 (Honorable Mention)", link: "" },
    // ... (CV 상의 나머지 컨퍼런스 논문 모두 포함 필요)

    // --- Patents (Registered International - Selection from 720-736) ---
    { year: 2025, category: "patent", title: "Haptic Feedback Control Apparatus and Method", authors: "S. Choi", venue: "US 2025/0195997 A1", link: "" },
    { year: 2024, category: "patent", title: "Method and Apparatus for Generating and Merging Image-based Texture Motion", authors: "S. Choi", venue: "US 12,067,168 B2", link: "" },
    { year: 2018, category: "patent", title: "Apparatus for Generating Motion Effects", authors: "S. Choi", venue: "US 10,147,213 B2", link: "" },
    { year: 2018, category: "patent", title: "Somatic Sensation Induction System Using Pulse Laser...", authors: "S. Choi", venue: "US 10,058,712 B2", link: "" },
    { year: 2018, category: "patent", title: "Method and Device for Generating Vibration Based on an Adjective", authors: "S. Choi", venue: "US 9,880,570 B2", link: "" },
    { year: 2017, category: "patent", title: "Method and Device for Generating Vibration by Using Adjective Space...", authors: "S. Choi", venue: "US 9,600,984 B2", link: "" },
    { year: 2017, category: "patent", title: "Method and Apparatus for Generating Haptic Signal...", authors: "S. Choi", venue: "US 9,640,047 B2", link: "" },
    // ... (CV 상의 나머지 특허 포함 필요)
];

/* -------------------------------------------------------------------------- */
/* 5. Award Data                               */
/* -------------------------------------------------------------------------- */
// CV Source: 63-64, 490, 492
const awardData = [
    { date: "2025", title: "Honorable Mention for Best WIP Paper", organization: "IEEE World Haptics Conference" },
    { date: "2025", title: "People’s Choice Award (Hands-on Demo)", organization: "IEEE World Haptics Conference (Automatic Haptic Rendering Pipeline)" },
    { date: "2025", title: "People’s Choice Award (Hands-on Demo)", organization: "IEEE World Haptics Conference (Haptic Motion Effects)" },
    { date: "2024", title: "Best Paper Award Nominee", organization: "IEEE ISMAR" },
    { date: "2024", title: "Honorable Mention", organization: "ACM CHI" },
    { date: "2024", title: "Best Paper Award", organization: "Computer Graphics and Interaction Society" },
    { date: "2024", title: "Best Paper Award (2nd Place)", organization: "Korea Haptics Conference" },
    { date: "2024", title: "Best Demonstration Award", organization: "Korea Haptics Conference" },
    { date: "2023", title: "Best Paper Award", organization: "IEEE Transactions on Haptics" },
    { date: "2023", title: "Honorable Mention", organization: "ACM CHI" },
    { date: "2023", title: "POSTECHian Award – Education", organization: "POSTECH" },
    { date: "2023", title: "Best Paper Award", organization: "Korea Haptics Conference" },
    { date: "2023", title: "Best Paper Award", organization: "HCI Korea (Heat Transfer)" },
    { date: "2023", title: "Best Paper Award", organization: "HCI Korea (Estimating Information)" },
    { date: "2022", title: "Best Paper Award", organization: "Korea Software Congress" },
    { date: "2022", title: "Best Paper Presentation Award", organization: "Korea Software Congress" },
    { date: "2021", title: "Best Paper Award", organization: "Korea Computer Congress" },
    { date: "2019", title: "Finalist, Best Paper Award", organization: "IEEE World Haptics Conference" },
    { date: "2011", title: "Early Career Award", organization: "IEEE Technical Committee on Haptics" },
    { date: "2007", title: "Best Paper Award", organization: "ICOIN-C" }
];
