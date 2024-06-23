const navbar = [
    { id: 1, title: "Home" },
    { id: 2, title: "Clothings" },
    { id: 3, title: "Men's wear" },
];
export default function BreadCrumb() {
    return (
        <div className="flex gap-x-[6px] py-[20px]">
            {navbar.map((item: any) => (
                <div key={item.id} className="flex items-center">
                    <span className="text-[#8B96A5] font-normal">
                        {item.title}
                    </span>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.08748 5L6.91248 6.175L10.7291 10L6.91248 13.825L8.08748 15L13.0875 10L8.08748 5Z"
                            fill="#8B96A5"
                        />
                    </svg>
                </div>
            ))}
            <span className="text-[#8B96A5] font-normal">Summer clothing</span>
        </div>
    );
}
