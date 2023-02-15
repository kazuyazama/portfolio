import { ComponentProps, forwardRef, MutableRefObject, RefObject } from "react";

type Props = {
    inputRef:RefObject<HTMLInputElement>
} & ComponentProps<'input'>

const Input = ({inputRef,...props }:Props) => {
    //...propsはinputRef以外のその他全部
    return (
        <input
        {...props}
        ref={inputRef}
          className=" form-input h-12 rounded-md bg-gray-100  focus:border-primary-sky "
        />
    );
}

export default Input;