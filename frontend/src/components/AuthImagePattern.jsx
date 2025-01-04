const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">

            <div className="max-w-md text-center">
                <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className=" h-32 w-32">
                        <svg enableBackground="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" fill="#77b3d4" r="32" /><path d="m52 32c0-9.9-9-18-20-18s-20 8.1-20 18c0 9.6 8.3 17.4 18.8 17.9.7 3.7 1.2 6.1 1.2 6.1s5-3 9.6-8.2c6.2-3.1 10.4-9 10.4-15.8z" fill="#231f20" opacity=".2" /><path d="m49 28.8c0 15-17 25.2-17 25.2s-9.4-42 0-42 17 7.5 17 16.8z" fill="#fff" /><ellipse cx="32" cy="30" fill="#fff" rx="20" ry="18" /><g fill="#4f5d73"><circle cx="32" cy="30" r="2" /><circle cx="40" cy="30" r="2" /><circle cx="24" cy="30" r="2" /></g></svg>

                    </div>
                    <div className=" h-32 w-32">
                        <svg enableBackground="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" fill="#77b3d4" r="32" /><path d="m52 32c0-9.9-9-18-20-18s-20 8.1-20 18c0 9.6 8.3 17.4 18.8 17.9.7 3.7 1.2 6.1 1.2 6.1s5-3 9.6-8.2c6.2-3.1 10.4-9 10.4-15.8z" fill="#231f20" opacity=".2" /><path d="m49 28.8c0 15-17 25.2-17 25.2s-9.4-42 0-42 17 7.5 17 16.8z" fill="#fff" /><ellipse cx="32" cy="30" fill="#fff" rx="20" ry="18" /><g fill="#4f5d73"><circle cx="32" cy="30" r="2" /><circle cx="40" cy="30" r="2" /><circle cx="24" cy="30" r="2" /></g></svg>

                    </div>
                    <div className=" h-32 w-32">
                        <svg enableBackground="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" fill="#77b3d4" r="32" /><path d="m52 32c0-9.9-9-18-20-18s-20 8.1-20 18c0 9.6 8.3 17.4 18.8 17.9.7 3.7 1.2 6.1 1.2 6.1s5-3 9.6-8.2c6.2-3.1 10.4-9 10.4-15.8z" fill="#231f20" opacity=".2" /><path d="m49 28.8c0 15-17 25.2-17 25.2s-9.4-42 0-42 17 7.5 17 16.8z" fill="#fff" /><ellipse cx="32" cy="30" fill="#fff" rx="20" ry="18" /><g fill="#4f5d73"><circle cx="32" cy="30" r="2" /><circle cx="40" cy="30" r="2" /><circle cx="24" cy="30" r="2" /></g></svg>

                    </div>
                    

                </div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-base-content/60">{subtitle}</p>
            </div>
        </div>
    );

};

export default AuthImagePattern;
