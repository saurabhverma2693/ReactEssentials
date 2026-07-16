export default function TabButtons({ children, onSelect, isSelected }) {
    console.log("tab button execute.....");
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
};

