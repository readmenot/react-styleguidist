import React from 'react';
import ComponentsList from './ComponentsList';
import { ComponentsListRenderer } from './ComponentsListRenderer';

it('should set the correct href for items', () => {
	const components = [
		{
			visibleName: 'Button',
			name: 'Button',
			slug: 'button',
		},
		{
			visibleName: 'Input',
			name: 'Input',
			slug: 'input',
		},
	];

	const actual = shallow(<ComponentsList items={components} classes={{}} />);
	expect(actual).toMatchSnapshot();
});

it('should set the correct href for items when isolated links should be used', () => {
	const components = [
		{
			visibleName: 'Button',
			name: 'Button',
			slug: 'button',
		},
		{
			visibleName: 'Input',
			name: 'Input',
			slug: 'input',
		},
	];

	const actual = shallow(<ComponentsList items={components} classes={{}} useIsolatedLinks />);
	expect(actual).toMatchSnapshot();
});

it('should render sections with nested components', () => {
	const components = [
		{
			visibleName: 'Button',
			slug: 'button',
			href: '#button',
		},
		{
			visibleName: 'Input',
			slug: 'input',
			href: '#input',
		},
	];
	const actual = shallow(<ComponentsListRenderer items={components} classes={{}} />);

	expect(actual).toMatchSnapshot();
});

it('should return null when the list is empty', () => {
	const actual = shallow(<ComponentsListRenderer items={[]} classes={{}} />);

	expect(actual.getElement()).toBe(null);
});

it('should ignore items without visibleName', () => {
	const components = [
		{
			visibleName: 'Button',
			slug: 'button',
			href: '#button',
		},
		{
			slug: 'input',
			href: '#input',
		},
	];
	const actual = shallow(<ComponentsListRenderer items={components} classes={{}} />);

	expect(actual).toMatchSnapshot();
});
