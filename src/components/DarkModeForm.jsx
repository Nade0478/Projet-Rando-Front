import React, {useState} from 'react';
import './DarkModeForm.css';

function DarkModeForm() {
    const [darkMode, setDarkMode] = useState(false);

    // Appliquer la classe au body
    document.body.className = darkMode ? 'dark' : 'light';

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            Mode sombre
        </button>
    );
}

export default DarkModeForm;