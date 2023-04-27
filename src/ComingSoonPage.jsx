import React, { useRef, useState } from "react";
import { FormButton } from "./components/FormButton";
import { IconError } from "./components/IconError";

export const ComingSoonPage = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = ({ target }) => {
        setEmail(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(email);

        const emailValue = email;

        if (emailValue === "" || !emailValue.includes("@")) {
            setIsValid(!isValid);
            console.log("Please enter a valid email");
            return;
        }

        setEmail(emailValue);
        setIsValid(isValid);
    };

    return (
        <div className="backgrd xl:bg-[url('../images/bg-pattern-desktop.svg')] xl:flex xl:w-[100%] xl:items-center xl:justify-evenly xl:rounded-3xl xl:border-desaturated-red border xl:border">
            <div className="xl:ml-28 xl:flex xl:flex-col">
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
                    <picture>
                        <img
                            src="./images/hero-mobile.jpg"
                            alt="woman looking the camera"
                            className="h-auto w-screen xl:hidden"
                        />
                    </picture>
                </section>
                <main className="mt-8 flex flex-col items-center justify-center px-5 py-2 xl:items-start">
                    <div className="my-8 text-center xl:w-[50%] xl:text-left ">
                        <h1 className="mb-8 text-5xl font-light uppercase tracking-[0.7rem] text-desaturated-red xl:text-6xl xl:tracking-[0.9rem]">
                            we're{" "}
                            <span className="font-semibold text-dark-grayish-red xl:font-normal">
                                coming soon
                            </span>
                        </h1>
                        <p className=" text-base text-desaturated-red">
                            Hello fellow shoppers! We're currently building our
                            new fashion store. Add your email below to stay
                            up-to-date with announcements and our launch deals.
                        </p>
                    </div>
                    <form className="relative mb-16 flex w-80 flex-col justify-center xl:w-[50%]">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className={`w-[100%] rounded-3xl border border-desaturated-red bg-inherit p-3 pl-6 placeholder-desaturated-red placeholder-opacity-50 outline-none ${!isValid && 'border-red-500'} `}
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <span>
                            {
                               !isValid && <IconError />
                            }
                        </span>
                        <span>
                            <FormButton onClick={handleSubmit} />
                        </span>
                        <div>
                            {!isValid && (
                                <p className="mt-2 text-red-500 text-xs ml-6">
                                    Please provide a valid email
                                </p>
                            )}
                        </div>
                    </form>
                </main>
            </div>
            <picture>
                <img
                    src="./images/hero-desktop.jpg"
                    alt="woman looking the camera"
                    className="hidden xl:block xl:rounded-r-3xl"
                />
            </picture>
        </div>
    );
};
