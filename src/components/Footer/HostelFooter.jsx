import React from 'react'
import './footer.css'

export default function HostelFooter() {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div
                    className="subFooterElement d-flex align-content-center justify-content-between sm:d-flex-row flex-col bg-light text-black p-2">
                    <p id="credit">&copy;2022 &nbsp; G.M. Vanani 'niru' PATEL BOARDING &nbsp;- All Rights Reserved</p>
                    <span style="text-decoration: none; list-style: none;"
                        className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a style="text-decoration: none; list-style: none;"
                            href="https://instagram.com/niru_patel_boarding_group?igshid=YmMyMTA2M2Y=" className="text-gray-500">
                            <img className="footerIcon"
                                src="https://user-images.githubusercontent.com/87645745/184292206-ad885ce2-099d-42d4-8fe6-bd7cf0731eaa.png"
                                alt="icon" />
                        </a>
                        <a style="text-decoration: none; list-style: none;"
                            href="https://www.facebook.com/Patel-Boarding-209098259174180/" className="text-gray-500">
                            <img className="footerIcon"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
                                alt="icon" />
                        </a>
                    </span>
                </div>

            </footer>
        </>
    )
}
