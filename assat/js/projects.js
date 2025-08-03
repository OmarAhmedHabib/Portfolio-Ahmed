// Project data and styles (instead of a JSON file)
const projectData = {
    "styles": {
        "colors": {
            "background": "#f8f9fa",
            "nav": "#ffffff",
            "heading": "#343a40",
            "hover": "#0d6efd",
            "accent": "#0d6efd"
        }
    },
    "categories": [
        {"id": "all", "name": "All", "icon": "fa-layer-group"},
        {"id": "web", "name": "Web Applications", "icon": "fa-globe"},
        {"id": "ai", "name": "Artificial Intelligence", "icon": "fa-brain"},
        {"id": "mobile", "name": "Mobile", "icon": "fa-mobile-alt"},
        {"id": "data", "name": "Data", "icon": "fa-chart-bar"}
    ],

  "projects": [
    {
      "title": "Tytopya",
      "description": "Text summarization project and chatbot development includes login, database management (ORM), error handling, and admin page.",
      "category": "fullstack",
      "image": "assat/imgs/projects/full/tytopya.png",
      "tech": ["Flask", "Bootstrap", "TensorFlow", "SQLAlchemy", "T5"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/tytopya"
        },
        {
          "type": "demo",
          "url": "https://youtu.be/JkoaM9AqO2o",
          "icon": "fa-solid fa-video"
        }
      ]
    },
    {
      "title": "Contacts List",
      "description": "Full stack project using React and Flask with REST API.",
      "category": "fullstack",
      "image": "assat/imgs/projects/full/contact.png",
      "tech": ["React", "Flask", "REST API"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/contacts-list"
        },
        {
          "type": "demo",
          "url": "https://youtu.be/-yztVwBLu9s",
          "icon": "fa-solid fa-video"
        }
      ]
    },
    {
      "title": "House Price Prediction",
      "description": "Predict house prices using pandas, numpy and RandomForestRegressor.",
      "category": "ai",
      "image": "assat/imgs/projects/ai/house pricing.png",
      "tech": ["Python", "Pandas", "Scikit-learn"],
      "links": [
        {
          "type": "github",
          "url": "https://www.kaggle.com/code/ahmedsamir6788/notebook782879d008"
        }
      ]
    },
    {
      "title": "NLP Projects",
      "description": " explore core concepts and practical implementations in natural language processing. Each folder covers a specific topic with code and, where applicable, sample data or results.",
      "category": "ai",
      "image": "assat/imgs/projects/ai/nlp projects.png",
      "tech": ["transformers", "T5", "nltk","spacy"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/NLP-Project/"
        }
      ]
    },
    {
      "title": "Big Mac Index",
      "description": " A web-based visualization tool for The Economist's Big Mac Index, showing global price comparisons and purchasing power parity.",
      "category": "ai",
      "image": "assat/imgs/projects/ai/big mac.png",
      "tech": ["Flask", "Pandas", "matplotlib","sympy","ajax","Canvas"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/big_mac_index"
        },{
        "type": "demo",
        "url": "https://selfish-dedra-ahmedsamir3bass-a06d47e8.koyeb.app/",
        "icon":"fa-solid fa-arrow-up-right-from-square"
      }
      ]
    },
    {
      "title": "ODE Solver",
      "description": " A web application for solving Ordinary Differential Equations (ODEs) using numerical methods, built with Python and Flask.",
      "category": "ai",
      "image": "assat/imgs/projects/ai/ode solver.png",
      "tech": ["Flask", "Pandas", "matplotlib","sympy","Regex"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/ode-solver"
        },{
        "type": "demo",
        "url": "https://fat-tracey-ahmedsamir6788-2c22bae7.koyeb.app/",
        "icon":"fa-solid fa-arrow-up-right-from-square"
      }
      ]
    },
    {
      "title": "Order Management System",
      "description": "A Flask-based e-commerce application with product browsing, admin interface, and order management.",
      "category": "backend",
      "image": "assat/imgs/projects/full/order system.png",
      "tech": ["Flask", "SQLAlchemy", "Bootstrap", "HTML", "CSS"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/order-system"
        },
        {
          "type": "demo",
          "url": "https://youtu.be/EufpZDcrhhc",
          "icon": "fa-solid fa-video"
        }
      ]
    },
    {
      "title": " BIg Skills",
      "description": "Web app for skill management and job applications.",
      "category": "fullstack",
      "image": "assat/imgs/projects/full/bigskils.png",
      "tech": ["Flask", "SQLAlchemy", "HTML", "CSS", "Bootstrap"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/Skill_app_flask"
        }
      ]
    },
    {
      "title": "Social Media App",
      "description": "A social media application using Django REST framework and JWT for authentication.",
      "category": "fullstack",
      "image": "assat/imgs/projects/full/ur social media app.png",
      "tech": ["Django", "Django REST Framework", "CSS"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/social_media_app"
        }
      ]
    },
    {
      "title": "E-Commerce Chart",
      "description": "E-commerce chart using vanilla JavaScript and local storage.",
      "category": "frontend",
      "image": "assat/imgs/projects/frontend/ecommerce chart.png",
      "tech": ["JavaScript", "HTML", "CSS"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/e-commerce"
        },
        {
          "type": "demo",
          "url": "https://ahmedsamir45.github.io/e-commerce/",
          "icon":"fa-solid fa-arrow-up-right-from-square"
        }
      ]
    },
    {
      "title": "UR Store",
      "description": "Final front-end project with React in ITI.",
      "category": "frontend",
      "image": "assat/imgs/projects/frontend/ur store.png",
      "tech": ["React", "Bootstrap", "CSS"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/UR_Store"
        },
        {
          "type": "demo",
          "url": "https://ahmedsamir45.github.io/UR_Store",
          "icon":"fa-solid fa-arrow-up-right-from-square"
        }
      ]
    },
    {
      "title": "Notes App",
      "description": "A simple web app to login, register, logout, and manage notes.",
      "category": "backend",
      "image": "assat/imgs/projects/backend/Misr International Clinic Database.png",
      "tech": ["Flask", "SQLAlchemy", "Login Manager"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/Notes_flask"
        }
      ]
    },
    {
      "title": "Video API",
      "description": "This RESTful API allows users to create, retrieve, update, and delete video entries.",
      "category": "backend",
      "image": "assat/imgs/projects/backend/video api.png",
      "tech": ["Flask", "SQLAlchemy", "flask_restful"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/Video-API"
        }
      ]
    },
    {
      "title": "Blog Post API",
      "description": "This RESTful API allows users to create, retrieve, update, and delete video entries.",
      "category": "backend",
      "image": "assat/imgs/projects/backend/blog posts api.png",
      "tech": ["Django", "Django REST Framework"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/Blog-Post-API"
        }
      ]
    },
    {
      "title": "Misr International Clinic Database",
      "description": "This project sets up a relational SQL database for managing clinic employees and patients, with linked tables and basic queries.",
      "category": "backend",
      "image": "assat/imgs/projects/backend/Misr International Clinic Database.png",
      "tech": ["SQL"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/DATABASE-FOR-MISR-INTERNATIONAL-CLINIC"
        }
      ]
    },
    {
      "title": "El Badr Marble Database",
      "description": "This project sets up a relational SQL database for managing clinic employees and patients, with linked tables and basic queries.",
      "category": "backend",
      "image": "assat/imgs/projects/backend/el badr marble database.png",
      "tech": ["SQL"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/El_badr_marble_company_sql"
        }
      ]
    },
    {
      "title": "FreeCodeCamp Responsive design Projects",
      "description": "collection of html css projects of freecodecamp certification",
      "category": "frontend",
      "image": "assat/imgs/projects/frontend/responsive web desgin.png",
      "tech": ["HTML", "CSS"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/responsive-design-freecodecamp-projects"

        }
      ]
    },
    {
      "title": "Image Editor",
      "description": "Image filter editor using JavaScript.",
      "category": "frontend",
      "image": "assat/imgs/projects/frontend/image editor.png",
      "tech": ["JavaScript", "HTML", "CSS"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/Image-editor"
        },
        {
          "type": "demo",
          "url": "https://ahmedsamir45.github.io/Image-editor/",
          "icon":"fa-solid fa-arrow-up-right-from-square"
        }
      ]
    },
    {
      "title": "FreeCodeCamp Machine Learning Projects",
      "description": "A collection of 5 machine learning projects built as part of the freeCodeCamp assignment.",
      "category": "ai",
      "image": "assat/imgs/projects/ai/ML freecodecamp.png",
      "tech": ["Python", "Machine Learning", "Deep Learning"],
      "links": [
        {
          "type": "github",
          "url": "https://github.com/ahmedsamir45/freecodecamp_machinelearning_projects"
        }
      ]
    }
  ],
  "categories": [
    {
      "id": "all",
      "name": "All Projects",
      "icon": "fa-layer-group"
    },
    {
      "id": "backend",
      "name": "Backend & DB",
      "icon": "fa-server"
    },
    {
      "id": "frontend",
      "name": "Frontend & JS",
      "icon": "fa-code"
    },
    {
      "id": "fullstack",
      "name": "Full Stack",
      "icon": "fa-cubes"
    },
    
      {
        "id": "ai",
        "name": "AI & modeling",
        "icon": "fa-brain"
      }
    ],
    "styles": {
      "colors": {
        "background": "#12100E",
        "nav": "#30321C",
        "heading": "#6B654B",
        "hover": "#D4DF9E",
        "accent": "#4A4B2F"
      },
      "animations": {
        "cardEntry": "fadeInUp 0.6s ease forwards",
        "hoverEffect": "transform 0.3s ease, box-shadow 0.3s ease"
      }
    }
  }
  


