document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('cert-gallery');
    const tabsContainer = document.getElementById('cert-tabs-container');
    let allCertifications = [];

    const tabData = [
        { category: 'ai', icon: 'brain', label: 'AI' },
        { category: 'back', icon: 'server', label: 'Backend' },
        { category: 'cyber', icon: 'shield-alt', label: 'Security' },
        { category: 'front', icon: 'code', label: 'Frontend' },
        { category: 'python', icon: 'python', label: 'Python' },
        { category: 'all', icon: 'certificate', label: 'All' },
        { category: 'others', icon: 'ellipsis-h', label: 'Others' }
    ];

    function generateTabs() {
        tabsContainer.innerHTML = '';
        tabData.forEach(tab => {
            const tabButton = document.createElement('div');
            tabButton.className = 'cert-tab';
            tabButton.dataset.category = tab.category;
            tabButton.setAttribute('role', 'tab');
            tabButton.setAttribute('aria-selected', 'false');
            tabButton.innerHTML = `<i class="fas fa-${tab.icon}"></i> ${tab.label}`;
            tabsContainer.appendChild(tabButton);
        });
    }

    const certificationsData = {
        certifications: [
            {
                category: "AI & Data Science",
                shortcut: "ai",
                cert: [
                    {
                        name: "AI For Everyone",
                        url: "",
                        img: "assat/imgs/certfications/AI/ai mahara tech.png",
                        alt: "AI Mahara Tech Certification"
                    },
                    {
                        name: "Deep Learning Kaggle",
                        url: "",
                        img: "assat/imgs/certfications/AI/deep learning kaggle.png",
                        alt: "Deep Learning Kaggle Certification"
                    },
                    {
                        name: "Machine Learning Kaggle",
                        url: "",
                        img: "assat/imgs/certfications/AI/machine learning kaggle.png",
                        alt: "Machine Learning Kaggle Certification"
                    },
                    {
                        name: "Data Analysis Freecodecamp",
                        url: "",
                        img: "assat/imgs/certfications/AI/data analysis freecodecamp.png",
                        alt: "Data Analysis Freecodecamp Certification"
                    },
                    {
                        name: "Pandas Kaggle",
                        url: "",
                        img: "assat/imgs/certfications/AI/pandas kaggle.png",
                        alt: "Pandas Kaggle Certification"
                    },
                    {
                        name: "Data Analytics Simple Learn",
                        url: "",
                        img: "assat/imgs/certfications/AI/simple learn data analytics.png",
                        alt: "Data Analytics Kaggle Certification"
                    },
                    {
                        name: "Machine Learning Freecodecamp",
                        url: "https://github.com/ahmedsamir45/FreeCodeCamp_machineLearning_projects",
                        img: "assat/imgs/certfications/AI/machine learning freecodecamp.png",
                        alt: "Machine Learning Freecodecamp"
                    }
                ]
            },
            {
                category: "Backend & Databases",
                shortcut: "back",
                cert: []
            },
            {
                category: "Cyber Security",
                shortcut: "cyber",
                cert: [
                    {
                        name: "CCNA Enterprise Networking",
                        url: "",
                        img: "assat/imgs/certfications/cyber security/ccna enterprise networking.png",
                        alt: "CCNA Enterprise Networking Certification"
                    },
                    {
                        name: "CCNA Introduction to Network",
                        url: "",
                        img: "assat/imgs/certfications/cyber security/ccna introduction to network.png",
                        alt: "CCNA Introduction to Network Certification"
                    },
                    {
                        name: "CCNA Switching and Routing",
                        url: "",
                        img: "assat/imgs/certfications/cyber security/ccna switching and routing.png",
                        alt: "CCNA Switching and Routing Certification"
                    },
                    {
                        name: "Cloud Virtualization Concept",
                        url: "",
                        img: "assat/imgs/certfications/cyber security/cloud virtulization concept.png",
                        alt: "Cloud Virtualization Concept Certification"
                    },
                    {
                        name: "Cyber Security Edrak",
                        url: "",
                        img: "assat/imgs/certfications/cyber security/cyber edrak.png",
                        alt: "Cyber Edrak Certification"
                    },
                    {
                        name: "Cyber For All",
                        url: "",
                        img: "assat/imgs/certfications/cyber security/cyber for all.png",
                        alt: "Cyber For All Certification"
                    },
                    {
                        name: "Cyber OBS",
                        url: "",
                        img: "assat/imgs/certfications/cyber security/cyber obs.png",
                        alt: "Cyber OBS Certification"
                    },
                    {
                        name: "Ethical Hacking",
                        url: "",
                        img: "assat/imgs/certfications/cyber security/ethical hacking.png",
                        alt: "Ethical Hacking Certification"
                    },
                    {
                        name: "ISC2",
                        url: "",
                        img: "assat/imgs/certfications/cyber security/isc2.png",
                        alt: "ISC2 Certification"
                    }
                ]
            },
            {
                category: "Frontend",
                shortcut: "front",
                cert: [
                    {
                        name: "HTML CSS Mahara Tech",
                        url: "",
                        img: "assat/imgs/certfications/frontend/html css mahara tech.png",
                        alt: "HTML CSS Mahara Tech Certification"
                    },
                    {
                        name: "HTML SoloLearn",
                        url: "",
                        img: "assat/imgs/certfications/frontend/html sololearn.png",
                        alt: "HTML SoloLearn Certification"
                    },
                    {
                        name: "Intro CSS SoloLearn",
                        url: "",
                        img: "assat/imgs/certfications/frontend/intro css sololearn.jpg",
                        alt: "Intro CSS SoloLearn Certification"
                    },
                    {
                        name: "Intro JavaScript SoloLearn",
                        url: "",
                        img: "assat/imgs/certfications/frontend/intro javascribt sololearn.jpg",
                        alt: "Intro JavaScript SoloLearn Certification"
                    },
                    {
                        name: "JavaScript SoloLearn",
                        url: "",
                        img: "assat/imgs/certfications/frontend/javascribt sololearn.jpg",
                        alt: "JavaScript SoloLearn Certification"
                    },
                    {
                        name: "React Mahara Tech",
                        url: "",
                        img: "assat/imgs/certfications/frontend/react mahara tech.jpg",
                        alt: "React Mahara Tech Certification"
                    },
                    {
                        name: "Responsive Web Design FreeCodeCamp",
                        url: "",
                        img: "assat/imgs/certfications/frontend/responsive web desgin freecodecamp.png",
                        alt: "Responsive Web Design FreeCodeCamp Certification"
                    }
                ]
            },
            {
                category: "Python",
                shortcut: "python",
                cert: [
                    {
                        name: "Scientific Computing with Python",
                        url: "",
                        img: "assat/imgs/certfications/python/python freecodecamp.png",
                        alt: "Data Analysis FreeCodeCamp Certification"
                    },
                    {
                        name: "Python Kaggle",
                        url: "",
                        img: "assat/imgs/certfications/python/python kaggle.png",
                        alt: "Pandas Kaggle Certification"
                    },
                    {
                        name: "Python Mahara Tech",
                        url: "",
                        img: "assat/imgs/certfications/python/python mahar tech.png",
                        alt: "Python Mahara Tech Certification"
                    }
                ]
            },
            {
                category: "Others",
                shortcut: "others",
                cert: [
                    {
                        name: "Change Management Edlal",
                        url: "",
                        img: "assat/imgs/certfications/others/change management edlal.png",
                        alt: "Change Management Edlal Certification"
                    },
                    {
                        name: "Freelance Search Jobs",
                        url: "",
                        img: "assat/imgs/certfications/others/freelance search jobs.png",
                        alt: "Freelance Search Jobs Certification"
                    },
                    {
                        name: "Job Search Career Development",
                        url: "",
                        img: "assat/imgs/certfications/others/job search carear development.png",
                        alt: "Job Search Career Development Certification"
                    },
                    {
                        name: "Professional Certifications Edlal",
                        url: "",
                        img: "assat/imgs/certfications/others/profitional certfications edlal.png",
                        alt: "Professional Certifications Edlal Certification"
                    },
                    {
                        name: "Search Jobs",
                        url: "",
                        img: "assat/imgs/certfications/others/search jobs.png",
                        alt: "Search Jobs Certification"
                    },
                    {
                        name: "AI Tools Microsoft",
                        url: "",
                        img: "assat/imgs/certfications/others/ai tools microsoft.png",
                        alt: "AI Tools Microsoft Certification"
                    },
                    {
                        name: "Blockchain Mahara Tech",
                        url: "",
                        img: "assat/imgs/certfications/others/block chain mahara tech.png",
                        alt: "Blockchain Mahara Tech Certification"
                    },
                    {
                        name: "Chat GPT El Madrasa",
                        url: "",
                        img: "assat/imgs/certfications/others/chat gpt el madrasa.png",
                        alt: "Chat GPT El Madrasa Certification"
                    },
                    {
                        name: "Chat GPT Udemy",
                        url: "",
                        img: "assat/imgs/certfications/others/chat gpt udemy.png",
                        alt: "Chat GPT Udemy Certification"
                    },
                    {
                        name: "Clean Code Mahara Tech",
                        url: "",
                        img: "assat/imgs/certfications/others/clean code mahara tech.png",
                        alt: "Clean Code Mahara Tech Certification"
                    },
                    {
                        name: "Edrak English",
                        url: "",
                        img: "assat/imgs/certfications/others/edrak english.png",
                        alt: "Edrak English Certification"
                    },
                    {
                        name: "Git and GitHub",
                        url: "",
                        img: "assat/imgs/certfications/others/git and git hub.png",
                        alt: "Git and GitHub Certification"
                    }
                ]
            }
        ]
    };

    setTimeout(() => {
        allCertifications = certificationsData.certifications;

        generateTabs();

        const tabButtons = document.querySelectorAll('.cert-tab');

        if (tabButtons.length > 0 && allCertifications.length > 0) {
            const firstNonAllTab = Array.from(tabButtons).find(btn =>
                btn.dataset.category !== 'all' &&
                allCertifications.some(cat => cat.shortcut === btn.dataset.category)
            );

            const defaultTab = firstNonAllTab || tabButtons[tabButtons.length - 1];
            defaultTab.classList.add('active');
            defaultTab.setAttribute('aria-selected', 'true');
            renderCertifications(defaultTab.dataset.category);
        }

        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');
                renderCertifications(this.dataset.category);
            });
        });
    }, 500);

    function renderCertifications(category) {
        gallery.innerHTML = '';

        if (category === 'all') {
            allCertifications.forEach(categoryData => {
                categoryData.cert.forEach((cert, index) => {
                    createCertCard(cert, categoryData.category, index);
                });
            });
        } else {
            const categoryData = allCertifications.find(cat => cat.shortcut === category);

            if (categoryData?.cert?.length) {
                categoryData.cert.forEach((cert, index) => {
                    createCertCard(cert, categoryData.category, index);
                });
            } else {
                gallery.innerHTML = `
                    <div class="col-12">
                        <div class="no-certs">
                            <i class="fas fa-certificate"></i>
                            <p>No certifications in this category yet</p>
                        </div>
                    </div>
                `;
            }
        }
    }

    function createCertCard(cert, categoryName, index) {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';

        const card = document.createElement('div');
        card.className = 'cert-card h-100 wow animate__animated animate__fadeInUp';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="cert-img-container">
                <img 
                    class="cert-img" 
                    src="${cert.img}" 
                    alt="${cert.alt || cert.name}" 
                    loading="lazy"
                >
            </div>
            <div class="cert-content">
                <h3 class="cert-title">${cert.name}</h3>
                <div class="cert-meta">
                    <span class="cert-category">${categoryName}</span>
                    ${cert.url ? `
                    <a href="${cert.url}" class="cert-link" target="_blank" rel="noopener noreferrer">
                        View <i class="fas fa-external-link-alt"></i>
                    </a>
                    ` : ''}
                </div>
            </div>
        `;

        col.appendChild(card);
        gallery.appendChild(col);
    }
});
