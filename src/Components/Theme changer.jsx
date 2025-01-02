import React, { useState } from "react";

export const Theme_changer = () => {
    const [theme, setTheme] = useState('light')

    const Themes = {
        light: {
            background: "lightpink",
            color: 'black'
        },
        dark: {
            background: "black",
            color: 'white'
        },
        blue: {
            background: 'darkblue',
            color: '#fff'
        }
    }

    return (
        <divs style={{
            width: '100%',
            height: '100vh',
            background: Themes[theme].background,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: Themes[theme].color,
            flexDirection: "column",
            gap: 20,
        }}>
            <h1>Theme Changer</h1>

            {/* <h3>{theme} mode</h3> */}
            <h2>{theme.charAt(0).toUpperCase() + theme.slice(1)} mode</h2>

            <button style={{
                padding: '10px',
                fontSize: '20px',
                background: 'lightgreen',
                borderRadius: '10px',
            }}
                onClick={() => {
                    setTheme((prevTheme) =>
                        prevTheme === 'light' ? 'dark' : prevTheme === 'dark' ? 'blue' : 'light'
                    )
                }}>
                <b>Toggle</b>
            </button>
        </divs>
    )
}