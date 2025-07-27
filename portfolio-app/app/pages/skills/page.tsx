
const skills = [
    {
        title: "HTML",
        image: "/html.svg"
    },
    {
        title: "Javascript",
        image: "/js.svg"
    },
    {
        title: "React Js",
        image: "/react.svg"
    },
    {
        title: "Tailwind Css",
        image: "/tailwind.svg"
    },
    {
        title: "Next Js",
        image: "/next.svg"
    },
    {
        title: "Github",
        image: "/github.svg"
    },
    {
        title: "C",
        image: "/c.svg"
    },
    {
        title: "C++",
        image: "/cpp.svg"
    },
    {
        title: "Python",
        image: "/python.svg"
    },
];


export default function page() {
    return (
        <>
            <h1 className="text-2xl font-bold underline px-10 mt-10">Skills</h1>
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-10 h-[100%] p-10">
                {skills.map((skill) => (
                    <div className="p-2 grid place-items-center">
                        <img className="h-[8rem] w-[9rem] transition hover:scale-108" src={skill.image} alt="loading.." />
                        <span>{skill.title} </span>
                    </div>
                ))}

            </div>
        </>
    )
}