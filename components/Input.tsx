interface InputProps{
    placeholder?:string;
    type?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input = ({placeholder, type, value, disabled, onChange}: InputProps) => {
    return(
    <input 
    disabled={disabled}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    type={type}

    className="
    w-full
    p-4
    text-lg
    border-2
    bg-black
    border-neutral-800
    rounded-md
    outline-none
    text-white
    focus:border-2
    focus:border-white
    transition
    disabled:bg-neutral-900
    disabled:obacity-70
    disabled:cursor-not-allowed 
    "
    />)
}

export default Input;