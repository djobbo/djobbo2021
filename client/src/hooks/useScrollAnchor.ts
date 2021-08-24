import { MutableRefObject, useEffect, useState } from 'react';

interface Anchor<AnchorName extends string = string> {
	name: AnchorName;
	ref: MutableRefObject<HTMLElement>;
}

export const useScrollAnchor = <AnchorName extends string = string>(
	anchors: Anchor<AnchorName>[],
	defaultAnchorName: AnchorName,
	scrollOffset = 0
): AnchorName => {
	const [currentAnchor, setCurrentAnchor] = useState(defaultAnchorName);

	useEffect(() => {
		const anchorsOffsets = anchors
			.filter(({ ref }) => ref && ref.current)
			.map(({ name, ref }) => ({
				name,
				offset: ref.current.offsetTop,
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

	return currentAnchor ?? defaultAnchorName;
};
