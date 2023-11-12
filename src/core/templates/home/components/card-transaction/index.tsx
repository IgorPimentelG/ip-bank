import { Card, Badge } from './styles';

import { FaDollarSign, FaEuroSign, FaEthereum } from 'react-icons/fa';
import { FaBitcoinSign } from 'react-icons/fa6';

export const CardTransaction = () => {
	return (
		<Card>

			<div>
				<span>Your Transactions</span>

				<span>Money Exchange</span>

				<div>
					<div>
						<div>
							<span>Indian Rupees</span>
						</div>
					</div>
					<div>

						<div>
							<span>United States Dollar</span>
						</div>
					</div>
					<div>5,0000</div>
					<div>12.00</div>
				</div>

				<span>Exchange</span>
			</div>

			<Badge>
				<span>Supported Currency</span>
				<div>
					<div><FaDollarSign/></div>
					<div><FaEuroSign/></div>
					<div><FaBitcoinSign/></div>
					<div><FaEthereum/></div>
				</div>
			</Badge>
		</Card>
	);
}
