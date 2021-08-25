import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface Anchor<AnchorName extends string = string> {
	name: AnchorName;
	ref: MutableRefObject<HTMLElement>;
}

export const useScrollAnchor = <AnchorName extends string = string>(
	anchorNames: AnchorName[],
	defaultAnchorName: AnchorName,
	scrollOffset = 0
): [anchors: MutableRefObject<HTMLElement>[], currentAnchor: AnchorName] => {
	const anchors = useRef(
		anchorNames.map<Anchor<AnchorName>>((name) => ({
			name,
			ref: { current: null },
		}))
	);
	const [currentAnchor, setCurrentAnchor] = useState(defaultAnchorName);

	useEffect(() => {
		const anchorsOffsets = anchors.current
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
	}, [anchorNames]);

	return [
		anchors.current.map(({ ref }) => ref),
		currentAnchor ?? defaultAnchorName,
	];
};
