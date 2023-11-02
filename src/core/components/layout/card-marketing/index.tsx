"use client";

import { Button } from '@/core/components/ui';
import { FC } from 'react';
import { Container, Content, Title } from './styles';
import { Abstract2 } from '@/core/assets';
import Image from 'next/image';

type Props = {
	title: string;
	highlightedTitle: string;
	description: string;
	btnLabel: string;
	action: () => void;
}

export const CardMarketing: FC<Props> = ({
	title,
	highlightedTitle,
	description,
	btnLabel,
	action,
}) => {
	return (
		<Container>
			<Image src={Abstract2} alt='' />
			<Content>
				<Title>{title} <span>{highlightedTitle}</span></Title>
				<p>{description}</p>
			</Content>
			<div>
				<Button
					label={btnLabel}
					action={action}
				/>
			</div>
		</Container>
	);
}
