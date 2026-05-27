function changeLanguage() {
    const language = document.getElementById('language-selector').value;
    const elements = {
       /* title: document.getElementById('title'),
        description: document.getElementById('description'),*/
       /* actionButton: document.getElementById('action-button'),*/
		link1: document.getElementById('link1'),
		link2: document.getElementById('link2'),
		link3: document.getElementById('link3'),
		link4: document.getElementById('link4'),
		link5: document.getElementById('link5'),
		link6: document.getElementById('link6'),
		link7: document.getElementById('link7'),
		link8: document.getElementById('link8'),
		link9: document.getElementById('link9'),
		link10: document.getElementById('link10'),
		link11: document.getElementById('link11'),
		link12: document.getElementById('link12'),
		link13: document.getElementById('link13'),
		link14: document.getElementById('link14'),
		link15: document.getElementById('link15'),
		link16: document.getElementById('link16'),
		link17: document.getElementById('link17'),
		about1: document.getElementById('about1'),
		aboutt: document.getElementById('aboutt'),
		pmh: document.getElementById('pmh'),
		pmm: document.getElementById('pmm'),
		cmh: document.getElementById('cmh'),
		cmm: document.getElementById('cmm'),
		annouce: document.getElementById('annouce'),
		annouce1: document.getElementById('annouce1'),
		annouce2: document.getElementById('annouce2'),
		activit: document.getElementById('activit'),
		activit1: document.getElementById('activit1'),
		activit2: document.getElementById('activit2'),
		projh: document.getElementById('projh'),
		proj1h: document.getElementById('proj1h'),
		proj1des: document.getElementById('proj1des'),
		proj1h: document.getElementById('proj2h'),
		proj1des: document.getElementById('proj2des'),
		proj1h: document.getElementById('proj3h'),
		proj1des: document.getElementById('proj3des'),
		proj1h: document.getElementById('proj4h'),
		proj1des: document.getElementById('proj4des'),
		proj1h: document.getElementById('proj5h'),
		proj1des: document.getElementById('proj5des'),
		proj1h: document.getElementById('proj6h'),
		proj1des: document.getElementById('proj6des'),
		proj1h: document.getElementById('proj7h'),
		proj1des: document.getElementById('proj1des'),
		proj1h: document.getElementById('proj8h'),
		proj1des: document.getElementById('proj8des'),
    };

    for (const [key, element] of Object.entries(elements)) {
        element.textContent = translations[language][key];
    }

    document.documentElement.lang = language;
}

// Initialize with English
changeLanguage();