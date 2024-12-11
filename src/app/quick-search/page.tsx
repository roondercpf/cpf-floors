import ColorFilter from "@/components/ColorFilter";

const options = [
	"tan tones",
	"off whites",
	"naturals",
	"grays",
	"dark naturals",
];

async function QuickSearch({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	let { tone } = await searchParams;

	if (!tone || Array.isArray(tone) || !options.includes(tone.toLowerCase())) {
		tone = "";
	}

	return (
		<>
			<ColorFilter tone={tone.toLowerCase()} />
		</>
	);
}

export default QuickSearch;
