import React from 'react';

import * as S from './styles';

type ButtonProps = {
	children: JSX.Element
	backgroundColor: string
}

const Button = ({ children, backgroundColor }: ButtonProps) => {
	return (
		<S.Container backgroundColor={backgroundColor}>
			{children}
		</S.Container>
	);
}

export default Button;