export default function TabButtons({ children, isSelected, ...props }) {
    console.log("tab button execute.....");
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
};

