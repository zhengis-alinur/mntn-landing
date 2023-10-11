const Step = ({ reverse, title, number, subtitle, text, img }) => {
    return (
        <div className={`w-full flex gap-10 justify-between items-center md:flex-row flex-col ${reverse && 'flex-row-reverse'}`}>
            <div className="relative flex flex-col gap-5 md:w-1/2">
                <span className="absolute left-[-50px] top-[-50px] text-9xl opacity-20">{number}</span>
                <div className="flex items-center gap-3">
                    <div className=" w-12 border-b-2 border-accent" />
                    <h3>{subtitle}</h3>
                </div>
                <h1 className="text-5xl font-georgia w-3/4">{title}</h1>
                <p>{text}</p>
            </div>
            <img className="md:w-1/3" src={img} />
        </div>
    );
};

export default Step;
