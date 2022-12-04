import { Link } from "react-router-dom";


function App() {
    return (
        <div className="min-h-screen w-full bg-dark text-orange-dark">
            <nav className="flex justify-between sticky top-0 w-full p-4 bg-gray-dark-600/60">
                <Link to="/" className="text-4xl font-black">todo.app</Link>
                <Link to="/" className="flex items-center px-4 rounded-lg bg-orange-dark hover:bg-orange-light text-dark text-lg font-bold transition-colors duration-500">signUp</Link>
            </nav>
            <main>
                <section className="py-16 px-8 text-center">
                    <h1>
                        <span className="material-symbols-outlined text-8xl md:text-9xl font-extralight">
                            check_circle
                        </span>
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold transition-[font-size] duration-500">welcome to todo.app</h2>
                    <p className="pt-8 mx-auto px-8 max-w-2xl text-xl">
                        Your very own todo app, built with react <i class="fab fa-react"></i> and tailwindcss.
                        Helping you to build your daily routine and get things done on time.
                        <br /><br />
                        We believe in transparency and simplicity, so we made this app open source.
                        Which gives you the freedom to use it as you wish.
                        Or completely resdesign it to your liking.
                        <br /><br />
                        Or even better help us improve our app and become an open source contributor.
                        You can visit the github repository here <i className="fal fa-long-arrow-right"></i>&nbsp;
                        <a href="https://github.com/CinematicGenius007/to-do-app" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> <span className="font-black hover:underline underline-offset-4">todo.app</span></a>
                    </p>
                    <h1 className="pt-24 pb-12 flex justify-center items-center gap-10 md:gap-16">
                        <i className="fab fa-node text-7xl md:text-9xl transition-[font-size] duration-500"></i>
                        <span className="text-4xl md:text-6xl transition-[font-size] duration-500">+</span>
                        <i className="fad fa-database text-5xl md:text-7xl transition-[font-size] duration-500"></i>
                    </h1>
                    <h2 className="pt-4 text-4xl md:text-6xl font-bold transition-[font-size] duration-500">todo.api</h2>
                    <p className="pt-8 mx-auto px-8 max-w-2xl text-xl">
                        We also have a nodejs backend for this app.
                        Which is also open source and can be found on github.
                        And we would love you to help us improve that as well.
                        <br /><br />
                        We have used mysql as our database but you can pretty much configure it your needs.
                        <br /><br />
                        We don't have a live demo for this app yet with the backend but you can pretty much create a local server and test it out yourself.
                        But we do have a live demo for the frontend and you can test that out right now.
                        We are planning to release the api as well very soon so stay tuned for that.
                        <br /><br />
                        You can visit the github repository here <i className="fal fa-long-arrow-right"></i>&nbsp;
                        <a href="https://github.com/CinematicGenius007/to-do-api" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> <span className="font-black hover:underline underline-offset-4">todo.api</span></a>
                    </p>
                </section>
            </main>
            <footer className="flex flex-col justify-center items-center gap-8 py-8 bg-gray-dark-700">
                <p className="text-lg font-bold">Made with <i className="fas fa-heart text-red-500"></i> by <a className="hover:underline underline-offset-4" href="https://github.com/CinematicGenius007" target="_blank" rel="noreferrer">CinematicGenius007</a></p>
                <p className="pt-8 mx-auto px-8 max-w-2xl text-justify">
                    Interesting story about the font used here...
                    <br /><br />
                    It's called 'Liberation Mono' and of course it's free and open source font used in linux based systems.
                    But I first noticed while using Google Docs and I was like "hey this font looks pretty cool". 
                    Let's use this font for any upcoming project if it is free to use and as later it turned out it was.
                    <br /><br />
                    Now what you have to remember is by that time I had switched to Fedora (a linux distro), specifically Ultramarine which is fedora based, you guys should definitely check it out (OMG the gestures).
                    Now the reason this detail is important is because of the next part of the story.
                    <br /><br />
                    So when I got this project, I remembered that font and I was like "hey I should use that font for this project". 
                    So I searched online for the font that was given in the google docs which was showing 'Courier New'. 
                    So naturally I downloaded that and I didn't realize that it was not the font that I wanted until I tried using it.
                    <br /><br />
                    And I was like "okay this is awkward" because google docs is showing something else and on my system it's something else.
                    I checked the network tab of google docs, nope nothing there. There was no mention of this font.
                    I asked for help from my friends and they all looked in the matter and 2 hours into the web searching no progress whatsoever. 
                    Online font checkers and everything, nothing. 
                    <br /><br />
                    Then one of my friend suggested thet if this font is not in the network tabs that means it is a system font.
                    But if other people are getting different results then it is possible that because of non availability of the said font 'Courier New', google docs is going on to a fallback.
                    Like duh! I should have thought of that but didn't. Hey that's what are friends for right!
                    <br /><br />
                    So the moral of the story is that you should make good friends and if you have linux then you should probably search for system fonts first in this situation or you'll end up going on google forums.
                    <br /><br />
                    P.S. being a programmer is fun and having programmer friends is even more fun. 
                    Btw these are my friends who helped me in finding this font.&nbsp;
                    <a className="hover:underline underline-offset-4" href="https://github.com/sumqwerty" target="_blank" rel="noreferrer">Sumqwerty</a>,&nbsp;
                    <a className="hover:underline underline-offset-4" href="https://github.com/nandinisharma225" target="_blank" rel="noreferrer">NandiniSharma225</a> &&nbsp; 
                    <a className="hover:underline underline-offset-4" href="https://github.com/UjjwalSk" target="_blank" rel="noreferrer">UjjwalSk</a>, please go and check their profile.
                    <br /><br />
                    <span className="italic font-bold">CinematicGenius007</span>
                </p>
            </footer>
        </div>
    );
}

export default App;