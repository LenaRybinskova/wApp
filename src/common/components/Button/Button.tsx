import {ComponentPropsWithoutRef} from 'react';

type Props = {
    children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
    const {children, ...rest} = props;

    return (
        <button {...rest}>{children}</button>
    )
}