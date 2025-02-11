import {ComponentPropsWithoutRef} from 'react';

type Props = {
    textBtn: string
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
    const {textBtn, ...rest} = props;

    return (
        <button {...rest}>{textBtn}</button>
    )
}