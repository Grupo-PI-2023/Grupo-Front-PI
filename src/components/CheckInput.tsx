import React, { useState } from 'react';

interface CustomCheckInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	key: any;
	selected: boolean;
	customWidth?: string;
}

const CheckInput: React.FC<CustomCheckInputProps> = ({
	label,
	selected,
	key,
	customWidth,
	...inputProps
}) => {
	const [checked, setChecked] = useState<boolean>(selected);
	return (
		<div key={key}>
			<div className="flex items-center">
				<input
					className="hidden"
					type="checkbox"
					name={inputProps.name}
					id={inputProps.id}
					checked={checked}
					onChange={() => setChecked(!checked)}
					disabled={inputProps.disabled}
				/>
				<label
					className={`flex cursor-pointer items-center ${
						checked ? 'text-[#4B00E0]' : 'text-[#000]'
					} `}
					htmlFor={inputProps.id}
				>
					<div
						className={`mr-2 flex h-3.5 w-3.5 items-center justify-center ${
							checked
								? 'border-[1px] border-[#4B00E0] bg-[#4B00E0]'
								: 'border-[1px] border-[#4B00E0] text-[#fff]'
						}`}
					>
						{checked && (
							<svg
								className="pointer-events-none h-2 w-3 fill-current text-white"
								viewBox="0 0 20 20"
							>
								<path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
							</svg>
						)}
					</div>
					<span className="text-sm font-medium">{label}</span>
				</label>
			</div>
		</div>
	);
};

export default CheckInput;
