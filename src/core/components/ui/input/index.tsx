"use client";

import { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Container } from './styles';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: FC<Props> = ({ ...rest }) => {

	const [showText, setShowText] = useState(false);
	const isSecure = rest.type === 'password';

	return (
		<Container>
			<input {...rest} type={isSecure && showText ? 'text' : rest.type} />
			<button onClick={() => setShowText(state => !state)}>
				{isSecure && (
					<>
						{showText ? <BsEyeSlashFill /> : <BsEyeFill />}
					</>
				)}
			</button>
		</Container>
	);
}
