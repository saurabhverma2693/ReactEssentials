export default function TabButtons({ children, onSelect, isSelected }) {
    console.log("tab button execute.....");
    return (
        <li>
            {/* <button className="active" onClick={onSelect}>{children}</button> */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
};



// export default function TabButtons({children}){
//     function handleClick(){
//         console.log("Hello World!!!!!!");
//     }
//     return (
//         <li>
//             <button onClick={handleClick}>{children}</button>
//         </li>
//     );
// };



// export default function TabButtons(props){
//     return (
//         <li>
//             <button>{props.children}</button>
//         </li>
//     );
// };