document.addEventListener('DOMContentLoaded', function() {
    try {
        // Apply styles
        applyCustomStyles(projectData.styles);
        
        // Create tabs
        const tabsContainer = document.querySelector('.project-tabs');
        generateTabs(projectData.categories, tabsContainer);
        
        // Display projects
        const gallery = document.getElementById('projects-gallery');
        renderProjects(projectData.projects, gallery, 'all');
        
        // Set up tab navigation
        setupTabNavigation(projectData.projects, gallery);
        
    } catch (error) {
        console.error('Error:', error);
        showError(gallery);
    }
});

function applyCustomStyles(styles) {
    const root = document.documentElement;
    root.style.setProperty('--background-color', styles.colors.background);
    root.style.setProperty('--nav-color', styles.colors.nav);
    root.style.setProperty('--heading-color', styles.colors.heading);
    root.style.setProperty('--hover-heading', styles.colors.hover);
    root.style.setProperty('--addition-color', styles.colors.accent);
}

function generateTabs(categories, container) {
    container.innerHTML = '';
    
    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = 'project-tab';
        tab.dataset.category = category.id;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', 'false');
        tab.innerHTML = `<i class="fas ${category.icon}"></i> ${category.name}`;
        container.appendChild(tab);
    });
    
    // Activate the first tab by default
    if (categories.length > 0) {
        const firstTab = container.querySelector('.project-tab');
        firstTab.classList.add('active');
        firstTab.setAttribute('aria-selected', 'true');
    }
}

