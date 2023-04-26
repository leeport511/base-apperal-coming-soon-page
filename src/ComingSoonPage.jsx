import React from "react";
import { FormButton } from "./components/FormButton";

export const ComingSoonPage = () => {
    return (
        <div className="backgrd xl:flex xl:items-center xl:justify-evenly xl:w-[100%]">
            <div className="xl:flex xl:flex-col xl:ml-28">
                <section className="xl:w-[60%]">
                    <header className="p-8">
                        <picture>
                            <img
                                src="./images/logo.svg"
                                alt="logo"
                                className="w-28"
                            />
                        </picture>
                    </header>
                    <picture >
                        <img
                            src="./images/hero-mobile.jpg"
                            alt="woman looking the camera"
                            className="h-auto w-screen xl:hidden"
                        />
                    </picture>
                </section>
                <main className="mt-8 flex flex-col items-center justify-center px-5 py-2 xl:items-start">
                    <div className="my-8 text-center xl:text-left xl:w-[50%] ">
                        <h1 className="mb-8 text-5xl font-light uppercase tracking-[0.7rem] text-desaturated-red xl:tracking-[0.9rem]">
                            we're{" "}
                            <span className="font-semibold text-dark-grayish-red">
                                coming soon
                            </span>
                        </h1>
                        <p className=" text-base text-desaturated-red">
                            Hello fellow shoppers! We're currently building our
                            new fashion store. Add your email below to stay
                            up-to-date with announcements and our launch deals.
                        </p>
                    </div>
                    <form className="relative flex w-80 items-center justify-center mb-16 xl:w-[50%]">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-[100%] rounded-3xl border border-desaturated-red bg-inherit p-3 pl-6 placeholder-desaturated-red placeholder-opacity-50 outline-none"
                        />
                        <span>
                            <FormButton />
                        </span>
                    </form>
                </main>
            </div>
            <picture>
                <img
                    src="./images/hero-desktop.jpg"
                    alt="woman looking the camera"
                    className="hidden xl:block"
                />
            </picture>
        </div>
    );
};
