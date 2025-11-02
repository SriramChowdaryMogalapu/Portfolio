// Comprehensive JSON-LD structured data for the portfolio website
export const websiteStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": "https://sriram-chowdary.netlify.app/#website",
            "url": "https://sriram-chowdary.netlify.app/",
            "name": "Sriram Chowdary Mogalapu's Portfolio",
            "description": "Professional portfolio showcasing full-stack development projects, data solutions, and technical expertise",
            "publisher": {
                "@id": "https://sriram-chowdary.netlify.app/#person"
            },
            "potentialAction": [
                {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://sriram-chowdary.netlify.app/?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                }
            ],
            "inLanguage": "en-US"
        },
        {
            "@type": "Person",
            "@id": "https://sriram-chowdary.netlify.app/#person",
            "name": "Sriram Chowdary Mogalapu",
            "url": "https://sriram-chowdary.netlify.app/",
            "image": {
                "@type": "ImageObject",
                "url": "https://sriram-chowdary.netlify.app/photo1.JPG",
                "width": 400,
                "height": 400
            },
            "description": "Associate Data Solution Architect at Piramal Finance, Full Stack Developer, and Data Science Enthusiast with expertise in MERN stack, cloud technologies, and competitive programming",
            "jobTitle": "Associate Data Solution Architect",
            "worksFor": {
                "@type": "Organization",
                "name": "Piramal Finance",
                "url": "https://www.piramalfinance.com/"
            },
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "National Institute of Technology Raipur",
                "sameAs": "https://www.nitrr.ac.in/"
            },
            "knowsAbout": [
                "Full Stack Development",
                "React.js",
                "Node.js",
                "MongoDB",
                "Express.js",
                "Python",
                "Flask",
                "Data Science",
                "Machine Learning",
                "AWS",
                "Azure",
                "Power BI",
                "Competitive Programming",
                "JavaScript",
                "TypeScript"
            ],
            "hasCredential": [
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Bachelor of Technology in Computer Science Engineering",
                    "educationalLevel": "Bachelor's Degree",
                    "credentialCategory": "degree"
                }
            ],
            "sameAs": [
                "https://github.com/SriramChowdaryMogalapu",
                "https://www.linkedin.com/in/sriram-chowdary-mogalapu-899500185/",
                "https://leetcode.com/u/mSrc",
                "https://www.codechef.com/users/sriram333"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "professional",
                "email": "sriramchowdary2000@gmail.com",
                "areaServed": "Global",
                "availableLanguage": "English"
            }
        },
        {
            "@type": "WebPage",
            "@id": "https://sriram-chowdary.netlify.app/#homepage",
            "url": "https://sriram-chowdary.netlify.app/",
            "name": "Home - Sriram Chowdary Mogalapu",
            "isPartOf": {
                "@id": "https://sriram-chowdary.netlify.app/#website"
            },
            "about": {
                "@id": "https://sriram-chowdary.netlify.app/#person"
            },
            "description": "Welcome to Sriram Chowdary Mogalapu's professional portfolio - showcasing expertise in full-stack development, data solutions, and innovative projects",
            "breadcrumb": {
                "@id": "https://sriram-chowdary.netlify.app/#breadcrumb"
            },
            "inLanguage": "en-US"
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://sriram-chowdary.netlify.app/#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://sriram-chowdary.netlify.app/"
                }
            ]
        }
    ]
};

export const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sriram Chowdary Mogalapu - Portfolio",
    "url": "https://sriram-chowdary.netlify.app/",
    "logo": {
        "@type": "ImageObject",
        "url": "https://sriram-chowdary.netlify.app/logo.webp"
    },
    "foundingDate": "2023",
    "founder": {
        "@type": "Person",
        "name": "Sriram Chowdary Mogalapu"
    },
    "description": "Professional portfolio website showcasing full-stack development expertise, data solutions, and innovative projects by Sriram Chowdary Mogalapu",
    "sameAs": [
        "https://github.com/SriramChowdaryMogalapu",
        "https://www.linkedin.com/in/sriram-chowdary-mogalapu-899500185/"
    ]
};