import {
	Context,
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';

interface ScrollSectionsContext<SectionName extends string = string> {
	addSection: (name: SectionName) => (ref: HTMLElement) => void;
	currentSection: SectionName;
}

const scrollSectionsContext = createContext<ScrollSectionsContext>({
	addSection: () => () => ({}),
	currentSection: '',
});

export const useScrollSections = <SectionName extends string = string>() =>
	useContext<ScrollSectionsContext<SectionName>>(
		scrollSectionsContext as Context<ScrollSectionsContext<SectionName>>
	);

interface Section<SectionName extends string = string> {
	name: SectionName;
	ref: HTMLElement;
}

interface Props<SectionName extends string = string> {
	children: ReactNode;
	defaultSection: SectionName;
	scrollOffset?: number;
}

export const ScrollSectionsProvider = <SectionName extends string = string>({
	children,
	defaultSection,
	scrollOffset = 0,
}: Props<SectionName>) => {
	const sections = useRef<Section<SectionName>[]>([]);
	const [currentSection, setCurrentSection] = useState(defaultSection);

	const addSection = (name: SectionName) => (ref: HTMLElement) => {
		sections.current.push({ name, ref });
	};

	useEffect(() => {
		const sectionsOffsets = sections.current
			.filter(({ ref }) => ref)
			.map(({ name, ref }) => ({
				name,
				offset: ref.offsetTop,
			}))
			.sort((sectionA, sectionB) => sectionB.offset - sectionA.offset);

		const onScroll = () => {
			const scroll = window.scrollY;
			const section = sectionsOffsets.find(
				({ offset }) => offset < scroll + scrollOffset
			);

			setCurrentSection(section ? section.name : defaultSection);
		};

		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [sections]);

	return (
		<scrollSectionsContext.Provider
			value={{
				addSection,
				currentSection,
			}}
		>
			{children}
		</scrollSectionsContext.Provider>
	);
};
