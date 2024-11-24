
interface ButtonProps {
    id: string;
    title: string;
    rightIcon?: any;
    leftIcon?: any;
    containerClass: string;
}
export const Button = ({id, rightIcon, leftIcon, title, containerClass }: ButtonProps) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
        >
            {leftIcon}
            <span className={"relative inline-flex overflow-hidden font-general text-xs uppercase"}>
                <p>{title}</p>
            </span>
            {rightIcon }
        </button>
    )
}
