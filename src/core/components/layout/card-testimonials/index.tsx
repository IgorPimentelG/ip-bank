"use client";

import 'glider-js/glider.min.css';
import './glider-styles.css';

import { Quote } from '@/core/assets';
import Image from 'next/image';
import { FC, useState } from 'react';
import Glider from 'react-glider';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import Testimonials from '../../../../../public/data/testimonials.json';
import { SwitchButton } from '../../ui';
import { Button, Container, Content, Header } from './styles';

type SwitchType = 'INDIVIDUALS' | 'BUSINESSES';

export const CardTestimonials: FC = () => {

	const [data, setData] = useState(Testimonials.individuals);
	const [currentSwitch, setCurrentSwitch] = useState<SwitchType>('INDIVIDUALS');

	function handleSwitch() {
		const selectedType = currentSwitch === 'INDIVIDUALS' ? 'BUSINESSES' : 'INDIVIDUALS';
		const selectedData = selectedType === 'BUSINESSES' ? Testimonials.businesses : Testimonials.individuals;
		setData(selectedData);
		setCurrentSwitch(selectedType);
	}

	return (
		<Container>
			<Header>
				<div>
					<h3>Our <span>Testimonials</span></h3>
					<p>{`Discover how IPBank has transformed lives with innovative digital solutions and personalized customer
						service. See why our clients trust us for a secure and prosperous financial journey`}</p>
				</div>

				<SwitchButton
					labelLeft='For Individuals'
					labelRight='For Businesses'
					action={handleSwitch}
				/>
			</Header>

			<Glider
				draggable
				hasArrows
				rewind
				slidesToShow={3}
				slidesToScroll={1}
				iconLeft={(
					<Button>
						<HiOutlineArrowLeft />
					</Button>
				)}
				iconRight={(
					<Button>
						<HiOutlineArrowRight />
					</Button>
				)}
			>
				{data.map((item, index) => (
					<Content key={index}>
						<div />
						<div>
							<hr/>
								<Image src={Quote} alt='Quote Icon' />
							<hr/>
						</div>

						<p>{item.message}</p>
						<span>{item.name}</span>
					</Content>
				))}
			</Glider>
		</Container>
	);
}
