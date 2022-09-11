import React from 'react'
import './footer.css'

export default function CreditFooter() {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div
                    className="subFooterElement d-flex align-content-center justify-content-between sm:d-flex-row flex-col bg-dark text-white p-2">
                    <p id="credit">Designed 💖 and Created 🔮 by Hardik Desai</p>
                    <span style={{ "textDecoration": "none", "listStyle": "none" }}
                        className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a style={{ "textDecoration": "none", "listStyle": "none" }} href="https://www.instagram.com/imhardikdesai/"
                            className="text-gray-500">
                            <img className="footerIcon"
                                src="https://user-images.githubusercontent.com/87645745/184292206-ad885ce2-099d-42d4-8fe6-bd7cf0731eaa.png"
                                alt="icon" />
                        </a>
                        <a style={{ "textDecoration": "none", "listStyle": "none" }} href="https://t.snapchat.com/njT4fnpw"
                            className="text-gray-500">
                            <img className="footerIcon"
                                src="https://user-images.githubusercontent.com/87645745/184292208-24c7b912-8b40-4362-9ba0-cc83fe10f87c.png"
                                alt="icon" />
                        </a>
                        <a style={{ "textDecoration": "none", "listStyle": "none" }} href="https://github.com/imhardikdesai"
                            className="text-gray-500">
                            <img style={{ "filter": "invert(100)" }} className="footerIcon"
                                src="https://user-images.githubusercontent.com/87645745/184292199-20a5e507-25a5-4543-a1e2-2ef14a5fa1c1.png"
                                alt="icon" />
                        </a>
                        <a style={{ "textDecoration": "none", "listStyle": "none" }} href="https://www.linkedin.com/in/desai-hardik-6b239b213/"
                            className="text-gray-500">
                            <img className="footerIcon"
                                src="https://user-images.githubusercontent.com/87645745/184292212-8220b44e-051f-4426-9e75-6fe5e4c33e8b.png"
                                alt="icon" />
                        </a>
                    </span>
                </div>

            </footer>
        </>
    )
}
