import { Link } from "react-router-dom";


const Main = () => (
    <>
        <section className="py-16 px-8 text-center">
            <h1>
                <span className="material-symbols-outlined text-8xl md:text-9xl font-extralight">
                    check_circle
                </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold transition-[font-size] duration-500">welcome to todo.app</h2>
            <p className="pt-8 mx-auto md:px-8 max-w-2xl text-xl">
                Your very own todo app, built with react <i className="fab fa-react"></i> and tailwindcss.
                Helping you to build your daily routine and get things done on time.
                <br /><br />
                We believe in transparency and simplicity, so we made this app open source.
                Which gives you the freedom to use it as you wish.
                Or completely resdesign it to your liking.
                <br /><br />
                Or even better help us improve our app and become an open source contributor.
                You can visit the github repository here <i className="fal fa-long-arrow-right"></i>&nbsp;
                <a href="https://github.com/CinematicGenius007/to-do-app" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> <span className="font-black underline underline-offset-4 hover:text-green-dark hover:decoration-green-dark">todo.app</span></a>
            </p>
            <h1 className="pt-24 pb-12 flex justify-center items-center gap-10 md:gap-16">
                <i className="fab fa-node text-7xl md:text-9xl transition-[font-size] duration-500"></i>
                <span className="text-4xl md:text-6xl transition-[font-size] duration-500">+</span>
                <i className="fad fa-database text-5xl md:text-7xl transition-[font-size] duration-500"></i>
            </h1>
            <h2 className="pt-4 text-4xl md:text-6xl font-bold transition-[font-size] duration-500">todo.api</h2>
            <p className="pt-8 mx-auto md:px-8 max-w-2xl text-xl">
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
                <a href="https://github.com/CinematicGenius007/to-do-api" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> <span className="font-black underline underline-offset-4 hover:text-green-dark hover:decoration-green-dark">todo.api</span></a>
            </p>
        </section>
        <footer className="flex flex-col justify-center items-center gap-8 py-8 px-8 bg-gray-dark-700">
            <p className="text-lg font-bold">Made with <i className="fas fa-heart text-red-500"></i> by <a className="underline underline-offset-4 hover:text-green-dark hover:decoration-green-dark" href="https://github.com/CinematicGenius007" target="_blank" rel="noreferrer">CinematicGenius007</a></p>
            <Link to="story" className="hover:text-blue-dark"><span className="underline underline-offset-4">Interesting story about the font used here</span> ... <span className="text-xs">continued on page story</span></Link>
        </footer>
    </>
);

export default Main;