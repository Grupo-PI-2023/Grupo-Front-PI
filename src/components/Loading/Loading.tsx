export default function Loading() {
	return (
		<div className="fixed left-0 top-0 flex h-[100vh] w-[100vw] items-center justify-center bg-slate-800 bg-opacity-15 backdrop-blur-sm">
			<div className="loader--style2" title="1">
				<svg
					version="1.1"
					id="loader-1"
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="10rem"
					height="10rem"
					viewBox="0 0 50 50"
				>
					<path
						fill="#5321BF"
						d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
					>
						<animateTransform
							attributeType="xml"
							attributeName="transform"
							type="rotate"
							from="0 25 25"
							to="360 25 25"
							dur="0.6s"
							repeatCount="indefinite"
						/>
					</path>
				</svg>
			</div>
		</div>
	);
}