function renderProjects(projects, container, category) {
    container.innerHTML = '';
    
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);
    
    if (filteredProjects.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="no-projects">
                    <i class="fas fa-folder-open"></i>
                    <p>No projects in this category</p>
                </div>
            </div>
        `;
        return;
    }
    
    filteredProjects.forEach((project, index) => {
        createProjectCard(project, container, index);
    });
}

function createProjectCard(project, container, index) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';
    col.style.animationDelay = `${index * 0.1}s`;
    
    // Create project links
    const linksHTML = project.links.map(link => {
        const iconClass = link.icon || 
            (link.type === 'github' ? 'fab fa-github' : 'fas fa-external-link-alt');
        const linkText = link.type === 'github' ? 'Code' : 'Live';
        return `
            <a href="${link.url}" class="project-link ${link.type}-link" target="_blank" rel="noopener noreferrer">
                <i class="${iconClass}"></i> ${linkText}
            </a>
        `;
    }).join('');
    
    // Create tech badges
    const techHTML = project.tech.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    col.innerHTML = `
        <div class="project-card">
            <div class="project-img-container">
                <img class="project-img" src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">${techHTML}</div>
                <div class="project-links">${linksHTML}</div>
            </div>
        </div>
    `;
    
    container.appendChild(col);
}

function setupTabNavigation(projects, gallery) {
    const tabs = document.querySelectorAll('.project-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            
            // Display projects for the selected category
            renderProjects(projects, gallery, this.dataset.category);
        });
    });
}

function showError(container) {
    container.innerHTML = `
        <div class="col-12">
            <div class="no-projects error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Failed to load projects. Please try again later.</p>
            </div>
        </div>
    `;
}
