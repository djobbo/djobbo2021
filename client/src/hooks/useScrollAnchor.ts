import { useEffect, useRef, useState } from 'react';

interface Anchor<AnchorName extends string = string> {
	name: AnchorName;
	ref: HTMLElement;
}

export const useScrollAnchor = <AnchorName extends string = string>(
	defaultAnchorName: AnchorName,
	scrollOffset = 0
): [
	addRef: (name: AnchorName) => (ref: HTMLElement) => void,
	currentAnchor: AnchorName
] => {
	const anchors = useRef<Anchor<AnchorName>[]>([]);
	const [currentAnchor, setCurrentAnchor] = useState(defaultAnchorName);

	const addAnchor = (name: AnchorName) => (ref: HTMLElement) => {
		anchors.current.push({ name, ref });
	};

	useEffect(() => {
		const anchorsOffsets = anchors.current
			.filter(({ ref }) => ref)
			.map(({ name, ref }) => ({
				name,
				offset: ref.offsetTop,
			}))
			.sort((anchorA, anchorB) => anchorB.offset - anchorA.offset);

		const onScroll = () => {
			const scroll = window.scrollY;
			const anchor = anchorsOffsets.find(
				({ offset }) => offset < scroll + scrollOffset
			);

			setCurrentAnchor(anchor ? anchor.name : defaultAnchorName);
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [anchors]);

	return [addAnchor, currentAnchor ?? defaultAnchorName];
};
