import { FC, useState } from 'react';
import { Container } from './styles';
import { Button } from '@/core/components/ui/button';

type Props = {
	labelLeft: string;
	labelRight: string;
	action: () => void;
}

type Selector = 'RIGHT' | 'LEFT';

export const SwitchButton: FC<Props> = ({ labelLeft, labelRight, action }) => {

	const [selector, setSelector] = useState<Selector>('LEFT');

	function handleSelector() {
		setSelector(state => state === 'RIGHT' ? 'LEFT' : 'RIGHT');
		action();
	}

	return (
		<Container>
			<Button
				label={labelLeft}
				action={handleSelector}
				type={selector === 'LEFT' ? 'PRIMARY' : 'INLINE'}
			/>
			<Button
				label={labelRight}
				action={handleSelector}
				type={selector === 'RIGHT' ? 'PRIMARY' : 'INLINE'}
			/>
		</Container>
	);
}
